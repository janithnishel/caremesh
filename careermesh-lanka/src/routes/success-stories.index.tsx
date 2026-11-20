import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, GraduationCap, School, Briefcase, Users } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { successStories } from "@/data/content";

export const Route = createFileRoute("/success-stories/")({
  head: () => ({
    meta: [
      { title: "Success Stories — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Real success stories from students, education partners and employers in the CareerMesh network.",
      },
      { property: "og:title", content: "Success Stories — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Real success stories from students, education partners and employers in the CareerMesh network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SuccessStoriesPage,
});

const audienceFilters = [
  { key: "all", label: "All Stories" },
  { key: "students", label: "Students" },
  { key: "education", label: "Education" },
  { key: "employers", label: "Employers" },
  { key: "recruiters", label: "Recruiters" },
] as const;

const audienceMeta: Record<string, { icon: React.ReactNode; label: string }> = {
  students: { icon: <GraduationCap className="size-5" />, label: "Student Story" },
  education: { icon: <School className="size-5" />, label: "Education Story" },
  employers: { icon: <Briefcase className="size-5" />, label: "Employer Story" },
  recruiters: { icon: <Users className="size-5" />, label: "Recruiter Story" },
};

function SuccessStoriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Success Stories" }]} />
      <Section bg="mint">
        <Container>
          <SectionHeading
            eyebrow="Success Stories"
            title="Stories From Our Network."
            description="Real experiences from students, education partners and employers in the CareerMesh network. Only approved stories are published."
          />
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          {successStories.length === 0 ? (
            <EmptyState
              title="No stories published yet"
              description="We share genuine, approved stories from our network. If you're a partner or student who'd like to share your experience, we'd love to hear from you."
              ctaLabel="Share your story"
              ctaTo="/contact"
              icon={<Sparkles className="size-6" />}
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {successStories.map((s) => (
                <Link
                  key={s.slug}
                  to="/success-stories/$slug"
                  params={{ slug: s.slug }}
                  className="group"
                >
                  <Card tone="white" hover className="flex h-full flex-col gap-3">
                    <IconTile
                      icon={audienceMeta[s.audience]?.icon ?? <Sparkles className="size-5" />}
                      tone="teal"
                    />
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {audienceMeta[s.audience]?.label ?? "Story"}
                    </span>
                    <h3 className="text-base font-bold text-navy-900 group-hover:text-teal-700">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                      Read story <ArrowRight className="size-4" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Explore by Audience"
            title="Stories Across Our Network."
            description="Filtered views of success stories by stakeholder group."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/students/success-stories" className="group block">
              <Card tone="mint" hover className="h-full">
                <GraduationCap className="size-6 text-teal-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Student Stories
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Journeys from study to first professional experience.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  View <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
            <Link to="/education/testimonials" className="group block">
              <Card tone="ice" hover className="h-full">
                <School className="size-6 text-navy-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Education Testimonials
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Partner institutions on working with CareerMesh.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  View <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
            <Link to="/employers/testimonials" className="group block">
              <Card tone="cloud" hover className="h-full">
                <Briefcase className="size-6 text-teal-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Employer Testimonials
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Hiring organizations on our recruitment support.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  View <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
            <Link to="/graduate-recruiters/case-studies" className="group block">
              <Card tone="dark" hover className="h-full">
                <Users className="size-6 text-teal-500" />
                <h3 className="mt-4 text-base font-bold text-white group-hover:text-teal-400">
                  Recruiter Case Studies
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Graduate recruitment programs and outcomes.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-500 group-hover:text-teal-400">
                  View <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Your Story"
        title="Share Your CareerMesh Experience."
        description="If CareerMesh has supported your journey, we'd love to feature your story — with your approval."
        ctas={[{ label: "Contact Us", to: "/contact" }]}
      />
    </>
  );
}

export { audienceFilters };
