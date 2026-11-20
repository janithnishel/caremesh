import type { SVGProps } from "react";

/**
 * CareerMesh Logo — a connected-network mark.
 * Four outer nodes (teal-600, cyan-500, amber-400, navy-800) around a
 * navy-900 centre node, joined by connection lines representing the
 * four stakeholder groups woven into one network.
 */

type LogoProps = {
  variant?: "horizontal" | "compact" | "symbol";
  onDark?: boolean;
  className?: string;
};

const nodeFill = {
  teal: "var(--color-teal-600)",
  cyan: "var(--color-cyan-500)",
  amber: "var(--color-amber-400)",
  navy: "var(--color-navy-800)",
  center: "var(--color-navy-900)",
};

export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" {...props}>
      {/* connection lines */}
      <g stroke="var(--color-teal-600)" strokeWidth="1.5" opacity="0.55" strokeLinecap="round">
        <line x1="24" y1="24" x2="24" y2="8" />
        <line x1="24" y1="24" x2="40" y2="16" />
        <line x1="24" y1="24" x2="40" y2="32" />
        <line x1="24" y1="24" x2="8" y2="32" />
        <line x1="24" y1="24" x2="8" y2="16" />
      </g>
      {/* outer nodes */}
      <circle cx="24" cy="8" r="3.4" fill={nodeFill.teal} />
      <circle cx="40" cy="16" r="3.4" fill={nodeFill.cyan} />
      <circle cx="40" cy="32" r="3.4" fill={nodeFill.amber} />
      <circle cx="8" cy="32" r="3.4" fill={nodeFill.navy} />
      <circle cx="8" cy="16" r="3.4" fill={nodeFill.teal} />
      {/* centre node */}
      <circle cx="24" cy="24" r="5.6" fill={nodeFill.center} />
      <circle cx="24" cy="24" r="2.2" fill="var(--color-teal-500)" />
    </svg>
  );
}

export function Logo({ variant = "horizontal", onDark = false, className = "" }: LogoProps) {
  const wordColor = onDark ? "text-white" : "text-navy-900";
  const subColor = onDark ? "text-white/60" : "text-muted-foreground";

  if (variant === "symbol") {
    return <LogoMark className={className} />;
  }

  if (variant === "compact") {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <LogoMark className="h-8 w-8 shrink-0" />
        <span className={`font-display text-lg font-extrabold tracking-tight ${wordColor}`}>
          CareerMesh
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight ${wordColor}`}>
          CareerMesh
        </span>
        <span className={`text-[0.625rem] font-semibold uppercase tracking-[0.18em] ${subColor}`}>
          Lanka
        </span>
      </span>
    </span>
  );
}

/** Favicon-ready square mark with subtle background. */
export function LogoTile({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <rect width="48" height="48" rx="12" fill="var(--color-navy-900)" />
      <LogoMark x="0" y="0" className="h-full w-full" />
    </svg>
  );
}
