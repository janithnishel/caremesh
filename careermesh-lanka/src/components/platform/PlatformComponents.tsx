import { Container } from "@/components/shared/Container";
import { getIcon } from "@/lib/icons";
import { automationFlows, type WorkflowStep } from "@/data/platform";
import { cn } from "@/lib/utils";

const toneClasses: Record<WorkflowStep["tone"], string> = {
  teal: "bg-teal-50 text-teal-700 border-teal-600/30",
  cyan: "bg-cyan-50 text-cyan-800 border-cyan-500/30",
  amber: "bg-amber-50 text-amber-700 border-amber-400/40",
  navy: "bg-navy-50 text-navy-700 border-navy-700/30",
};

/**
 * WorkflowDiagram — animated flow diagram for automation workflows.
 * Horizontal on desktop, vertical on mobile.
 */
export function WorkflowDiagram() {
  return (
    <div className="mt-12 space-y-10">
      {automationFlows.map((flow) => (
        <div
          key={flow.id}
          className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]"
        >
          <h3 className="text-base font-bold text-navy-900">{flow.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{flow.description}</p>

          {/* Desktop horizontal */}
          <div className="mt-6 hidden items-center gap-2 lg:flex lg:overflow-x-auto">
            {flow.steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div
                  className={cn(
                    "whitespace-nowrap rounded-md border px-3 py-2 text-xs font-semibold",
                    toneClasses[step.tone],
                  )}
                >
                  {step.label}
                </div>
                {i < flow.steps.length - 1 && (
                  <span className="text-muted-foreground" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile vertical */}
          <ol className="mt-6 space-y-3 lg:hidden">
            {flow.steps.map((step, i) => (
              <li key={step.label} className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    toneClasses[step.tone],
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "rounded-md border px-3 py-2 text-xs font-semibold",
                    toneClasses[step.tone],
                  )}
                >
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

/**
 * CRMFeatureCard — a ClientFlow CRM feature card with cyan accent.
 */
export function CRMFeatureCard({
  feature,
}: {
  feature: { icon: string; title: string; description: string };
}) {
  const Icon = getIcon(feature.icon);
  return (
    <div className="flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-e2)]">
      <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800">
        <Icon className="size-5" />
      </div>
      <h3 className="text-base font-bold text-navy-900">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </div>
  );
}

/**
 * WorkspaceDiagram — central CareerMesh business connected to organization workspaces.
 * Coded SVG composition with connection lines.
 */
export function WorkspaceDiagram() {
  return (
    <Container>
      <div className="relative mx-auto max-w-4xl rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-e2)] md:p-10">
        <div className="flex flex-col items-center gap-8">
          {/* Central node */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-16 items-center justify-center rounded-full bg-navy-900 text-center text-xs font-bold text-white shadow-[var(--shadow-e2)]">
              CareerMesh
              <br />
              Central
            </div>
          </div>

          {/* Connection lines (decorative) */}
          <div className="hidden h-8 w-px bg-border-strong lg:block" aria-hidden="true" />

          {/* Workspace nodes */}
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "University A Workspace", tone: "teal" as const },
              { label: "University B Workspace", tone: "teal" as const },
              { label: "Internship Provider Workspace", tone: "cyan" as const },
              { label: "Employer A Workspace", tone: "amber" as const },
              { label: "Employer B Workspace", tone: "amber" as const },
              { label: "Recruitment Agency Workspace", tone: "navy" as const },
              { label: "Corporate HR Workspace", tone: "navy" as const },
            ].map((node) => {
              const toneMap = {
                teal: "border-teal-600/40 bg-teal-50 text-teal-700",
                cyan: "border-cyan-500/40 bg-cyan-50 text-cyan-800",
                amber: "border-amber-400/50 bg-amber-50 text-amber-700",
                navy: "border-navy-700/40 bg-navy-50 text-navy-700",
              };
              return (
                <div
                  key={node.label}
                  className={cn(
                    "rounded-lg border px-4 py-3 text-center text-sm font-semibold",
                    toneMap[node.tone],
                  )}
                >
                  {node.label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-cloud p-5">
          <h4 className="text-sm font-bold text-navy-900">Access & privacy</h4>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-2">
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-600"
                aria-hidden="true"
              />
              Each organization has appropriate access restrictions. Workspaces do not share
              unrestricted data.
            </li>
            <li className="flex gap-2">
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-600"
                aria-hidden="true"
              />
              Private student information is not exposed to unauthorized organizations.
            </li>
            <li className="flex gap-2">
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-600"
                aria-hidden="true"
              />
              Student information shared with employers follows agreed consent and access policies.
            </li>
            <li className="flex gap-2">
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-600"
                aria-hidden="true"
              />
              Advanced multi-organization portal and matching functionality can be built later as a
              dedicated application.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

/**
 * PackageComparison — ClientFlow pricing package comparison.
 */
export function PackageComparison({
  packages,
}: {
  packages: {
    name: string;
    tagline: string;
    priceNote: string;
    features: string[];
    userLimit: string;
    workspace: string;
    automation: string;
    integrations: string;
    support: string;
    implementation: string;
    ctaLabel: string;
    ctaTo: string;
    highlight?: boolean;
  }[];
}) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {packages.map((pkg) => (
        <div
          key={pkg.name}
          className={cn(
            "flex h-full flex-col rounded-lg border bg-card p-6 shadow-[var(--shadow-e1)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-e2)]",
            pkg.highlight ? "border-teal-600 ring-2 ring-teal-600/20" : "border-border",
          )}
        >
          {pkg.highlight && (
            <span className="mb-3 inline-block w-fit rounded-full bg-teal-700 px-3 py-1 text-xs font-semibold text-white">
              Most popular
            </span>
          )}
          <h3 className="text-lg font-bold text-navy-900">{pkg.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pkg.tagline}</p>
          <p className="mt-4 text-base font-bold text-teal-700">{pkg.priceNote}</p>

          <dl className="mt-5 space-y-2.5 border-y border-border py-5 text-sm">
            <div className="flex justify-between gap-2">
              <dt className="text-muted-foreground">Users</dt>
              <dd className="text-right font-medium text-navy-900">{pkg.userLimit}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted-foreground">Workspaces</dt>
              <dd className="text-right font-medium text-navy-900">{pkg.workspace}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted-foreground">Automation</dt>
              <dd className="text-right font-medium text-navy-900">{pkg.automation}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted-foreground">Integrations</dt>
              <dd className="text-right font-medium text-navy-900">{pkg.integrations}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted-foreground">Support</dt>
              <dd className="text-right font-medium text-navy-900">{pkg.support}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted-foreground">Implementation</dt>
              <dd className="text-right font-medium text-navy-900">{pkg.implementation}</dd>
            </div>
          </dl>

          <ul className="mt-5 flex-1 space-y-2">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-600"
                  aria-hidden="true"
                />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={pkg.ctaTo}
            className={cn(
              "mt-6 inline-flex h-11 items-center justify-center rounded-md text-sm font-semibold transition-all duration-200 ease-out",
              pkg.highlight
                ? "bg-primary text-primary-foreground hover:bg-teal-800"
                : "border-2 border-secondary text-secondary hover:bg-navy-50",
            )}
          >
            {pkg.ctaLabel}
          </a>
        </div>
      ))}
    </div>
  );
}
