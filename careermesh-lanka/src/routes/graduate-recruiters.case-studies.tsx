import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { caseStudies } from "@/data/content";

export const Route = createFileRoute("/graduate-recruiters/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Graduate Recruiters — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Verified case studies from our graduate recruitment partnerships with corporate programs.",
      },
      { property: "og:title", content: "Case Studies — Graduate Recruiters — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Verified case studies from our graduate recruitment partnerships with corporate programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecruiterCaseStudiesPage,
});

function RecruiterCaseStudiesPage() {
  const recCases = caseStudies.filter((c) => c.audience === "recruiters");
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Case Studies" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Case Studies"
        title="Corporate Program Case Studies."
        description="Verified case studies from our graduate recruitment partnerships. We never publish fabricated outcomes or statistics."
      />

      <Section bg="dark">
        <Container>
          {recCases.length === 0 ? (
            <EmptyState
              title="No case studies published yet"
              description="We share verified case studies from our graduate recruitment partnerships. Partner with us to build outcomes worth sharing."
              ctaLabel="Talk to us"
              ctaTo="/graduate-recruiters/contact"
              icon={<Sparkles className="size-6" />}
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {recCases.map((c) => (
                <div key={c.slug} className="rounded-lg border border-white/10 bg-navy-800 p-6">
                  <p className="text-base font-bold text-white">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{c.summary}</p>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: c.slug }}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-500 hover:text-teal-400"
                  >
                    Read case study <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTASection
        eyebrow="Talk to Us"
        title="Build Outcomes Worth Sharing."
        description="Partner with CareerMesh to develop a graduate talent program with measurable results."
        ctas={[{ label: "Request a Consultation", to: "/graduate-recruiters/contact" }]}
      />
    </>
  );
}
