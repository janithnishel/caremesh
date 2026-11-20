import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { projectLifecycle } from "@/data/education";

export const Route = createFileRoute("/education/industry-projects")({
  head: () => ({
    meta: [
      { title: "Industry Group Projects — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Structured real-world project experiences connecting student teams with industry mentors and deliverables.",
      },
      { property: "og:title", content: "Industry Group Projects — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Structured real-world project experiences connecting student teams with industry mentors and deliverables.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustryProjectsPage,
});

function IndustryProjectsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Industry Group Projects" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Industry Group Projects."
        description="Structured real-world project experiences that connect student teams with industry mentors and deliverables."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="The Lifecycle"
            title="From Discovery to Evaluation."
            description="A six-phase lifecycle that gives students genuine industry project experience."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectLifecycle.map((p, i) => (
              <Card key={p.phase} tone="ice" hover className="flex h-full flex-col gap-2">
                <span className="flex size-9 items-center justify-center rounded-full bg-navy-700 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-navy-900">{p.phase}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Partner With Us"
        title="Bring Industry Projects to Your Students."
        description="Let's design group projects that give your students real industry experience."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "View Programs", to: "/education/programs" },
        ]}
      />
    </>
  );
}
