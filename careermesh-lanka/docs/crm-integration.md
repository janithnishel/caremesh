# ClientFlow CRM Integration

This document describes how CareerMesh inquiry forms integrate with the
ClientFlow CRM. It covers architecture, configuration, field mappings and
testing.

## Architecture

All inquiry forms call a single server function, `submitInquiry`
(`src/lib/forms/submit.functions.ts`), which delegates to
`processSubmission` (`src/lib/forms/submit.server.ts`). The server function
is a thin wrapper; all runtime logic lives in the server-only module.

```
Form (client) → useFormSubmission → submitInquiry (server fn)
  → processSubmission (server-only)
    → validate → map pipeline → CrmAdapter.submit → ClientFlow webhook
```

## Adapters

A `CrmAdapter` interface (`src/lib/crm/types.ts`) has two implementations:

1. **Mock adapter** (`src/lib/crm/mock-adapter.server.ts`) — used when
   ClientFlow is not configured. Simulates a successful 2xx so the full flow
   works in local development and preview.
2. **ClientFlow adapter** (`src/lib/crm/clientflow-adapter.server.ts`) —
   POSTs the submission to the ClientFlow webhook with an API key header.

`getAdapter()` (`src/lib/crm/adapter.server.ts`) selects the ClientFlow
adapter when both env vars are present, otherwise the mock adapter.

## Environment variables (NAMES only — never commit values)

| Variable | Purpose | Set where |
|---|---|---|
| `CLIENTFLOW_WEBHOOK_URL` | ClientFlow ingestion endpoint | server runtime |
| `CLIENTFLOW_API_KEY` | Server-only API key | server runtime |

These are read **inside** the handler at call time. They are never imported
into client code and never logged.

## Security layers

- **Server-side Zod validation** — every field re-validated on the server
  (`src/lib/forms/schemas.ts`), independent of client validation.
- **Honeypot** — a hidden `company_website` field; any non-empty value is
  rejected as spam.
- **Idempotency key** — each submission sends a UUID; duplicate keys return
  the cached success instead of creating a duplicate lead.
- **Rate limiting** — in-memory, 10 submissions per minute per form+key
  bucket. (Production: back with Redis/DB.)
- **Failed-submissions log** — if the CRM call fails, the full payload is
  logged via `console.error("[failed-submission]", ...)` so no lead is lost.
  Production should persist this and alert the team.
- **Success only on 2xx** — the form never shows success unless the adapter
  returns `ok: true`.

## Pipeline mapping

Each form maps to a ClientFlow pipeline (`src/data/pipelines.ts`):

| Form name | Pipeline |
|---|---|
| student-registration | Pipeline 1 — Student Applications |
| education-partnership | Pipeline 2 — Education Partnerships |
| hire-an-intern | Pipeline 3 — Employer Partnerships |
| graduate-recruitment | Pipeline 4 — Graduate Recruitment |
| clientflow-demo | Pipeline 5 — ClientFlow CRM Sales |
| general-contact | Pipeline 5 — ClientFlow CRM Sales |

## Preserved metadata

Every submission preserves: `source` (referrer), `landingPage` (current URL),
`formName`, `submissionDate`, `inquiryCategory`, `organizationType`, and
`consent` status.

## CV uploads

The student registration form accepts an optional CV. The client validates
type (PDF/DOC/DOCX) and size (max 5MB) immediately; the server re-validates
the file **metadata** (name, size, type) in `processSubmission`.

The CV **binary** is not sent through the server function. A dedicated
secure upload path is required for the binary:

- Server-side type + size checks (done for metadata).
- Private storage (Cloud Storage or equivalent) — **hook only**; not wired
  until a storage backend is enabled.
- Signed URLs for access — never public.
- A malware-scanning hook point is documented; plug in before go-live.
- Retention period: documented per the privacy policy; default 12 months
  unless the owner specifies otherwise.

To enable binary uploads, add a server route under `src/routes/api/` that
accepts multipart form data, validates, stores privately, and returns a
reference token included in the CRM submission.

## Testing the mock flow end-to-end

1. Start the dev server with no `CLIENTFLOW_*` env vars set.
2. Open `/students/register` and submit the form.
3. The server console prints `[CRM mock] lead captured → pipeline "Student
   Applications" (form: student-registration)`.
4. The form shows the success state.
5. To test failure handling, temporarily set `CLIENTFLOW_WEBHOOK_URL` to an
   invalid URL and `CLIENTFLOW_API_KEY` to any value; submissions then show
   an honest, retryable error and the failed-submission log is written.

## Adding Cloudflare Turnstile

A Turnstile (or equivalent) step is planned. To add it:

1. Render the Turnstile widget in each form.
2. Send the token as an extra field in the submission payload.
3. Verify the token server-side in `processSubmission` before pipeline
   mapping, using the `TURNSTILE_SECRET_KEY` env var (server-only).
