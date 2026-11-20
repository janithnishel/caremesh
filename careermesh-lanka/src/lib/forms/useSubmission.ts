import { useCallback, useState } from "react";
import { submitInquiry } from "./submit.functions";
import type { FormName } from "./schemas";

export type CvMeta = { name: string; size: number; type: string };

function makeIdempotencyKey(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

/**
 * useFormSubmission — shared client hook for every inquiry form.
 * Calls the submitInquiry server function and only flips to the success
 * state when the server confirms a CRM 2xx. Shows an honest, retryable
 * error otherwise.
 */
export function useFormSubmission(formName: FormName) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submit = useCallback(
    async (data: Record<string, unknown>, honeypot: string, cv?: CvMeta): Promise<boolean> => {
      setSubmitError(null);
      setSubmitting(true);
      try {
        const result = await submitInquiry({
          data: {
            formName,
            data,
            honeypot,
            idempotencyKey: makeIdempotencyKey(),
            source: typeof window !== "undefined" ? document.referrer || "direct" : "direct",
            landingPage: typeof window !== "undefined" ? window.location.href : undefined,
            cv,
          },
        });
        if (result.ok) {
          setSubmitted(true);
          return true;
        }
        setSubmitError(result.error ?? "Something went wrong. Please try again.");
        return false;
      } catch {
        setSubmitError("We couldn't submit your form. Please check your connection and try again.");
        return false;
      } finally {
        setSubmitting(false);
      }
    },
    [formName],
  );

  const clearSubmitted = useCallback(() => {
    setSubmitted(false);
    setSubmitError(null);
  }, []);

  return { submitting, submitted, submitError, submit, clearSubmitted };
}
