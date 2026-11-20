import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTAButton } from "@/components/shared/CTAButton";
import { HiringProcess } from "@/components/employers/EmployerComponents";
import { recruitmentCrmFeatures } from "@/data/employers";
import { RecruitmentFeatureCard } from "@/components/employers/EmployerComponents";

export const Route = createFileRoute("/employers/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "The six-step CareerMesh hiring process — from submitting a requirement through to placement and ongoing coordination.",
      },
      { property: "og:title", content: "How It Works — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "The six-step CareerMesh hiring process — from submitting a requirement through to placement and ongoing coordination.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "How It Works" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="How It Works."
        description="A clear, six-step process that takes you from submitting a hiring requirement through to placement and ongoing coordination — managed through ClientFlow so every step stays organised."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="The Process"
            title="From Requirement to Placement."
            description="Six coordinated stages that take you from a hiring need to a confirmed, supported placement."
          />
          <HiringProcess />
        </Container>
      </Section>
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Powered by ClientFlow CRM"
            title="Every Step, Tracked in One Place."
            description="Participating employers receive a dedicated ClientFlow workspace so your hiring pipeline, candidates and communication stay organised from start to finish."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recruitmentCrmFeatures.map((f) => (
              <RecruitmentFeatureCard key={f.title} feature={f} />
            ))}
          </div>
          <div className="mt-8">
            <CTAButton to="/platform/employer-crm" variant="cyan" size="md">
              Discover Employer CRM <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Get Started"
        title="Start Hiring with CareerMesh."
        description="Submit a hiring requirement and let us source, screen and coordinate prepared candidates for you."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "View Pricing", to: "/employers/pricing" },
        ]}
      />
    </>
  );
}
