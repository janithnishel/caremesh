import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { DashboardMockup } from "@/components/homepage/DashboardMockup";
import { CRMFeatureCard } from "@/components/platform/PlatformComponents";
import { universityCrmFeatures } from "@/data/platform";

export const Route = createFileRoute("/platform/university-crm")({
  head: () => ({
    meta: [
      { title: "University CRM — ClientFlow — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Student CRM, cohort management, employer databases, internship pipelines and progress reporting for universities.",
      },
      { property: "og:title", content: "University CRM — ClientFlow — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Student CRM, cohort management, employer databases, internship pipelines and progress reporting for universities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UniversityCrmPage,
});

function UniversityCrmPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "ClientFlow Platform", to: "/platform" },
          { label: "University CRM" },
        ]}
      />
      <PageHero
        tone="platform"
        eyebrow="ClientFlow CRM"
        title="University Management CRM."
        description="A dedicated workspace for universities to manage students, cohorts, employer relationships, internship pipelines and progress reporting."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo", variant: "cyan" }]}
        visual={<DashboardMockup />}
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Everything a University Needs."
            description="Configured for the operational realities of managing student employability and industry partnerships."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {universityCrmFeatures.map((f) => (
              <CRMFeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <SectionHeading
            eyebrow="How It Fits"
            title="From Student Records to Placement Reporting."
            description="A connected workflow that keeps students, employers and faculty coordinated."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Student & Cohort Management",
                desc: "Organise students by cohort, intake and program with centralised records.",
              },
              {
                step: "02",
                title: "Employer & Pipeline Coordination",
                desc: "Manage employer relationships and track internships through pipelines.",
              },
              {
                step: "03",
                title: "Follow-ups & Reporting",
                desc: "Automated follow-ups keep students on track, with progress reporting throughout.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]"
              >
                <span className="text-sm font-bold text-cyan-800">{s.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton to="/platform/book-demo" variant="cyan" size="md">
              Book a demo <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      <CTASection
        tone="cyan"
        eyebrow="Get Started"
        title="Manage Your University's Talent Operations."
        description="See how a configured ClientFlow workspace adapts to your institution."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo" }]}
      />
    </>
  );
}
