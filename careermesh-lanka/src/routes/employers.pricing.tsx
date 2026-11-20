import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { CTAButton } from "@/components/shared/CTAButton";
import { employerPricing } from "@/data/pricing";

export const Route = createFileRoute("/employers/pricing")({
  head: () => ({
    meta: [
      { title: "Recruitment Pricing — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Recruitment service pricing and engagement models — placement fee, project fee, monthly support and custom agreements. Request a quote for your requirements.",
      },
      { property: "og:title", content: "Recruitment Pricing — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Recruitment service pricing and engagement models — placement fee, project fee, monthly support and custom agreements. Request a quote for your requirements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Pricing" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Recruitment Pricing."
        description="Pricing depends on your engagement model and requirements. We don't publish invented final prices — request a quote for a tailored proposal. No placement guarantees."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Engagement Models"
            title="Four Ways to Engage."
            description="Choose the model that fits your hiring needs. All fees come from a single data source and are tailored to your requirements."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {employerPricing.map((fee) => (
              <Card
                key={fee.label}
                tone={fee.highlight ? "cloud" : "white"}
                hover={false}
                className={fee.highlight ? "border-teal-600/40 ring-1 ring-teal-600/20" : ""}
              >
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">{fee.label}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {fee.description}
                      </p>
                    </div>
                    {fee.highlight && (
                      <span className="rounded-full bg-teal-700 px-3 py-1 text-xs font-bold text-white">
                        Most Common
                      </span>
                    )}
                  </div>
                  <p className="text-2xl font-extrabold text-teal-700">{fee.priceNote}</p>
                  <ul className="mt-2 space-y-2">
                    {fee.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-teal-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-2">
                    <CTAButton
                      to={fee.ctaTo}
                      variant={fee.highlight ? "primary" : "secondary"}
                      size="md"
                    >
                      {fee.ctaLabel} <ArrowRight className="size-4" />
                    </CTAButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section bg="cloud">
        <Container>
          <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
            <SectionHeading
              eyebrow="Important"
              title="No Placement Guarantees."
              description="CareerMesh does not guarantee placements. We provide sourcing, screening and coordination. Outcomes depend on many factors including candidate readiness and your selection decisions."
            />
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Request a Quote"
        title="Tailored to Your Needs."
        description="Tell us your hiring requirements and we'll provide a tailored quote."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "Talk to Us", to: "/contact" },
        ]}
      />
    </>
  );
}
