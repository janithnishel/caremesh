import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TalentSolutionCard } from "@/components/recruiters/RecruiterComponents";
import { whyRecruiterBenefits } from "@/data/recruiters";

export const Route = createFileRoute("/graduate-recruiters/why-careermesh")({
  head: () => ({
    meta: [
      { title: "Why CareerMesh? — Graduate Recruiters — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Graduate talent expertise, university relationships, strategic recruitment support and ClientFlow-powered recruitment operations.",
      },
      { property: "og:title", content: "Why CareerMesh? — Graduate Recruiters — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Graduate talent expertise, university relationships, strategic recruitment support and ClientFlow-powered recruitment operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyCareerMeshPage,
});

function WhyCareerMeshPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Why CareerMesh?" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Why CareerMesh"
        title="Specialist Graduate Talent Expertise."
        description="CareerMesh brings focused expertise in early-career talent, established university relationships and structured development programs — coordinated through ClientFlow CRM."
      />

      <Section bg="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Our Strengths"
            title="What Sets CareerMesh Apart."
            description="Five strengths that make us a credible partner for graduate recruitment and corporate HR teams."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyRecruiterBenefits.map((b) => (
              <TalentSolutionCard key={b.title} benefit={b} />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The Full Picture"
                title="Services + Technology, Together."
                description="CareerMesh combines managed graduate talent services with ClientFlow CRM technology — so your recruitment operations are coordinated, not scattered."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]">
                  <h3 className="text-base font-bold text-navy-900">
                    Managed Graduate Talent Services
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Promotion and attraction, pre-graduate programs, recruitment and selection
                    outsourcing, and development and retention support — delivered by our team.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-cyan-50 p-6 shadow-[var(--shadow-e1)]">
                  <h3 className="text-base font-bold text-navy-900">ClientFlow CRM Technology</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A dedicated workspace for your graduate talent database, recruitment pipelines,
                    campaigns and automated communication.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <CTAButton to="/graduate-recruiters/our-approach" variant="secondary" size="md">
                  See our approach <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Next Step"
        title="Ready to Explore Graduate Talent Solutions?"
        description="Talk to us about your intake needs and how we can support your recruitment goals."
        ctas={[{ label: "Request a Consultation", to: "/graduate-recruiters/contact" }]}
      />
    </>
  );
}
