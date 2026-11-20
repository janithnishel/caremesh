import { motion } from "./motion";

/**
 * TalentNetwork — the hero's connected talent ecosystem composition.
 * Four stakeholder groups around a central CareerMesh node, joined by
 * animated connection lines, with a ClientFlow technology layer of
 * small data chips. Built as a coded SVG/React composition.
 */
const nodes = [
  {
    id: "students",
    label: "Students & Graduates",
    x: 50,
    y: 16,
    color: "var(--color-teal-600)",
    icon: "🎓",
  },
  {
    id: "universities",
    label: "Universities",
    x: 86,
    y: 40,
    color: "var(--color-cyan-500)",
    icon: "🏛",
  },
  {
    id: "employers",
    label: "Employers",
    x: 70,
    y: 84,
    color: "var(--color-amber-400)",
    icon: "💼",
  },
  {
    id: "recruiters",
    label: "Graduate Recruiters",
    x: 30,
    y: 84,
    color: "var(--color-navy-700)",
    icon: "🤝",
  },
];

const chips = [
  { x: 18, y: 30, label: "Contacts" },
  { x: 78, y: 22, label: "Pipelines" },
  { x: 82, y: 64, label: "Interviews" },
  { x: 16, y: 62, label: "Workflows" },
];

export function TalentNetwork() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden pb-8">
      <svg
        viewBox="0 0 100 100"
        className="w-full"
        role="img"
        aria-label="CareerMesh connected talent network: students, universities, employers and graduate recruiters around a central CareerMesh node, linked by ClientFlow technology."
      >
        {/* connection lines from centre to each node */}
        {nodes.map((n) => (
          <line
            key={`line-${n.id}`}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="var(--color-teal-600)"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            strokeLinecap="round"
            className="cm-line-draw"
            style={{ ["--len" as string]: "60" }}
          />
        ))}

        {/* ClientFlow data chips */}
        {chips.map((c) => (
          <g key={c.label} className="cm-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
            <rect
              x={c.x - 9}
              y={c.y - 3.5}
              width="18"
              height="7"
              rx="3.5"
              fill="var(--color-cyan-50)"
              stroke="var(--color-cyan-500)"
              strokeWidth="0.4"
              strokeOpacity="0.5"
            />
            <text
              x={c.x}
              y={c.y + 1.4}
              textAnchor="middle"
              fontSize="2.6"
              fill="var(--color-cyan-800)"
              fontWeight="700"
            >
              {c.label}
            </text>
          </g>
        ))}

        {/* outer nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r="7.5"
              fill="var(--color-card)"
              stroke={n.color}
              strokeWidth="1.4"
            />
            <circle cx={n.x} cy={n.y} r="3.4" fill={n.color} />
          </g>
        ))}

        {/* centre node */}
        <circle cx="50" cy="50" r="11" fill="var(--color-navy-900)" />
        <circle cx="50" cy="50" r="4.4" fill="var(--color-teal-500)" />
      </svg>

      {/* labels overlay */}
      <div className="pointer-events-none absolute inset-0">
        {nodes.map((n) => {
          const left = `${n.x}%`;
          const top = `${n.y}%`;
          return (
            <span
              key={`lbl-${n.id}`}
              className="absolute -translate-x-1/2 translate-y-2 whitespace-nowrap text-[0.6rem] font-semibold text-navy-900 md:text-xs"
              style={{ left, top }}
            >
              {n.label}
            </span>
          );
        })}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.6rem] font-bold uppercase tracking-wide text-white">
          Network
        </span>
      </div>
    </div>
  );
}

export { motion };
