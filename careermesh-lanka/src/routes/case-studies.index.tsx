import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, School, Briefcase, Users } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { caseStudies } from "@/data/content";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Case studies from CareerMesh education, employer and graduate recruitment programs — verified outcomes only.",
      },
      { property: "og:title", content: "Case Studies — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Case studies from CareerMesh education, employer and graduate recruitment programs — verified outcomes only.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

const audienceMeta: Record<string, { icon: React.ReactNode; label: string }> = {
  education: { icon: <School className="size-5" />, label: "Education Case Study" },
  employers: { icon: <Briefcase className="size-5" />, label: "Employer Case Study" },
  recruiters: { icon: <Users className="size-5" />, label: "Recruiter Case Study" },
};

function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Case Studies" }]} />
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Program Outcomes & Learning."
            description="Detailed case studies from CareerMesh partnerships and programs. Only verified, approved case studies are published — never invented outcomes or statistics."
          />
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          {caseStudies.length === 0 ? (
            <EmptyState
              title="No case studies published yet"
              description="Case studies with verified outcomes will be published as partnerships mature. If you're a partner interested in documenting your program, we'd love to hear from you."
              ctaLabel="Talk to us"
              ctaTo="/contact"
              icon={<BookOpen className="size-6" />}
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  to="/case-studies/$slug"
                  params={{ slug: cs.slug }}
                  className="group"
                >
                  <Card tone="white" hover className="flex h-full flex-col gap-3">
                    <IconTile
                      icon={audienceMeta[cs.audience]?.icon ?? <BookOpen className="size-5" />}
                      tone="teal"
                    />
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {audienceMeta[cs.audience]?.label ?? "Case Study"}
                    </span>
                    <h3 className="text-base font-bold text-navy-900 group-hover:text-teal-700">
                      {cs.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{cs.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                      Read case study <ArrowRight className="size-4" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Section bg="ice">
        <Container>
          <SectionHeading eyebrow="Explore by Audience" title="Case Studies Across Programs." />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link to="/education/case-studies" className="group block">
              <Card tone="white" hover className="h-full">
                <School className="size-6 text-navy-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Education Case Studies
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Institution partnerships and program outcomes.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  View <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
            <Link to="/employers/case-studies" className="group block">
              <Card tone="white" hover className="h-full">
                <Briefcase className="size-6 text-teal-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Employer Case Studies
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Intern hiring and recruitment outcomes.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  View <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
            <Link to="/graduate-recruiters/case-studies" className="group block">
              <Card tone="white" hover className="h-full">
                <Users className="size-6 text-teal-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Recruiter Case Studies
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Graduate recruitment programs and retention.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  View <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Document Your Program"
        title="Interested in a Partnership Case Study?"
        description="We document genuine program outcomes with verified data. Talk to us about your goals."
        ctas={[
          { label: "Contact Us", to: "/contact" },
          { label: "Our Approach", to: "/our-approach" },
        ]}
      />
    </>
  );
}
