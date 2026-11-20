import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, School, Users } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { SampleBadge } from "@/components/shared/Badge";
import { resources } from "@/data/content";

export const Route = createFileRoute("/resources/education")({
  head: () => ({
    meta: [
      { title: "Education Resources — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Resources for education providers on graduate employability, internship management and industry partnerships.",
      },
      { property: "og:title", content: "Education Resources — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Resources for education providers on graduate employability, internship management and industry partnerships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationResourcesPage,
});

const educationCategories = ["University Employability", "Talent Management"];

function EducationResourcesPage() {
  const articles = resources.filter((r) => educationCategories.includes(r.category));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/resources" },
          { label: "Education Resources" },
        ]}
      />
      <Section bg="ice">
        <Container>
          <SectionHeading
            eyebrow="For Education Providers"
            title="University Employability Insights."
            description="Guidance on employability strategy, internship management and building stronger industry connections for your institution."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-xs font-semibold text-navy-700">
              <School className="size-3" /> University Employability
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-xs font-semibold text-navy-700">
              <Users className="size-3" /> Talent Management
            </span>
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          {articles.length === 0 ? (
            <EmptyState
              title="No education articles yet"
              description="We're preparing employability and internship management insights for institutions. Partner with us to be notified."
              ctaLabel="Partner with us"
              ctaTo="/education/partner-with-us"
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
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-semibold text-navy-700">
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

      <Section bg="cloud">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link to="/education/why-partner" className="group block">
              <Card tone="ice" hover className="h-full">
                <School className="size-6 text-navy-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Why Partner With Us?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Industry connections and structured coordination for your institution.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
            <Link to="/education/programs" className="group block">
              <Card tone="ice" hover className="h-full">
                <Users className="size-6 text-navy-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Our Programs
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Customized employability solutions adapted to your goals.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  Explore <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
            <Link to="/education/partner-with-us" className="group block">
              <Card tone="ice" hover className="h-full">
                <BookOpen className="size-6 text-navy-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Partner With Us
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Start a conversation about strengthening graduate employability.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  Get in touch <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Education Partnership"
        title="Strengthen Your Graduate Employability."
        description="Tell us about your institution and goals — we'll tailor a partnership that fits your students."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "Explore Programs", to: "/education/programs" },
        ]}
      />
    </>
  );
}
