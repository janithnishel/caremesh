import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { approachStages, type ApproachStage } from "@/data/recruiters";

/**
 * GraduateJourney — four-stage strategic framework.
 * Horizontal on desktop, vertical on mobile. Each stage links to its detail page.
 */
export function GraduateJourney() {
  return (
    <div className="mt-12">
      {/* Desktop horizontal */}
      <div className="hidden gap-4 lg:grid lg:grid-cols-4">
        {approachStages.map((stage, i) => (
          <StageCard key={stage.number} stage={stage} index={i} horizontal />
        ))}
      </div>

      {/* Mobile vertical */}
      <ol className="space-y-0 lg:hidden">
        {approachStages.map((stage, i) => (
          <li key={stage.number} className="relative pb-8 last:pb-0">
            {i < approachStages.length - 1 && (
              <div
                className="absolute left-[22px] top-11 h-[calc(100%-2.75rem)] w-px bg-border-strong"
                aria-hidden="true"
              />
            )}
            <StageCard stage={stage} index={i} />
          </li>
        ))}
      </ol>
    </div>
  );
}

function StageCard({
  stage,
  index,
  horizontal = false,
}: {
  stage: ApproachStage;
  index: number;
  horizontal?: boolean;
}) {
  return (
    <a
      href={stage.detailTo}
      className={cn(
        "group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-e2)]",
        !horizontal && "flex-row gap-4",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white shadow-[var(--shadow-e1)]">
          {String(stage.number).padStart(2, "0")}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-base font-bold text-navy-900">{stage.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stage.tagline}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-500 group-hover:text-teal-400">
          Explore stage →
        </span>
      </div>
    </a>
  );
}

/**
 * TalentSolutionCard — a graduate recruiter benefit card (dark tone).
 */
export function TalentSolutionCard({
  benefit,
}: {
  benefit: { icon: string; title: string; description: string };
}) {
  const Icon = getIcon(benefit.icon);
  return (
    <div className="flex h-full flex-col gap-3 rounded-lg border border-white/10 bg-navy-800 p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-teal-500/40">
      <div className="flex size-10 items-center justify-center rounded-lg bg-teal-500/15 text-teal-500">
        <Icon className="size-5" />
      </div>
      <h3 className="text-base font-bold text-white">{benefit.title}</h3>
      <p className="text-sm leading-relaxed text-white/70">{benefit.description}</p>
    </div>
  );
}

/**
 * CorporateProgramCard — a stage detail card listing service items.
 */
export function CorporateProgramCard({
  stage,
}: {
  stage: { title: string; tagline: string; description: string; items: string[] } | undefined;
}) {
  if (!stage) return null;
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
      <h3 className="text-h3 text-navy-900">{stage.title}</h3>
      <p className="mt-1 text-sm font-semibold text-teal-700">{stage.tagline}</p>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{stage.description}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {stage.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-navy-900">
            <span
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-600"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
