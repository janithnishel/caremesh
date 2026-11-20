import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GraduationCap, FileText } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { SampleBadge } from "@/components/shared/Badge";
import { resources } from "@/data/content";

export const Route = createFileRoute("/resources/career")({
  head: () => ({
    meta: [
      { title: "Career Advice — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Career advice articles and guides for students and graduates — internship preparation, CV and interview guidance.",
      },
      { property: "og:title", content: "Career Advice — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Career advice articles and guides for students and graduates — internship preparation, CV and interview guidance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareerResourcesPage,
});

const careerCategories = ["Career Advice", "Internship Preparation", "CV & Interview Guidance"];

function CareerResourcesPage() {
  const articles = resources.filter((r) => careerCategories.includes(r.category));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/resources" },
          { label: "Career Advice" },
        ]}
      />
      <Section bg="mint">
        <Container>
          <SectionHeading
            eyebrow="For Students & Graduates"
            title="Career Advice & Preparation Guides."
            description="Practical guidance to help you prepare for internships, build your CV and succeed in interviews."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {careerCategories.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-xs font-semibold text-teal-800"
              >
                <BookOpen className="size-3" /> {c}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          {articles.length === 0 ? (
            <EmptyState
              title="No career articles yet"
              description="We're preparing practical career guides. Register your interest to be notified when new resources are published."
              ctaLabel="Register your interest"
              ctaTo="/students/register"
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

      <Section bg="cloud">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link to="/students/why-internship" className="group block">
              <Card tone="mint" hover className="h-full">
                <GraduationCap className="size-6 text-teal-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Why Do an Internship?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Understand the value of professional experience for your career.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
            <Link to="/students/career-development-toolkit" className="group block">
              <Card tone="ice" hover className="h-full">
                <FileText className="size-6 text-navy-700" />
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  Career Development Toolkit
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Structured modules to build communication, branding and workplace readiness.
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
        eyebrow="Start Your Journey"
        title="Ready to Build Your Career?"
        description="Register your interest and we'll guide you through preparation, matching and placement."
        ctas={[
          { label: "Register", to: "/students/register" },
          { label: "View Programs", to: "/students/internship-programs" },
        ]}
      />
    </>
  );
}
