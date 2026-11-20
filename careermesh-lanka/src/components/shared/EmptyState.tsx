import { cn } from "@/lib/utils";
import { CTAButton } from "./CTAButton";

/**
 * EmptyState — tasteful empty state inviting action.
 * Used for opportunities, testimonials, partners, stories when none exist.
 */
export function EmptyState({
  title,
  description,
  ctaLabel,
  ctaTo,
  icon,
  className,
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaTo?: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border-strong bg-card px-6 py-16 text-center",
        className,
      )}
    >
      {icon && (
        <div className="flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
          {icon}
        </div>
      )}
      <div className="max-w-md space-y-2">
        <h3 className="text-h3 text-navy-900">{title}</h3>
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      </div>
      {ctaLabel && ctaTo && (
        <CTAButton to={ctaTo} variant="primary" size="md">
          {ctaLabel}
        </CTAButton>
      )}
    </div>
  );
}

/** The required empty state for opportunities. */
export function OpportunitiesEmptyState({ ctaTo = "/students/register" }: { ctaTo?: string }) {
  return (
    <EmptyState
      title="No active opportunities are currently listed"
      description="Register your interest to receive updates when new opportunities become available."
      ctaLabel="Register your interest"
      ctaTo={ctaTo}
    />
  );
}
