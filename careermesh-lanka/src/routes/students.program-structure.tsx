import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { InternshipTimeline } from "@/components/students/InternshipTimeline";

export const Route = createFileRoute("/students/program-structure")({
  head: () => ({
    meta: [
      { title: "Program Structure — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Your step-by-step internship program journey: from registration and consultation through preparation, matching, placement and completion.",
      },
      { property: "og:title", content: "Program Structure — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Your step-by-step internship program journey: from registration and consultation through preparation, matching, placement and completion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramStructurePage,
});

function ProgramStructurePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Program Structure" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Your Program, Step by Step."
        description="A clear, supported journey from registration to completion. Durations are indicative and confirmed during your consultation."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="The Journey"
            title="From Registration to Completion."
            description="Ten structured stages with ongoing support throughout your program."
          />
          <InternshipTimeline />
        </Container>
      </Section>
      <Section bg="mint">
        <Container>
          <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
            <SectionHeading
              eyebrow="Good to Know"
              title="Durations Are Indicative."
              description="Timelines depend on your readiness, host company availability and the specific opportunity. We confirm the schedule during your consultation."
            />
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Get Started"
        title="Ready to Begin?"
        description="Register your interest and we'll guide you through every step."
        ctas={[
          { label: "Register Now", to: "/students/register" },
          { label: "View Program Fees", to: "/students/program-fees" },
        ]}
      />
    </>
  );
}
