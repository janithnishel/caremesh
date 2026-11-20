/**
 * CRM adapter types — browser-safe (no server imports).
 * The adapter implementations live in *.server.ts files.
 */

export interface CvMeta {
  name: string;
  size: number;
  type: string;
}

export interface CrmSubmission {
  pipelineId: number;
  pipelineName: string;
  formName: string;
  inquiryCategory: string;
  organizationType?: string;
  fields: Record<string, unknown>;
  meta: {
    source?: string;
    landingPage?: string;
    submissionDate: string;
    consent: boolean;
    cv?: CvMeta;
  };
}

export interface CrmResult {
  ok: boolean;
  recordId?: string;
  error?: string;
}

/**
 * CrmAdapter — pluggable interface for sending submissions to a CRM.
 * (a) ClientFlow server-side webhook / API implementation
 * (b) mock adapter for local development
 */
export interface CrmAdapter {
  name: string;
  submit(submission: CrmSubmission): Promise<CrmResult>;
}
