import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { CTAButton } from "@/components/shared/CTAButton";
import { studentProgramFees, studentPaymentOptions } from "@/data/pricing";

export const Route = createFileRoute("/students/program-fees")({
  head: () => ({
    meta: [
      { title: "Program Fees — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Internship program pricing, inclusions and payment options. Fees are configurable — request a quote for a tailored proposal. No placement guarantees.",
      },
      { property: "og:title", content: "Program Fees — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Internship program pricing, inclusions and payment options. Fees are configurable — request a quote for a tailored proposal. No placement guarantees.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramFeesPage,
});

function ProgramFeesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Program Fees" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Program Fees & Payment."
        description="Registration of interest is free. Program fees depend on the services included — request a quote for a tailored proposal. We do not guarantee placements."
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent, Configurable Fees."
            description="All fees come from a single data source and are tailored to your needs. We never publish invented final prices."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {studentProgramFees.map((fee) => (
              <Card
                key={fee.label}
                tone={fee.highlight ? "mint" : "white"}
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
                        Core Program
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
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
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
          <SectionHeading eyebrow="Payment Options" title="Ways to Pay." />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {studentPaymentOptions.map((opt) => (
              <Card key={opt} tone="white" hover={false} className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <ShieldCheck className="size-5" />
                </div>
                <p className="text-sm font-semibold text-navy-900">{opt}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="mint">
        <Container>
          <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
            <SectionHeading
              eyebrow="Important"
              title="No Placement Guarantees."
              description="CareerMesh does not guarantee placements. We provide preparation, coordination and opportunity matching where available. Outcomes depend on many factors including candidate readiness and host organization requirements."
            />
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Get Started"
        title="Request a Quote."
        description="Register your interest and we'll discuss the right program and pricing for you."
        ctas={[
          { label: "Register Now", to: "/students/register" },
          { label: "View Inclusions", to: "/students/program-inclusions" },
        ]}
      />
    </>
  );
}
