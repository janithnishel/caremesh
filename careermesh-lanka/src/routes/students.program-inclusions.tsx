import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { programInclusions } from "@/data/programs";

export const Route = createFileRoute("/students/program-inclusions")({
  head: () => ({
    meta: [
      { title: "Program Inclusions — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "What's included in your internship program: consultation, CV preparation, interview preparation, placement coordination and more. Included vs optional services.",
      },
      { property: "og:title", content: "Program Inclusions — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "What's included in your internship program: consultation, CV preparation, interview preparation, placement coordination and more. Included vs optional services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramInclusionsPage,
});

function ProgramInclusionsPage() {
  const included = programInclusions.filter((p) => p.included);
  const optional = programInclusions.filter((p) => !p.included);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Program Inclusions" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="What's Included in Your Program."
        description="A clear breakdown of included services and optional add-ons — so you know exactly what your program covers."
      />

      <Section bg="white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card tone="mint" hover={false} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-teal-700 text-white">
                  <CheckCircle2 className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">Included Services</h3>
              </div>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li
                    key={item.item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-navy-900"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-700" />
                    {item.item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card tone="white" hover={false} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">Optional Add-ons</h3>
              </div>
              <ul className="space-y-3">
                {optional.map((item) => (
                  <li
                    key={item.item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <XCircle className="mt-0.5 size-4 shrink-0 text-amber-400" />
                    {item.item}
                  </li>
                ))}
              </ul>
              <p className="rounded-md bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-700">
                Optional add-ons are available where applicable. Ask about these during your
                consultation.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Why It Matters"
            title="Clear Scope, No Surprises."
            description="We separate included services from optional add-ons so you can make informed decisions about your program."
          />
        </Container>
      </Section>

      <CTASection
        eyebrow="Get Started"
        title="Have Questions About Inclusions?"
        description="Register your interest and we'll walk you through exactly what's included."
        ctas={[
          { label: "Register Now", to: "/students/register" },
          { label: "View Fees", to: "/students/program-fees" },
        ]}
      />
    </>
  );
}
