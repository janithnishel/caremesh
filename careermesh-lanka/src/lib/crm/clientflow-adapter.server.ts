import type { CrmAdapter, CrmResult, CrmSubmission } from "./types";

/**
 * ClientFlow CRM adapter — sends submissions to the ClientFlow server-side
 * webhook / API. Credentials are read from environment variables at call
 * time (inside the handler) and never exposed to the browser.
 *
 * Required env vars (NAMES only — never hardcode values):
 *   CLIENTFLOW_WEBHOOK_URL  — the ClientFlow ingestion endpoint
 *   CLIENTFLOW_API_KEY       — server-only API key
 */
export const clientflowAdapter: CrmAdapter = {
  name: "clientflow",
  async submit(submission: CrmSubmission): Promise<CrmResult> {
    const webhookUrl = process.env["CLIENTFLOW_WEBHOOK_URL"];
    const apiKey = process.env["CLIENTFLOW_API_KEY"];

    if (!webhookUrl || !apiKey) {
      return {
        ok: false,
        error:
          "ClientFlow CRM is not configured. Set CLIENTFLOW_WEBHOOK_URL and CLIENTFLOW_API_KEY on the server.",
      };
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify(submission),
      });

      if (res.status >= 200 && res.status < 300) {
        const body = (await res.json().catch(() => ({}))) as {
          recordId?: string;
          id?: string;
        };
        const recordId = body.recordId ?? body.id;
        return recordId ? { ok: true, recordId } : { ok: true };
      }

      return {
        ok: false,
        error: `ClientFlow responded with status ${res.status}.`,
      };
    } catch (e) {
      return {
        ok: false,
        error:
          e instanceof Error
            ? `Network error contacting ClientFlow CRM: ${e.message}`
            : "Network error contacting ClientFlow CRM.",
      };
    }
  },
};
