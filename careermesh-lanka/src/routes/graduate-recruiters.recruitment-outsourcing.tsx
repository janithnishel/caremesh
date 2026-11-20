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

export const Route = createFileRoute("/graduate-recruiters/recruitment-outsourcing")({
  head: () => ({
    meta: [
      { title: "Recruitment & Selection Outsourcing — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "End-to-end management of graduate recruitment campaigns — application management, screening, assessment, interviews and hiring coordination.",
      },
      { property: "og:title", content: "Recruitment & Selection Outsourcing — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "End-to-end management of graduate recruitment campaigns — application management, screening, assessment, interviews and hiring coordination.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecruitmentOutsourcingPage,
});

function RecruitmentOutsourcingPage() {
  const stage = approachStages.find((s) => s.slug === "recruitment-outsourcing");
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Our Approach", to: "/graduate-recruiters/our-approach" },
          { label: "Recruitment & Selection Outsourcing" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Stage 03"
        title="Recruitment & Selection Outsourcing."
        description="We manage your graduate recruitment campaign end to end — from application management through screening, assessment and hiring coordination — so you can focus on selecting."
      />

      <Section bg="dark">
        <Container>
          <CorporateProgramCard stage={stage} />
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="The Process"
            title="A Managed Campaign, End to End."
            description="Every step of the recruitment campaign, coordinated through ClientFlow CRM."
          />
          <div className="mt-12">
            <ol className="space-y-0">
              {[
                {
                  step: 1,
                  title: "Graduate Recruitment Campaigns",
                  description: "We design and run campaigns aligned to your hiring goals.",
                },
                {
                  step: 2,
                  title: "Application Management",
                  description: "Applications collected and organised in your ClientFlow workspace.",
                },
                {
                  step: 3,
                  title: "Candidate Screening",
                  description: "We screen candidates against your requirements.",
                },
                {
                  step: 4,
                  title: "Assessment Coordination",
                  description: "We coordinate assessments and exercises.",
                },
                {
                  step: 5,
                  title: "Interview Scheduling",
                  description: "Interviews scheduled without the back-and-forth.",
                },
                {
                  step: 6,
                  title: "Candidate Communication",
                  description: "Automated updates keep candidates informed.",
                },
                {
                  step: 7,
                  title: "Hiring Coordination",
                  description: "Offers and onboarding handovers coordinated.",
                },
              ].map((s, i) => (
                <li key={s.step} className="relative flex gap-4 pb-8 last:pb-0">
                  {i < 6 && (
                    <div
                      className="absolute left-[22px] top-11 h-[calc(100%-2.75rem)] w-px bg-border-strong"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-navy-900 shadow-[var(--shadow-e1)]">
                    {String(s.step).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-base font-bold text-navy-900">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8">
            <CTAButton to="/graduate-recruiters/contact" variant="secondary" size="md">
              Discuss your recruitment campaign <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Next Stage"
        title="Ready to Develop and Retain?"
        description="Development and retention support helps graduates settle, grow and stay."
        ctas={[
          { label: "Development & Retention", to: "/graduate-recruiters/development-retention" },
          { label: "Talk to Us", to: "/graduate-recruiters/contact" },
        ]}
      />
    </>
  );
}
