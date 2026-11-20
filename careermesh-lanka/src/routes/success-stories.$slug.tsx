import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Clock } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { Card } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { SampleBadge } from "@/components/shared/Badge";
import { successStories } from "@/data/content";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/success-stories/$slug")({
  head: ({ params }) => {
    const story = successStories.find((s) => s.slug === params.slug);
    const title = story
      ? `${story.title} — ${siteConfig.name}`
      : `Success Story — ${siteConfig.name}`;
    const desc = story?.summary ?? "A success story from the CareerMesh network.";
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
  component: StoryPage,
});

function StoryPage() {
  const { slug } = Route.useParams();
  const story = successStories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <>
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Success Stories", to: "/success-stories" },
            { label: "Story not found" },
          ]}
        />
        <Section bg="cloud">
          <Container>
            <EmptyState
              title="Story not found"
              description="This story may have been moved or is no longer available. Browse our success stories hub."
              ctaLabel="Browse stories"
              ctaTo="/success-stories"
              icon={<Sparkles className="size-6" />}
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
          { label: "Success Stories", to: "/success-stories" },
          { label: story.title },
        ]}
      />
      <Section bg="mint">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              to="/success-stories"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <ArrowLeft className="size-4" /> Back to Success Stories
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-2.5 py-0.5 text-xs font-semibold text-teal-800 capitalize">
                {story.audience} story
              </span>
              {story.isDemo && <SampleBadge label="Sample" />}
            </div>
            <h1 className="mt-4 text-display text-navy-900">{story.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{story.summary}</p>
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-mint">
              <Sparkles className="size-12 text-teal-600/40" aria-hidden="true" />
            </div>
            <div className="mt-8 space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                Full story content will be supplied once this story has been approved for
                publication. CareerMesh publishes only genuine, approved stories — never fabricated
                names, outcomes or statistics.
              </p>
            </div>
            <div className="mt-10 rounded-lg border border-border bg-card p-6">
              <h2 className="text-base font-bold text-navy-900">Story structure</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Approved stories follow a structured format: background, academic field, career
                goals, preparation journey, internship experience, skills developed, career outcome
                (if verified) and testimonial.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Your Story"
        title="Inspired by This Journey?"
        description="Register your interest or contact us to start your own CareerMesh story."
        ctas={[
          { label: "Register", to: "/students/register" },
          { label: "Contact Us", to: "/contact" },
        ]}
      />
    </>
  );
}

// Clock kept for reading-time display when real stories land
void Clock;
