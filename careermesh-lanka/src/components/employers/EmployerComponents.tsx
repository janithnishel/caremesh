import { Container } from "@/components/shared/Container";
import { getIcon } from "@/lib/icons";
import { hiringSteps } from "@/data/employers";

/**
 * HiringProcess — six-step process diagram.
 * Horizontal stepper on desktop, vertical on mobile.
 */
export function HiringProcess() {
  return (
    <div className="mt-12">
      {/* Desktop horizontal stepper */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 gap-4">
          {hiringSteps.map((step, i) => (
            <div key={step.step} className="relative flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white shadow-[var(--shadow-e1)]">
                  {String(step.step).padStart(2, "0")}
                </div>
                {i < hiringSteps.length - 1 && (
                  <div className="h-0.5 flex-1 rounded-full bg-teal-600/30" aria-hidden="true" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-900">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet vertical */}
      <ol className="space-y-0 lg:hidden">
        {hiringSteps.map((step, i) => (
          <li key={step.step} className="relative flex gap-4 pb-8 last:pb-0">
            {i < hiringSteps.length - 1 && (
              <div
                className="absolute left-[22px] top-11 h-[calc(100%-2.75rem)] w-px bg-border-strong"
                aria-hidden="true"
              />
            )}
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white shadow-[var(--shadow-e1)]">
              {String(step.step).padStart(2, "0")}
            </div>
            <div className="flex-1 pt-1.5">
              <h3 className="text-base font-bold text-navy-900">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * TalentDisciplineCard — a discipline group card for the disciplines page.
 */
export function TalentDisciplineCard({
  group,
}: {
  group: { category: string; icon: string; disciplines: string[] };
}) {
  const Icon = getIcon(group.icon);
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]">
      <div className="flex size-12 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-bold text-navy-900">{group.category}</h3>
      <ul className="mt-3 space-y-1.5">
        {group.disciplines.map((d) => (
          <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-teal-600" aria-hidden="true" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * RecruitmentFeatureCard — a ClientFlow recruitment CRM feature card.
 */
export function RecruitmentFeatureCard({
  feature,
}: {
  feature: { icon: string; title: string; description: string };
}) {
  const Icon = getIcon(feature.icon);
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]">
      <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-bold text-navy-900">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </div>
  );
}
