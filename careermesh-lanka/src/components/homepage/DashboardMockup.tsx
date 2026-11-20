import { SampleBadge } from "@/components/shared/Badge";

/**
 * DashboardMockup — realistic coded CRM dashboard preview.
 * Generic labels only; clearly marked as sample data. No real customer data.
 */
const pipelineColumns = [
  { name: "Applied", count: 24, tone: "bg-navy-100" },
  { name: "Screening", count: 12, tone: "bg-cyan-100" },
  { name: "Interview", count: 7, tone: "bg-amber-100" },
  { name: "Offer", count: 3, tone: "bg-teal-50" },
];

const contacts = [
  { name: "Sample Candidate", org: "IT Applicant", tag: "Student" },
  { name: "Sample Employer", org: "Hiring Partner", tag: "Employer" },
  { name: "Sample University", org: "Education Partner", tag: "University" },
];

const interviews = [
  { time: "09:30", with: "Sample Candidate", role: "Software Intern" },
  { time: "11:00", with: "Sample Candidate", role: "Finance Intern" },
  { time: "14:15", with: "Sample Candidate", role: "Marketing Intern" },
];

export function DashboardMockup() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-navy-900 shadow-[var(--shadow-e3)]">
      <SampleBadge className="absolute right-3 top-3 z-10" label="Sample dashboard" />
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-xs font-medium text-white/50">ClientFlow CRM — Workspace</span>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-3">
        {/* left: contacts + pipeline */}
        <div className="space-y-4 lg:col-span-2">
          {/* contacts */}
          <div className="rounded-lg border border-white/10 bg-navy-800 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Contacts
            </p>
            <div className="space-y-2">
              {contacts.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2.5 rounded-md bg-navy-900/60 px-2.5 py-2"
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-teal-500/20 text-[0.6rem] font-bold text-teal-500">
                    {c.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-white">{c.name}</p>
                    <p className="truncate text-[0.65rem] text-white/50">{c.org}</p>
                  </div>
                  <span className="rounded-full bg-cyan-500/15 px-2 py-0.5 text-[0.6rem] font-semibold text-cyan-500">
                    {c.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* pipeline */}
          <div className="rounded-lg border border-white/10 bg-navy-800 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Recruitment Pipeline
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {pipelineColumns.map((col) => (
                <div key={col.name} className="rounded-md bg-navy-900/60 p-2">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[0.6rem] font-semibold text-white/70">{col.name}</span>
                    <span
                      className={`size-4 rounded-full ${col.tone} text-center text-[0.55rem] font-bold leading-4 text-navy-900`}
                    >
                      {col.count}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[...Array(Math.min(col.count, 3))].map((_, i) => (
                      <div key={i} className="h-7 rounded bg-white/10" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right: interviews + chart */}
        <div className="space-y-4">
          <div className="rounded-lg border border-white/10 bg-navy-800 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Upcoming Interviews
            </p>
            <div className="space-y-2">
              {interviews.map((iv) => (
                <div
                  key={iv.time}
                  className="flex items-start gap-2 rounded-md bg-navy-900/60 px-2.5 py-2"
                >
                  <span className="text-xs font-bold text-cyan-500">{iv.time}</span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-white">{iv.with}</p>
                    <p className="truncate text-[0.65rem] text-white/50">{iv.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-navy-800 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Performance
            </p>
            <div className="flex h-20 items-end justify-between gap-1.5">
              {[40, 65, 50, 78, 60, 88, 72].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-t bg-linear-to-t from-cyan-500/40 to-cyan-500"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[0.65rem] text-white/50">
              <span className="size-2 rounded-full bg-cyan-500" /> Automated workflows active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
