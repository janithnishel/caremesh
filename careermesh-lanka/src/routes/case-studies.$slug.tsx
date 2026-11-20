import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { SampleBadge } from "@/components/shared/Badge";
import { caseStudies } from "@/data/content";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const cs = caseStudies.find((c) => c.slug === params.slug);
    const title = cs ? `${cs.title} — ${siteConfig.name}` : `Case Study — ${siteConfig.name}`;
    const desc = cs?.summary ?? "A case study from CareerMesh programs.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <>
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Case Studies", to: "/case-studies" },
            { label: "Case study not found" },
          ]}
        />
        <Section bg="cloud">
          <Container>
            <EmptyState
              title="Case study not found"
              description="This case study may have been moved or is no longer available. Browse our case studies hub."
              ctaLabel="Browse case studies"
              ctaTo="/case-studies"
              icon={<BookOpen className="size-6" />}
            />
          </Container>
        </Section>
      </>
    );
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Case Studies", to: "/case-studies" },
          { label: cs.title },
        ]}
      />
      <Section bg="cloud">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <ArrowLeft className="size-4" /> Back to Case Studies
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-semibold text-navy-700 capitalize">
                {cs.audience} case study
              </span>
              {cs.isDemo && <SampleBadge label="Sample" />}
            </div>
            <h1 className="mt-4 text-display text-navy-900">{cs.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{cs.summary}</p>
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            {[
              {
                heading: "Background",
                body: "Institution or organization context will be provided once this case study is approved for publication.",
              },
              {
                heading: "Initial Challenge",
                body: "The challenge the partner faced, as documented and approved by the partner.",
              },
              {
                heading: "Program Strategy",
                body: "How the CareerMesh program was designed to address the challenge.",
              },
              {
                heading: "Implementation",
                body: "How the program was delivered, including participation details.",
              },
              {
                heading: "Measured Outcomes",
                body: "Verified outcomes only — no invented statistics. Outcomes are published with partner approval.",
              },
              {
                heading: "Partner Feedback",
                body: "Approved partner feedback, published with consent.",
              },
            ].map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-h3 text-navy-900">{sec.heading}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{sec.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Learn More"
        title="Explore a Partnership."
        description="Talk to us about how CareerMesh programs could work for your organization."
        ctas={[
          { label: "Contact Us", to: "/contact" },
          { label: "Our Approach", to: "/our-approach" },
        ]}
      />
    </>
  );
}
