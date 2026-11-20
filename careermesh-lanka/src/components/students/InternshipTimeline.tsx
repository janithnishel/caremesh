import { Container } from "@/components/shared/Container";
import { programJourney } from "@/data/programs";
import { CheckCircle2 } from "lucide-react";

/**
 * InternshipTimeline — visual program journey timeline.
 * Horizontal stepper on desktop, vertical on mobile, with durations from config.
 */
export function InternshipTimeline() {
  return (
    <div className="mt-12">
      {/* Desktop horizontal stepper */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 gap-4">
          {programJourney.map((step, i) => (
            <div key={step.step} className="relative flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white shadow-[var(--shadow-e1)]">
                  {String(step.step).padStart(2, "0")}
                </div>
                {i < programJourney.length - 1 && (
                  <div className="h-0.5 flex-1 rounded-full bg-teal-600/30" aria-hidden="true" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-900">{step.title}</h3>
                {step.duration && (
                  <p className="mt-0.5 text-xs font-semibold text-teal-700">{step.duration}</p>
                )}
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
        {programJourney.map((step, i) => (
          <li key={step.step} className="relative flex gap-4 pb-8 last:pb-0">
            {i < programJourney.length - 1 && (
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
              {step.duration && (
                <p className="mt-0.5 text-xs font-semibold text-teal-700">{step.duration}</p>
              )}
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
 * ProgramJourneyInline — compact journey pills used in the student landing page.
 */
export function StudentJourney() {
  return (
    <Container>
      <ol className="flex flex-wrap items-center justify-center gap-3">
        {programJourney.map((step, i) => (
          <li key={step.step} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-navy-900 shadow-[var(--shadow-e1)]">
              <CheckCircle2 className="size-4 text-teal-600" />
              <span className="text-xs text-teal-700">{String(step.step).padStart(2, "0")}</span>
              {step.title}
            </span>
            {i < programJourney.length - 1 && (
              <span className="hidden text-muted-foreground/40 sm:inline">→</span>
            )}
          </li>
        ))}
      </ol>
    </Container>
  );
}
