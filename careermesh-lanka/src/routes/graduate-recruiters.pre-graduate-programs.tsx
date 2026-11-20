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

export const Route = createFileRoute("/graduate-recruiters/pre-graduate-programs")({
  head: () => ({
    meta: [
      { title: "Pre-Graduate Programs — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Internship, summer and vacation programs that let you engage with promising students early and build a talent pipeline.",
      },
      { property: "og:title", content: "Pre-Graduate Programs — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Internship, summer and vacation programs that let you engage with promising students early and build a talent pipeline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PreGraduateProgramsPage,
});

function PreGraduateProgramsPage() {
  const stage = approachStages.find((s) => s.slug === "pre-graduate-programs");
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Our Approach", to: "/graduate-recruiters/our-approach" },
          { label: "Pre-Graduate Programs" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Stage 02"
        title="Pre-Graduate Programs."
        description="Internship, summer and vacation programs that let you engage with promising students early and build a talent pipeline before graduation."
      />

      <Section bg="dark">
        <Container>
          <CorporateProgramCard stage={stage} />
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Program Types"
            title="Engage Talent Before They Graduate."
            description="Structured programs that create early, meaningful connections with promising students."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Internship Programs",
                description: "Structured internships that give students real workplace exposure.",
              },
              {
                title: "Summer Programs",
                description: "Focused summer engagements aligned to your hiring calendar.",
              },
              {
                title: "Vacation Programs",
                description: "Short, intensive programs during academic breaks.",
              },
              {
                title: "Graduate Readiness",
                description: "Prepare students for the transition into graduate roles.",
              },
              {
                title: "Industry Engagement",
                description: "Connect students with your teams and real work.",
              },
              {
                title: "Talent Identification",
                description: "Identify promising candidates early in their studies.",
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
              Discuss pre-graduate programs <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Next Stage"
        title="Ready to Recruit and Select?"
        description="Recruitment and selection outsourcing manages your campaign end to end."
        ctas={[
          { label: "Recruitment Outsourcing", to: "/graduate-recruiters/recruitment-outsourcing" },
          { label: "Talk to Us", to: "/graduate-recruiters/contact" },
        ]}
      />
    </>
  );
}
