import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { CTAButton } from "@/components/shared/CTAButton";
import { recruitmentServices, recruitmentCrmFeatures } from "@/data/employers";
import { RecruitmentFeatureCard } from "@/components/employers/EmployerComponents";

export const Route = createFileRoute("/employers/recruitment-services")({
  head: () => ({
    meta: [
      { title: "Recruitment Services — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Full recruitment support from CareerMesh: intern recruitment, candidate shortlisting, interview coordination, placement coordination and graduate recruitment.",
      },
      { property: "og:title", content: "Recruitment Services — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Full recruitment support from CareerMesh: intern recruitment, candidate shortlisting, interview coordination, placement coordination and graduate recruitment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecruitmentServicesPage,
});

function RecruitmentServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Recruitment Services" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Recruitment Services."
        description="From intern recruitment to graduate hiring, we coordinate the full process so you can focus on selecting the right candidates."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Full Recruitment Support."
            description="Six services that cover every stage of hiring — from sourcing through to placement and beyond."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recruitmentServices.map((s) => (
              <Card key={s.title} tone="cloud" hover className="flex h-full flex-col gap-2">
                <h3 className="text-base font-bold text-navy-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Powered by ClientFlow CRM"
            title="Recruitment, Tracked End-to-End."
            description="Participating employers receive a dedicated ClientFlow workspace for candidate databases, hiring pipelines, interview scheduling and communication — so nothing falls through the cracks."
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
        title="Hire Through CareerMesh."
        description="Submit a hiring requirement and let us handle the sourcing, screening and coordination."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "View Pricing", to: "/employers/pricing" },
        ]}
      />
    </>
  );
}
