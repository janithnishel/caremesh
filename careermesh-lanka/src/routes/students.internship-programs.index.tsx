import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ProgramCard } from "@/components/students/ProgramCard";
import { programCategories } from "@/data/programs";

export const Route = createFileRoute("/students/internship-programs/")({
  head: () => ({
    meta: [
      { title: "Internship Programs — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Explore internship program categories across IT, accounting, finance, engineering, business, marketing, HR and hospitality.",
      },
      { property: "og:title", content: "Internship Programs — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Explore internship program categories across IT, accounting, finance, engineering, business, marketing, HR and hospitality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InternshipProgramsPage,
});

function InternshipProgramsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Internship Programs" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Internship Programs by Field."
        description="Choose a field to explore what you can learn, suitable academic backgrounds, example professional tasks, skills developed, possible work environments, application requirements and how to register your interest."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Program Categories"
            title="Find Your Field."
            description="We support a range of professional disciplines. Each category has its own detail page."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programCategories.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-border bg-mint p-6">
            <p className="text-sm font-semibold text-navy-900">Don't see your field?</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              We also support other professional areas. Register your interest and tell us your
              preferred field.
            </p>
            <Link
              to="/students/register"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Register your interest <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Get Started"
        title="Found Your Field?"
        description="Register your interest and we'll guide you through preparation and opportunity matching."
        ctas={[{ label: "Register Now", to: "/students/register" }]}
      />
    </>
  );
}
