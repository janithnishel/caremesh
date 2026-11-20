import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { trainingModules } from "@/data/education";

export const Route = createFileRoute("/education/employability-training")({
  head: () => ({
    meta: [
      { title: "Employability Training — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Work-readiness modules: communication, etiquette, teamwork, leadership, critical thinking, problem solving and interview preparation.",
      },
      { property: "og:title", content: "Employability Training — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Work-readiness modules: communication, etiquette, teamwork, leadership, critical thinking, problem solving and interview preparation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmployabilityTrainingPage,
});

function EmployabilityTrainingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Employability Training" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Employability Training."
        description="Modular work-readiness training covering the soft skills employers consistently value."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Training Modules"
            title="Eight Modules for Work Readiness."
            description="Each module can be delivered standalone or as part of a broader program."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainingModules.map((m) => (
              <Card key={m.title} tone="ice" hover className="flex h-full flex-col gap-2">
                <CheckCircle2 className="size-6 text-navy-700" />
                <h3 className="text-base font-bold text-navy-900">{m.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Partner With Us"
        title="Build Work-Ready Graduates."
        description="Bring employability training to your students through a tailored program."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "View Programs", to: "/education/programs" },
        ]}
      />
    </>
  );
}
