import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EligibilityCard } from "@/components/students/EligibilityCard";
import { entryRequirements } from "@/data/students";

export const Route = createFileRoute("/students/entry-requirements")({
  head: () => ({
    meta: [
      { title: "Entry Requirements — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Internship program entry requirements: academic background, study status, preferred industry, communication skills, availability and required documents.",
      },
      { property: "og:title", content: "Entry Requirements — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Internship program entry requirements: academic background, study status, preferred industry, communication skills, availability and required documents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EntryRequirementsPage,
});

function EntryRequirementsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Entry Requirements" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Entry Requirements."
        description="What we assess to help place you in the right opportunity. Requirements are editable and subject to management approval — they may vary by field and opportunity."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="What We Assess"
            title="Six Areas for Program Eligibility."
            description="These guide our matching process and help us place you in opportunities that fit your background and goals."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entryRequirements.map((req) => (
              <EligibilityCard key={req.label} requirement={req} />
            ))}
          </div>
        </Container>
      </Section>
      <Section bg="mint">
        <Container>
          <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
            <SectionHeading
              eyebrow="Good to Know"
              title="Requirements May Vary."
              description="Specific requirements depend on your preferred field, the host company and the role. We confirm details during your consultation and never list an opportunity as available unless verified."
            />
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Get Started"
        title="Meet the Requirements?"
        description="Register your interest and our team will review your eligibility."
        ctas={[{ label: "Register Now", to: "/students/register" }]}
      />
    </>
  );
}
