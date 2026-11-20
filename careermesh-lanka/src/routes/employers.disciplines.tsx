import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TalentDisciplineCard } from "@/components/employers/EmployerComponents";
import { disciplineGroups } from "@/data/industries";

export const Route = createFileRoute("/employers/disciplines")({
  head: () => ({
    meta: [
      { title: "Available Disciplines — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Talent disciplines available through CareerMesh: IT and software, engineering, finance and accounting, business and marketing, and other professional areas.",
      },
      { property: "og:title", content: "Available Disciplines — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Talent disciplines available through CareerMesh: IT and software, engineering, finance and accounting, business and marketing, and other professional areas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DisciplinesPage,
});

function DisciplinesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Available Disciplines" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Available Disciplines."
        description="We source candidates across a wide range of professional fields and specializations. Tell us your requirements and we'll match candidates based on skills and discipline."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Talent Fields"
            title="Disciplines We Source Across."
            description="Each category covers a range of specializations. If your required discipline isn't listed, tell us — we work across additional professional areas by arrangement."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {disciplineGroups.map((g) => (
              <TalentDisciplineCard key={g.category} group={g} />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Need a Specific Discipline?"
        title="Tell Us Your Requirements."
        description="Submit a hiring requirement with the skills and discipline you need — we'll source and screen candidates for you."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "View How It Works", to: "/employers/how-it-works" },
        ]}
      />
    </>
  );
}
