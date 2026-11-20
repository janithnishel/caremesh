import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { approachStages } from "@/data/recruiters";
import { CorporateProgramCard } from "@/components/recruiters/RecruiterComponents";

export const Route = createFileRoute("/graduate-recruiters/development-retention")({
  head: () => ({
    meta: [
      { title: "Development & Retention — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Graduate onboarding, structured learning journeys, leadership development, mentoring and retention support.",
      },
      { property: "og:title", content: "Development & Retention — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Graduate onboarding, structured learning journeys, leadership development, mentoring and retention support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevelopmentRetentionPage,
});

function DevelopmentRetentionPage() {
  const stage = approachStages.find((s) => s.slug === "development-retention");
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Our Approach", to: "/graduate-recruiters/our-approach" },
          { label: "Development & Retention" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Stage 04"
        title="Development & Retention."
        description="Structured onboarding, learning journeys and mentoring that help graduates settle, grow and stay — supported by automated check-ins through ClientFlow."
      />

      <Section bg="dark">
        <Container>
          <CorporateProgramCard stage={stage} />
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="What's Included"
            title="Growing Graduates Into Long-Term Contributors."
            description="Development support that turns new graduates into confident, capable team members."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Graduate Onboarding",
                description: "Structured onboarding that helps graduates settle quickly.",
              },
              {
                title: "Structured Learning Journeys",
                description: "Clear development paths from day one.",
              },
              {
                title: "Leadership Development",
                description: "Build leadership capability early.",
              },
              { title: "Mentoring", description: "Pair graduates with experienced mentors." },
              {
                title: "Communication Training",
                description: "Professional communication skills development.",
              },
              {
                title: "Progress Monitoring",
                description: "Track development with regular check-ins.",
              },
              {
                title: "Retention Support",
                description: "Automated follow-ups that support engagement and retention.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]"
              >
                <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton to="/graduate-recruiters/contact" variant="secondary" size="md">
              Discuss development & retention <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Talk to Us"
        title="Let's Build Your Graduate Talent Program."
        description="From attraction through retention, CareerMesh supports the full lifecycle."
        ctas={[{ label: "Request a Consultation", to: "/graduate-recruiters/contact" }]}
      />
    </>
  );
}
