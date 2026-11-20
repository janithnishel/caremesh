import { Container } from "./Container";
import { CTAButton, CTAGroup } from "./CTAButton";
import { cn } from "@/lib/utils";

/**
 * CTASection — closing call-to-action band. Navy dark by default.
 */
export function CTASection({
  eyebrow,
  title,
  description,
  ctas,
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  ctas: {
    label: string;
    to: string;
    variant?: "primary" | "secondary" | "ghost" | "onDark" | "onDarkOutline" | "cyan";
  }[];
  tone?: "dark" | "teal" | "cyan";
  className?: string;
}) {
  const toneMap = {
    dark: "bg-navy-950 text-white",
    teal: "bg-teal-700 text-white",
    cyan: "bg-cyan-800 text-white",
  };
  return (
    <section className={cn(toneMap[tone], className)}>
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          {eyebrow && <p className="text-eyebrow text-teal-400">{eyebrow}</p>}
          <h2 className="text-h2 text-white">{title}</h2>
          {description && (
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
          )}
          <CTAGroup align="center" className="mt-2">
            {ctas.map((cta, i) => (
              <CTAButton
                key={cta.label}
                to={cta.to}
                variant={cta.variant ?? (i === 0 ? "onDark" : "onDarkOutline")}
                size="lg"
              >
                {cta.label}
              </CTAButton>
            ))}
          </CTAGroup>
        </div>
      </Container>
    </section>
  );
}
