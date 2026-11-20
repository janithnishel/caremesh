/**
 * Server-only submission processing: honeypot, idempotency, rate limiting,
 * server-side validation, pipeline mapping, CRM dispatch and a
 * failed-submissions log so no lead is lost.
 */
import { z } from "zod";
import { getAdapter } from "@/lib/crm/adapter.server";
import type { CrmSubmission } from "@/lib/crm/types";
import { formPipelineMap, pipelines } from "@/data/pipelines";
import { formSchemas, getContactSchema, type SubmissionPayload } from "./schemas";

const ALLOWED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_CV_MB = 5;

// In-memory idempotency + rate limiting (demo / single-instance only).
// Production: back these with Redis or a database table.
const seenKeys = new Map<string, { status: "ok" | "error"; at: number }>();
const rateBuckets = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT = 10; // submissions per window per bucket
const RATE_WINDOW = 60_000; // 1 minute

function logFailedSubmission(payload: SubmissionPayload, error: string) {
  const entry = {
    at: new Date().toISOString(),
    formName: payload.formName,
    idempotencyKey: payload.idempotencyKey,
    error,
    data: payload.data,
  };
  // Failed-submissions log — no lead is lost. In production, persist this to a
  // durable store and alert the team so submissions can be retried manually.
  // eslint-disable-next-line no-console
  console.error("[failed-submission]", JSON.stringify(entry));
}

export async function processSubmission(payload: SubmissionPayload) {
  // 1. Honeypot — silently reject if filled by a bot.
  if (payload.honeypot && payload.honeypot.length > 0) {
    return { ok: false as const, error: "Submission could not be processed." };
  }

  // 2. Idempotency — return cached success for duplicate keys.
  const cached = seenKeys.get(payload.idempotencyKey);
  if (cached && cached.status === "ok") {
    return { ok: true as const, recordId: "cached" };
  }

  // 3. Rate limiting.
  const now = Date.now();
  const bucketKey = `${payload.formName}:${payload.idempotencyKey.slice(0, 8)}`;
  const bucket = rateBuckets.get(bucketKey);
  if (bucket && now - bucket.windowStart < RATE_WINDOW) {
    if (bucket.count >= RATE_LIMIT) {
      return {
        ok: false as const,
        error: "Too many submissions. Please wait a moment and try again.",
      };
    }
    bucket.count += 1;
  } else {
    rateBuckets.set(bucketKey, { count: 1, windowStart: now });
  }

  // 4. Server-side CV metadata validation (type + size).
  if (payload.cv) {
    if (payload.cv.size > MAX_CV_MB * 1024 * 1024) {
      return { ok: false as const, error: `CV must be under ${MAX_CV_MB}MB.` };
    }
    if (!ALLOWED_CV_TYPES.includes(payload.cv.type)) {
      return { ok: false as const, error: "CV must be a PDF, DOC or DOCX file." };
    }
  }

  // 5. Server-side per-form validation.
  let validated: Record<string, unknown>;
  try {
    if (payload.formName === "general-contact") {
      const category = (payload.data as Record<string, unknown>)["category"] ?? "general";
      const schema = getContactSchema(String(category));
      validated = schema.parse(payload.data) as Record<string, unknown>;
    } else {
      const schema = formSchemas[payload.formName];
      validated = schema.parse(payload.data) as Record<string, unknown>;
    }
  } catch (e) {
    const msg =
      e instanceof z.ZodError ? e.errors.map((x) => x.message).join(", ") : "Validation failed.";
    return { ok: false as const, error: msg };
  }

  // 6. Map to CRM pipeline.
  const pipelineKey = formPipelineMap[payload.formName] ?? "clientflowSales";
  const pipeline = pipelines[pipelineKey];
  const v = validated as Record<string, unknown>;

  const meta: CrmSubmission["meta"] = {
    submissionDate: new Date().toISOString(),
    consent: Boolean(v["consent"]),
  };
  if (payload.source) meta.source = payload.source;
  if (payload.landingPage) meta.landingPage = payload.landingPage;
  if (payload.cv) meta.cv = payload.cv;

  const orgType =
    (v["organizationType"] as string | undefined) ?? (v["institutionType"] as string | undefined);

  const submission: CrmSubmission = {
    pipelineId: pipeline.id,
    pipelineName: pipeline.name,
    formName: payload.formName,
    inquiryCategory: (v["category"] as string | undefined) ?? payload.formName,
    fields: validated,
    meta,
  };
  if (orgType) submission.organizationType = orgType;

  // 7. Dispatch to CRM adapter — success only on a confirmed 2xx.
  const adapter = getAdapter();
  const result = await adapter.submit(submission);

  seenKeys.set(payload.idempotencyKey, {
    status: result.ok ? "ok" : "error",
    at: Date.now(),
  });

  if (!result.ok) {
    logFailedSubmission(payload, result.error ?? "Unknown error");
  }

  return result;
}
