import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { CTAGroup, CTAButton } from "./CTAButton";
import { SampleBadge } from "./Badge";

type HeroTone = "students" | "education" | "employers" | "recruiters" | "platform" | "default";

const toneBg: Record<HeroTone, string> = {
  students: "bg-mint",
  education: "bg-ice",
  employers: "bg-cloud",
  recruiters: "bg-navy-950 text-white",
  platform: "bg-cyan-50",
  default: "bg-cloud",
};

/**
 * PageHero — tone-colored hero with page-specific headline and imagery slot.
 * Split layout: left text, right visual (collapses on mobile).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  tone = "default",
  ctas,
  visual,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: HeroTone;
  ctas?: {
    label: string;
    to: string;
    variant?: "primary" | "secondary" | "ghost" | "onDark" | "onDarkOutline" | "cyan";
  }[];
  visual?: React.ReactNode;
  className?: string;
}) {
  const dark = tone === "recruiters";
  const eyebrowColor = dark ? "text-teal-500" : "text-teal-700";
  const descColor = dark ? "text-white/70" : "text-muted-foreground";

  return (
    <section
      className={cn("relative overflow-hidden border-b border-border", toneBg[tone], className)}
    >
      <Container className="py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className={cn("flex flex-col gap-5", visual ? "lg:col-span-6" : "lg:col-span-8")}>
            {eyebrow && <p className={cn("text-eyebrow", eyebrowColor)}>{eyebrow}</p>}
            <h1 className={cn("text-display max-w-4xl", dark ? "text-white" : "text-navy-900")}>
              {title}
            </h1>
            {description && (
              <p className={cn("max-w-2xl text-lg leading-relaxed", descColor)}>{description}</p>
            )}
            {ctas && ctas.length > 0 && (
              <CTAGroup className="mt-2">
                {ctas.map((cta) => (
                  <CTAButton
                    key={cta.label}
                    to={cta.to}
                    variant={cta.variant ?? (dark ? "onDark" : "primary")}
                  >
                    {cta.label}
                  </CTAButton>
                ))}
              </CTAGroup>
            )}
          </div>
          {visual && (
            <div className="lg:col-span-6">
              <div className="relative">
                {visual}
                <SampleBadge className="absolute right-3 top-3 z-10" label="Sample visual" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
