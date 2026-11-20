import type { CrmAdapter, CrmResult } from "./types";

/**
 * Mock CRM adapter — used when CLIENTFLOW_WEBHOOK_URL / CLIENTFLOW_API_KEY
 * are not configured. Simulates a successful CRM 2xx response so the full
 * submission flow works end-to-end in local development and preview.
 */
export const mockAdapter: CrmAdapter = {
  name: "mock",
  async submit(submission): Promise<CrmResult> {
    // Simulate network + CRM processing latency.
    await new Promise((r) => setTimeout(r, 350));
    // eslint-disable-next-line no-console
    console.log(
      `[CRM mock] lead captured → pipeline "${submission.pipelineName}" (form: ${submission.formName})`,
    );
    return {
      ok: true,
      recordId: "mock_" + Math.random().toString(36).slice(2, 10),
    };
  },
};
