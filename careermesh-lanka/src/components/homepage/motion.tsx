/**
 * Lightweight motion shim — CSS-driven entrance helpers.
 * Avoids a framer-motion dependency while respecting prefers-reduced-motion
 * (disabled globally in styles.css).
 */
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ animation: `cm-rise 0.5s ease-out ${delay}s both` }}>
      {children}
    </div>
  );
}

// Re-exported as `motion` for ergonomic import sites.
export const motion = { Reveal };
