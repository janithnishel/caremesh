import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, Share2, BookOpen } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { SampleBadge } from "@/components/shared/Badge";
import { getResource, resources, type Resource } from "@/data/content";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/resources/$slug")({
  head: ({ params }) => {
    const article = getResource(params.slug);
    const title = article
      ? `${article.title} — ${siteConfig.name}`
      : `Article — ${siteConfig.name}`;
    const desc = article?.excerpt ?? "An article from the CareerMesh resources center.";
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
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getResource(slug);

  if (!article) {
    return (
      <>
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Resources", to: "/resources" },
            { label: "Article not found" },
          ]}
        />
        <Section bg="cloud">
          <Container>
            <EmptyState
              title="Article not found"
              description="This article may have been moved or is no longer available. Browse our resources for more guides."
              ctaLabel="Browse resources"
              ctaTo="/resources"
              icon={<BookOpen className="size-6" />}
            />
          </Container>
        </Section>
      </>
    );
  }

  const related = resources
    .filter((r) => r.slug !== slug && r.category === article.category)
    .slice(0, 2);
  const fallbackRelated = resources.filter((r) => r.slug !== slug).slice(0, 2);
  const relatedArticles = related.length > 0 ? related : fallbackRelated;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/resources" },
          { label: article.title },
        ]}
      />
      <Section bg="cloud">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              to="/resources"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <ArrowLeft className="size-4" /> Back to Resources
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                {article.category}
              </span>
              {article.isDemo && <SampleBadge label="Sample" />}
            </div>
            <h1 className="mt-4 text-display text-navy-900">{article.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" /> {article.readingTime}
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-800"
                onClick={() => {
                  if (typeof navigator !== "undefined" && navigator.share) {
                    void navigator.share({ title: article.title, url: window.location.href });
                  }
                }}
              >
                <Share2 className="size-4" /> Share
              </button>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-mint">
              <BookOpen className="size-12 text-teal-600/40" aria-hidden="true" />
            </div>
            <div className="mt-8 space-y-6">
              {article.body?.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {para}
                </p>
              )) ?? (
                <p className="text-base leading-relaxed text-muted-foreground">
                  Article content will be supplied by the CareerMesh team.
                </p>
              )}
            </div>

            <div className="mt-10 rounded-lg border border-border bg-card p-6">
              <h2 className="text-base font-bold text-navy-900">About this article</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                This article is part of the CareerMesh resource center providing career guidance,
                internship preparation and talent management insights. Content is managed through a
                typed data layer designed for future CMS integration.
              </p>
              {article.isDemo && (
                <p className="mt-3 text-xs font-medium text-amber-700">
                  This is a sample article included to demonstrate the resource layout. Real content
                  will be supplied by the CareerMesh team.
                </p>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {relatedArticles.length > 0 && (
        <Section bg="cloud">
          <Container>
            <SectionHeading eyebrow="Keep Reading" title="Related Articles." />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedArticles.map((r: Resource) => (
                <Link
                  key={r.slug}
                  to="/resources/$slug"
                  params={{ slug: r.slug }}
                  className="group"
                >
                  <Card tone="white" hover className="flex h-full flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                        {r.category}
                      </span>
                      {r.isDemo && <SampleBadge label="Sample" />}
                    </div>
                    <h3 className="text-base font-bold text-navy-900 group-hover:text-teal-700">
                      {r.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{r.excerpt}</p>
                    <p className="mt-auto pt-2 text-xs text-muted-foreground">{r.readingTime}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                      Read article <ArrowRight className="size-4" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        eyebrow="Get Involved"
        title="How Can We Help You Move Forward?"
        description="Whether you're a student, institution, employer or recruiter, CareerMesh is here to help you grow."
        ctas={[
          { label: "Contact Us", to: "/contact" },
          { label: "Explore Resources", to: "/resources" },
        ]}
      />
    </>
  );
}
