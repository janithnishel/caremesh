import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Briefcase, Cpu } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { SampleBadge } from "@/components/shared/Badge";
import { resources } from "@/data/content";

export const Route = createFileRoute("/resources/employers")({
  head: () => ({
    meta: [
      { title: "Employer Resources — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Resources for employers on hiring interns, recruitment and talent management, and ClientFlow CRM insights.",
      },
      { property: "og:title", content: "Employer Resources — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Resources for employers on hiring interns, recruitment and talent management, and ClientFlow CRM insights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmployerResourcesPage,
});

const employerCategories = [
  "Employer Recruitment",
  "Graduate Development",
  "Talent Management",
  "ClientFlow CRM Insights",
];

function EmployerResourcesPage() {
  const articles = resources.filter((r) => employerCategories.includes(r.category));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/resources" },
          { label: "Employer Resources" },
        ]}
      />
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="For Employers & Recruiters"
            title="Hiring & Talent Management Insights."
            description="Guidance on hiring emerging talent, recruitment processes, graduate development and ClientFlow CRM for talent operations."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {employerCategories.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-xs font-semibold text-teal-800"
              >
                {c}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          {articles.length === 0 ? (
            <EmptyState
              title="No employer articles yet"
              description="We're preparing recruitment and talent management guides for employers. Submit a hiring requirement to get started."
              ctaLabel="Hire an intern"
              ctaTo="/employers/hire-an-intern"
              icon={<BookOpen className="size-6" />}
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((r) => (
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
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link to="/employers/how-it-works" className="group block">
              <Card tone="white" hover className="h-full">
                <Briefcase className="size-6 text-teal-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  How Hiring Works
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our six-step process from hiring requirement to placement.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
            <Link to="/platform" className="group block">
              <Card tone="white" hover className="h-full">
                <Cpu className="size-6 text-cyan-800" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  ClientFlow Platform
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Manage your talent operations with a dedicated CRM workspace.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  Explore <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Hire Emerging Talent"
        title="Access Prepared Candidates."
        description="Submit a hiring requirement and we'll match you with suitable candidates from our network."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "Recruitment Services", to: "/employers/recruitment-services" },
        ]}
      />
    </>
  );
}
