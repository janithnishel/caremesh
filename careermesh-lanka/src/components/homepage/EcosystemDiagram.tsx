/**
 * EcosystemDiagram — "From Academic Potential to Professional Opportunity."
 * A horizontal flow of stages with scroll-triggered line drawing between nodes.
 * Falls back to a vertical stack on mobile.
 */
const stages = [
  { label: "Students", icon: "🎓" },
  { label: "Universities & Education", icon: "🏛" },
  { label: "Career Preparation", icon: "🧭" },
  { label: "Employer Connections", icon: "🔗" },
  { label: "Internship & Graduate Recruitment", icon: "📋" },
  { label: "Professional Development", icon: "📈" },
  { label: "Career Opportunities", icon: "🎯" },
];

export function EcosystemDiagram() {
  return (
    <div>
      {/* Desktop: 4-column grid */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-4">
          {stages.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center gap-3 text-center">
              <div className="flex size-12 items-center justify-center rounded-full border border-teal-600/40 bg-teal-50 text-xl">
                <span aria-hidden="true">{s.icon}</span>
              </div>
              <p className="max-w-[10rem] text-xs font-semibold leading-snug text-navy-900">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet: vertical timeline with connector line */}
      <ol className="lg:hidden">
        {stages.map((s, i) => (
          <li key={s.label} className="relative flex items-start gap-4 pb-6 last:pb-0">
            {i < stages.length - 1 && (
              <div
                className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-border-strong"
                aria-hidden="true"
              />
            )}
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-teal-600/40 bg-teal-50 text-xl">
              <span aria-hidden="true">{s.icon}</span>
            </div>
            <p className="pt-3 text-sm font-semibold leading-snug text-navy-900">{s.label}</p>
          </li>
        ))}
      </ol>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        CareerMesh manages the relationships between each stage — connecting people, creating
        opportunities, and helping organizations run their talent operations through ClientFlow.
      </p>
    </div>
  );
}
