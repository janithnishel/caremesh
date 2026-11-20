import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { formNames, type SubmissionPayload } from "./schemas";
import { processSubmission } from "./submit.server";

const cvSchema = z
  .object({
    name: z.string().max(200),
    size: z.number().max(5 * 1024 * 1024, "CV must be under 5MB"),
    type: z.string().max(100),
  })
  .optional();

const submissionSchema = z.object({
  formName: z.enum(formNames),
  data: z.record(z.unknown()),
  honeypot: z.string().max(0, "Spam detected").optional().default(""),
  idempotencyKey: z.string().min(8).max(64),
  source: z.string().max(200).optional(),
  landingPage: z.string().max(500).optional(),
  cv: cvSchema,
});

/**
 * submitInquiry — the single server function every inquiry form calls.
 * Validates the envelope here; per-form validation, pipeline mapping and
 * CRM dispatch happen in processSubmission (server-only).
 */
export const submitInquiry = createServerFn({ method: "POST" })
  .validator((input) => submissionSchema.parse(input) as SubmissionPayload)
  .handler(async ({ data }) => {
    return processSubmission(data);
  });
