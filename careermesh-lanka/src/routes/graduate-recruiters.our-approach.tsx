import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GraduateJourney } from "@/components/recruiters/RecruiterComponents";
import { approachStages } from "@/data/recruiters";
import { CorporateProgramCard } from "@/components/recruiters/RecruiterComponents";

export const Route = createFileRoute("/graduate-recruiters/our-approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Graduate Recruiters — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "A four-stage strategic framework: promotion and attraction, pre-graduate programs, recruitment and selection outsourcing, and development and retention.",
      },
      { property: "og:title", content: "Our Approach — Graduate Recruiters — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "A four-stage strategic framework: promotion and attraction, pre-graduate programs, recruitment and selection outsourcing, and development and retention.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurApproachPage,
});

function OurApproachPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Our Approach" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Our Approach"
        title="A Four-Stage Strategic Framework."
        description="CareerMesh supports the full graduate talent lifecycle — from building awareness and identifying talent early, through recruitment and selection, to development and retention."
      />

      <Section bg="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="The Framework"
            title="Four Connected Stages."
            description="Each stage builds on the last. Explore each one in detail below."
          />
          <GraduateJourney />
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Stage Detail"
            title="What Each Stage Covers."
            description="A closer look at the services within each stage of the framework."
          />
          <div className="mt-12 space-y-6">
            {approachStages.map((stage) => (
              <CorporateProgramCard key={stage.number} stage={stage} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Talk to Us"
        title="Let's Map Your Graduate Talent Strategy."
        description="Tell us your intake needs and current process — we'll tailor a solution across all four stages."
        ctas={[{ label: "Request a Consultation", to: "/graduate-recruiters/contact" }]}
      />
    </>
  );
}
