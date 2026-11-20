import { cn } from "@/lib/utils";

/**
 * Card — white, 1px border, radius lg, padding 24, e1; hover e2 + lift.
 * Tinted audience cards use their tone background via the `tone` prop.
 */
export function Card({
  className,
  children,
  tone = "white",
  hover = true,
  as: Comp = "div",
  ...rest
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "white" | "mint" | "ice" | "cloud" | "cyan" | "dark";
  hover?: boolean;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLDivElement>) {
  const toneMap: Record<string, string> = {
    white: "bg-card text-card-foreground",
    mint: "bg-mint text-navy-900",
    ice: "bg-ice text-navy-900",
    cloud: "bg-background text-foreground",
    cyan: "bg-cyan-50 text-navy-900",
    dark: "bg-navy-900 text-white",
  };
  return (
    <Comp
      className={cn(
        "rounded-lg border border-border p-6 shadow-[var(--shadow-e1)] transition-all duration-200 ease-out",
        toneMap[tone],
        hover && "hover:-translate-y-0.5 hover:shadow-[var(--shadow-e2)]",
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Icon tile — Lucide icon in a tinted rounded square. */
export function IconTile({
  icon,
  tone = "teal",
  className,
}: {
  icon: React.ReactNode;
  tone?: "teal" | "cyan" | "navy" | "amber";
  className?: string;
}) {
  const toneMap: Record<string, string> = {
    teal: "bg-teal-50 text-teal-700",
    cyan: "bg-cyan-50 text-cyan-800",
    navy: "bg-navy-50 text-navy-700",
    amber: "bg-amber-50 text-amber-700",
  };
  return (
    <div
      className={cn(
        "flex size-12 items-center justify-center rounded-lg",
        toneMap[tone],
        className,
      )}
    >
      {icon}
    </div>
  );
}
