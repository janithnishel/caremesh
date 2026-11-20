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
import { employerCrmFeatures } from "@/data/platform";

export const Route = createFileRoute("/platform/employer-crm")({
  head: () => ({
    meta: [
      { title: "Employer Recruitment CRM — ClientFlow — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Candidate database, hiring pipelines, interview scheduling, candidate communication and recruitment reports for employers.",
      },
      { property: "og:title", content: "Employer Recruitment CRM — ClientFlow — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Candidate database, hiring pipelines, interview scheduling, candidate communication and recruitment reports for employers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmployerCrmPage,
});

function EmployerCrmPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "ClientFlow Platform", to: "/platform" },
          { label: "Employer Recruitment CRM" },
        ]}
      />
      <PageHero
        tone="platform"
        eyebrow="ClientFlow CRM"
        title="Employer Recruitment CRM."
        description="A dedicated workspace for employers to manage candidates, hiring pipelines, interviews, communication and recruitment reporting."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo", variant: "cyan" }]}
        visual={<DashboardMockup />}
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Your Hiring, Organised."
            description="From candidate database to recruitment reports — coordinated in one workspace."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {employerCrmFeatures.map((f) => (
              <CRMFeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <SectionHeading
            eyebrow="How It Fits"
            title="From Candidate to Placement."
            description="A connected workflow that keeps candidates engaged and your team informed."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Candidates & Pipelines",
                desc: "Search candidates and track them through each hiring stage.",
              },
              {
                step: "02",
                title: "Interviews & Communication",
                desc: "Schedule interviews and centralise candidate communication.",
              },
              {
                step: "03",
                title: "Follow-ups & Reports",
                desc: "Automated follow-ups keep candidates engaged, with recruitment reporting.",
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
        title="Manage Your Recruitment Operations."
        description="See how a configured ClientFlow workspace streamlines hiring."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo" }]}
      />
    </>
  );
}
