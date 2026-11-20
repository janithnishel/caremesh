import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Search,
  ArrowRight,
  FileText,
  GraduationCap,
  Briefcase,
  School,
  Users,
  Cpu,
} from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { Input } from "@/components/ui/input";
import { resources } from "@/data/content";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — CareerMesh Lanka" },
      {
        name: "description",
        content: "Search the CareerMesh Lanka website for pages and resources.",
      },
      { property: "og:title", content: "Search — CareerMesh Lanka" },
      {
        property: "og:description",
        content: "Search the CareerMesh Lanka website for pages and resources.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SearchPage,
});

type SearchEntry = {
  title: string;
  description: string;
  to: string;
  category: string;
  icon: React.ReactNode;
};

const siteIndex: SearchEntry[] = [
  {
    title: "Students & Graduates",
    description: "Internship programs, career development and opportunities.",
    to: "/students-graduates",
    category: "Students",
    icon: <GraduationCap className="size-5" />,
  },
  {
    title: "Education Providers",
    description: "University partnerships and employability programs.",
    to: "/education-providers",
    category: "Education",
    icon: <School className="size-5" />,
  },
  {
    title: "Employers",
    description: "Hire interns and access emerging talent.",
    to: "/employers",
    category: "Employers",
    icon: <Briefcase className="size-5" />,
  },
  {
    title: "Graduate Recruiters",
    description: "Attract, recruit, develop and retain talent.",
    to: "/graduate-recruiters",
    category: "Recruiters",
    icon: <Users className="size-5" />,
  },
  {
    title: "ClientFlow Platform",
    description: "Dedicated CRM workspaces for organizations.",
    to: "/platform",
    category: "Platform",
    icon: <Cpu className="size-5" />,
  },
  {
    title: "About Us",
    description: "Our mission, vision and network.",
    to: "/about",
    category: "Company",
    icon: <FileText className="size-5" />,
  },
  {
    title: "Our Approach",
    description: "How CareerMesh works across the ecosystem.",
    to: "/our-approach",
    category: "Company",
    icon: <FileText className="size-5" />,
  },
  {
    title: "Our Network",
    description: "The four stakeholder groups we connect.",
    to: "/our-network",
    category: "Company",
    icon: <FileText className="size-5" />,
  },
  {
    title: "Resources",
    description: "Career advice and talent management guides.",
    to: "/resources",
    category: "Resources",
    icon: <FileText className="size-5" />,
  },
  {
    title: "Success Stories",
    description: "Stories from our network.",
    to: "/success-stories",
    category: "Resources",
    icon: <FileText className="size-5" />,
  },
  {
    title: "Case Studies",
    description: "Verified program outcomes.",
    to: "/case-studies",
    category: "Resources",
    icon: <FileText className="size-5" />,
  },
  {
    title: "FAQs",
    description: "Frequently asked questions.",
    to: "/faqs",
    category: "Resources",
    icon: <FileText className="size-5" />,
  },
  {
    title: "Contact Us",
    description: "Get in touch with the right team.",
    to: "/contact",
    category: "Company",
    icon: <FileText className="size-5" />,
  },
  {
    title: "Student Registration",
    description: "Register your interest as a student.",
    to: "/students/register",
    category: "Students",
    icon: <GraduationCap className="size-5" />,
  },
  {
    title: "Hire an Intern",
    description: "Submit a hiring requirement.",
    to: "/employers/hire-an-intern",
    category: "Employers",
    icon: <Briefcase className="size-5" />,
  },
  {
    title: "Book a Demo",
    description: "See ClientFlow in action.",
    to: "/platform/book-demo",
    category: "Platform",
    icon: <Cpu className="size-5" />,
  },
];

function SearchPage() {
  const [query, setQuery] = useState("");

  const pageResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return siteIndex.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q),
    );
  }, [query]);

  const articleResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return resources.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.excerpt.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q),
    );
  }, [query]);

  const hasQuery = query.trim().length > 0;
  const totalResults = pageResults.length + articleResults.length;

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Search" }]} />
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Search"
            title="Search CareerMesh Lanka."
            description="Find pages, resources and information across the site."
          />
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Search pages and articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-12 pl-11"
                aria-label="Search the site"
                autoFocus
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          {!hasQuery ? (
            <EmptyState
              title="Start typing to search"
              description="Search for pages like 'students', 'employers', 'platform' or 'resources'."
              icon={<Search className="size-6" />}
            />
          ) : totalResults === 0 ? (
            <EmptyState
              title={`No results for "${query}"`}
              description="Try a different search term, or browse the site from the navigation."
              ctaLabel="Browse resources"
              ctaTo="/resources"
              icon={<Search className="size-6" />}
            />
          ) : (
            <div className="space-y-10">
              <p className="text-sm text-muted-foreground">
                {totalResults} result{totalResults !== 1 ? "s" : ""} for "{query}"
              </p>

              {pageResults.length > 0 && (
                <div>
                  <h2 className="text-h3 text-navy-900">Pages</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {pageResults.map((p) => (
                      <Link key={p.to} to={p.to as never} className="group">
                        <Card tone="white" hover className="flex h-full items-start gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                            {p.icon}
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              {p.category}
                            </p>
                            <h3 className="text-base font-bold text-navy-900 group-hover:text-teal-700">
                              {p.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {p.description}
                            </p>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {articleResults.length > 0 && (
                <div>
                  <h2 className="text-h3 text-navy-900">Articles</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {articleResults.map((r) => (
                      <Link
                        key={r.slug}
                        to="/resources/$slug"
                        params={{ slug: r.slug }}
                        className="group"
                      >
                        <Card tone="white" hover className="flex h-full flex-col gap-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {r.category}
                          </p>
                          <h3 className="text-base font-bold text-navy-900 group-hover:text-teal-700">
                            {r.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {r.excerpt}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                            Read <ArrowRight className="size-4" />
                          </span>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
