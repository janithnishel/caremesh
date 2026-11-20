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

export const Route = createFileRoute("/education/case-studies")({
  head: () => ({
    meta: [
      { title: "Education Case Studies — CareerMesh Lanka" },
      {
        name: "description",
        content: "Case studies from CareerMesh education partnerships and programs.",
      },
      { property: "og:title", content: "Education Case Studies — CareerMesh Lanka" },
      {
        property: "og:description",
        content: "Case studies from CareerMesh education partnerships and programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationCaseStudiesPage,
});

function EducationCaseStudiesPage() {
  const edCases = caseStudies.filter((c) => c.audience === "education");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Case Studies" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Education Case Studies."
        description="Verified case studies from our education partnerships. We do not invent outcomes or institutions."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Partnership Outcomes."
            description="Each case study follows a template: institution background, challenge, strategy, implementation, participation, outcomes and feedback."
          />
          <div className="mt-12">
            {edCases.length === 0 ? (
              <EmptyState
                title="No case studies published yet"
                description="We share verified case studies from our education partnerships. Partner with us to build outcomes worth sharing."
                ctaLabel="Partner with us"
                ctaTo="/education/partner-with-us"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {edCases.map((c) => (
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
        eyebrow="Partner With Us"
        title="Build Outcomes Worth Sharing."
        description="Partner with CareerMesh and create measurable employability outcomes."
        ctas={[{ label: "Partner With Us", to: "/education/partner-with-us" }]}
      />
    </>
  );
}
