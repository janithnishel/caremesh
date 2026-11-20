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

export const Route = createFileRoute("/graduate-recruiters/promotion-attraction")({
  head: () => ({
    meta: [
      { title: "Promotion & Attraction — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Employer branding, university engagement, campus campaigns and student outreach to attract the right graduate talent.",
      },
      { property: "og:title", content: "Promotion & Attraction — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Employer branding, university engagement, campus campaigns and student outreach to attract the right graduate talent.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PromotionAttractionPage,
});

function PromotionAttractionPage() {
  const stage = approachStages.find((s) => s.slug === "promotion-attraction");
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Our Approach", to: "/graduate-recruiters/our-approach" },
          { label: "Promotion & Attraction" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Stage 01"
        title="Promotion & Attraction."
        description="We help organizations position themselves as employers of choice and reach students through targeted campaigns and university engagement."
      />

      <Section bg="dark">
        <Container>
          <CorporateProgramCard stage={stage} />
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Building Awareness With the Right Audience."
            description="We combine employer branding with direct university engagement to reach promising students early."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Employer Branding",
                description: "Position your organization as a destination of choice for graduates.",
              },
              {
                title: "University Engagement",
                description: "Connect with institutions and student networks across disciplines.",
              },
              {
                title: "Campus Campaigns",
                description: "Targeted campaigns that reach students at the right moment.",
              },
              {
                title: "Student Outreach",
                description: "Direct outreach to promising candidates and cohorts.",
              },
              {
                title: "Talent Awareness",
                description: "Build awareness of your graduate opportunities and culture.",
              },
              {
                title: "Value Proposition",
                description:
                  "Communicate your employer value proposition clearly and consistently.",
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
              Discuss your attraction goals <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Next Stage"
        title="Ready to Identify Talent Early?"
        description="Pre-graduate programs let you engage with promising students before they graduate."
        ctas={[
          { label: "Pre-Graduate Programs", to: "/graduate-recruiters/pre-graduate-programs" },
          { label: "Talk to Us", to: "/graduate-recruiters/contact" },
        ]}
      />
    </>
  );
}
