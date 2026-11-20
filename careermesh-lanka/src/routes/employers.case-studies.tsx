import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { EmptyState } from "@/components/shared/EmptyState";
import { caseStudies } from "@/data/content";

export const Route = createFileRoute("/employers/case-studies")({
  head: () => ({
    meta: [
      { title: "Employer Case Studies — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Case studies from CareerMesh employer hiring programs — verified outcomes only. We do not invent outcomes or organizations.",
      },
      { property: "og:title", content: "Employer Case Studies — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Case studies from CareerMesh employer hiring programs — verified outcomes only. We do not invent outcomes or organizations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmployerCaseStudiesPage,
});

function EmployerCaseStudiesPage() {
  const empCases = caseStudies.filter((c) => c.audience === "employers");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Case Studies" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Employer Case Studies."
        description="Verified case studies from our employer hiring programs. We do not invent outcomes or organizations. Each case study follows a template: company background, challenge, strategy, implementation, participation, outcomes and feedback."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Hiring Program Outcomes."
            description="Real, verified case studies from organizations that have hired through CareerMesh."
          />
          <div className="mt-12">
            {empCases.length === 0 ? (
              <EmptyState
                title="No case studies published yet"
                description="We share verified case studies from our employer hiring programs. Hire through CareerMesh to build outcomes worth sharing."
                ctaLabel="Hire an intern"
                ctaTo="/employers/hire-an-intern"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {empCases.map((c) => (
                  <Card key={c.slug} tone="white" hover>
                    <p className="text-base font-bold text-navy-900">{c.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.summary}
                    </p>
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: c.slug }}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
                    >
                      Read case study <ArrowRight className="size-4" />
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Build Outcomes"
        title="Create a Case Study Worth Sharing."
        description="Hire through CareerMesh and build measurable hiring outcomes for your organization."
        ctas={[{ label: "Hire an Intern", to: "/employers/hire-an-intern" }]}
      />
    </>
  );
}
