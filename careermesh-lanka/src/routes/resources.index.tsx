import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { SampleBadge } from "@/components/shared/Badge";
import { Input } from "@/components/ui/input";
import { resources, resourceCategories, getResource } from "@/data/content";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Resources — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Career advice, internship preparation, CV and interview guidance, and talent management insights from CareerMesh Lanka.",
      },
      { property: "og:title", content: "Resources — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Career advice, internship preparation, CV and interview guidance, and talent management insights from CareerMesh Lanka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const categoryAudienceMap: Record<string, string> = {
  "Career Advice": "/resources/career",
  "Internship Preparation": "/resources/career",
  "CV & Interview Guidance": "/resources/career",
  "University Employability": "/resources/education",
  "Employer Recruitment": "/resources/employers",
  "Graduate Development": "/resources/employers",
  "Talent Management": "/resources/employers",
  "ClientFlow CRM Insights": "/resources/employers",
};

function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesQuery =
        !query.trim() ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = activeCategory === "All" || r.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  const featured = getResource("how-to-prepare-for-your-first-internship");

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources" }]} />
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Resources"
            title="Guides & Career Insights."
            description="Practical advice for students, employers and education partners — from internship preparation to talent management."
          />

          {/* Featured article */}
          {featured && (
            <Link
              to="/resources/$slug"
              params={{ slug: featured.slug }}
              className="group mt-10 block"
            >
              <Card tone="white" hover className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-4">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-gradient-to-br from-teal-50 to-mint">
                      <BookOpen className="size-10 text-teal-600/60" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                        <Sparkles className="size-3" /> Featured
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-semibold text-navy-700">
                        {featured.category}
                      </span>
                      {featured.isDemo && <SampleBadge label="Sample" />}
                    </div>
                    <h2 className="mt-3 text-h3 text-navy-900 group-hover:text-teal-700">
                      {featured.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {featured.excerpt}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{featured.readingTime}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                      Read article <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          )}
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          {/* Search + filters */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md lg:max-w-sm">
              <Search
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-12 pl-10"
                aria-label="Search resources"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <CategoryChip
                label="All"
                active={activeCategory === "All"}
                onClick={() => setActiveCategory("All")}
              />
              {resourceCategories.map((cat) => (
                <CategoryChip
                  key={cat}
                  label={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mt-10">
            {filtered.length === 0 ? (
              <EmptyState
                title="No articles found"
                description="Try a different search term or category. New articles are added regularly."
                icon={<BookOpen className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((r) => (
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
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Category landing pages */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <CategoryLinkCard
              to="/resources/career"
              title="Career Advice"
              description="Internship preparation, CV and interview guidance for students and graduates."
            />
            <CategoryLinkCard
              to="/resources/education"
              title="Education Resources"
              description="University employability and internship management insights for institutions."
            />
            <CategoryLinkCard
              to="/resources/employers"
              title="Employer Resources"
              description="Hiring, recruitment and talent management guidance for organizations."
            />
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Stay Informed"
        title="Want More Career Guidance?"
        description="Register your interest to receive updates on new resources, programs and opportunities."
        ctas={[
          { label: "Register Your Interest", to: "/students/register" },
          { label: "Contact Us", to: "/contact" },
        ]}
      />
    </>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? "bg-teal-700 text-white"
          : "bg-muted text-muted-foreground hover:bg-navy-50 hover:text-navy-900"
      }`}
    >
      {label}
    </button>
  );
}

function CategoryLinkCard({
  to,
  title,
  description,
}: {
  to: string;
  title: string;
  description: string;
}) {
  return (
    <Link to={to as never} className="group">
      <Card tone="cloud" hover className="h-full">
        <h3 className="text-base font-bold text-navy-900 group-hover:text-teal-700">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
          Explore <ArrowRight className="size-4" />
        </span>
      </Card>
    </Link>
  );
}
