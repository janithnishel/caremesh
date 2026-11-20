import type { CrmAdapter } from "./types";
import { mockAdapter } from "./mock-adapter.server";
import { clientflowAdapter } from "./clientflow-adapter.server";

/**
 * Returns the active CRM adapter. Uses the ClientFlow adapter when both
 * CLIENTFLOW_WEBHOOK_URL and CLIENTFLOW_API_KEY are set on the server;
 * otherwise falls back to the mock adapter for local development.
 */
export function getAdapter(): CrmAdapter {
  const webhookUrl = process.env["CLIENTFLOW_WEBHOOK_URL"];
  const apiKey = process.env["CLIENTFLOW_API_KEY"];
  if (webhookUrl && apiKey) {
    return clientflowAdapter;
  }
  return mockAdapter;
}
