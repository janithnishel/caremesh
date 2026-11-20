import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { successStories } from "@/data/content";

export const Route = createFileRoute("/students/success-stories")({
  head: () => ({
    meta: [
      { title: "Student Success Stories — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Real, approved success stories from students in the CareerMesh network. We only publish genuine stories — never fabricated outcomes.",
      },
      { property: "og:title", content: "Student Success Stories — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Real, approved success stories from students in the CareerMesh network. We only publish genuine stories — never fabricated outcomes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentSuccessStoriesPage,
});

function StudentSuccessStoriesPage() {
  const studentStories = successStories.filter((s) => s.audience === "students");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Success Stories" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Student Success Stories."
        description="Real experiences from students who've joined the CareerMesh network. We only publish genuine, approved stories — never fabricated names, outcomes or statistics."
      />
      <Section bg="white">
        <Container>
          <SectionHeading eyebrow="Stories" title="Genuine Experiences, Honestly Shared." />
          <div className="mt-12">
            {studentStories.length === 0 ? (
              <EmptyState
                title="No student stories published yet"
                description="We share genuine, approved stories from students in our network. If you'd like to share your experience, we'd love to hear from you."
                ctaLabel="Share your story"
                ctaTo="/contact"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {studentStories.map((story) => (
                  <Link key={story.slug} to="/success-stories/$slug" params={{ slug: story.slug }}>
                    <div className="flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-e2)]">
                      <h3 className="text-base font-bold text-navy-900">{story.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {story.summary}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800">
                        Read story <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Get Started"
        title="Ready to Write Your Story?"
        description="Register your interest and take the first step toward real-world professional experience."
        ctas={[{ label: "Register Now", to: "/students/register" }]}
      />
    </>
  );
}
