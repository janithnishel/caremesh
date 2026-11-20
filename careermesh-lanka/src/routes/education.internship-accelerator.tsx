import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card, IconTile } from "@/components/shared/Card";
import { getIcon } from "@/lib/icons";
import { acceleratorFocus } from "@/data/education";

export const Route = createFileRoute("/education/internship-accelerator")({
  head: () => ({
    meta: [
      { title: "Internship Accelerator — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Pre-internship preparation through focused workshops and coaching that gets students workplace-ready.",
      },
      { property: "og:title", content: "Internship Accelerator — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Pre-internship preparation through focused workshops and coaching that gets students workplace-ready.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InternshipAcceleratorPage,
});

function InternshipAcceleratorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Internship Accelerator" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Internship Accelerator Program."
        description="How students are prepared for professional internships through focused workshops and preparation before placement."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Preparation Focus"
            title="Workplace-Ready Before They Start."
            description="Focused preparation across six areas that build confidence and readiness."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {acceleratorFocus.map((f) => {
              const Icon = getIcon(f.icon);
              return (
                <Card key={f.title} tone="ice" hover className="flex h-full flex-col gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="navy" />
                  <h3 className="text-base font-bold text-navy-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Partner With Us"
        title="Prepare Your Students for Internships."
        description="Give your students a head start with structured pre-internship preparation."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "View Programs", to: "/education/programs" },
        ]}
      />
    </>
  );
}
