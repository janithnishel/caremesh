import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge — pill, tinted background with darkest-tone text.
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
  {
    variants: {
      tone: {
        teal: "bg-teal-50 text-teal-800",
        cyan: "bg-cyan-50 text-cyan-800",
        navy: "bg-navy-50 text-navy-800",
        amber: "bg-amber-50 text-amber-700",
        mint: "bg-mint text-teal-800",
        ice: "bg-ice text-navy-700",
        neutral: "bg-muted text-muted-foreground",
        success: "bg-success/15 text-success",
        warning: "bg-warning/15 text-warning",
        danger: "bg-destructive/12 text-destructive",
        outline: "border border-border text-muted-foreground",
      },
    },
    defaultVariants: { tone: "teal" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  tone?: VariantProps<typeof badgeVariants>["tone"];
}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

/**
 * SampleBadge — visible "Sample" marker for demo/illustrative content.
 * Required by content integrity rules: anything illustrative must be marked.
 */
export function SampleBadge({
  className,
  label = "Sample",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-50 px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-amber-700",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-amber-400" aria-hidden="true" />
      {label}
    </span>
  );
}
