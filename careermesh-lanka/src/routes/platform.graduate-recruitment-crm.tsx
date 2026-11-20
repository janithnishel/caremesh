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
import { graduateRecruitmentCrmFeatures } from "@/data/platform";

export const Route = createFileRoute("/platform/graduate-recruitment-crm")({
  head: () => ({
    meta: [
      { title: "Graduate Recruitment CRM — ClientFlow — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Graduate talent database, employer CRM, recruitment pipelines, campaign management, automated communications and program tracking for graduate recruiters.",
      },
      { property: "og:title", content: "Graduate Recruitment CRM — ClientFlow — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Graduate talent database, employer CRM, recruitment pipelines, campaign management, automated communications and program tracking for graduate recruiters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GraduateRecruitmentCrmPage,
});

function GraduateRecruitmentCrmPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "ClientFlow Platform", to: "/platform" },
          { label: "Graduate Recruitment CRM" },
        ]}
      />
      <PageHero
        tone="platform"
        eyebrow="ClientFlow CRM"
        title="Graduate Recruitment CRM."
        description="A dedicated workspace for graduate recruiters to manage talent databases, employer relationships, recruitment pipelines, campaigns and development follow-ups."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo", variant: "cyan" }]}
        visual={<DashboardMockup />}
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Built for Graduate Recruitment."
            description="From talent database to development follow-ups — coordinated in one workspace."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {graduateRecruitmentCrmFeatures.map((f) => (
              <CRMFeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <SectionHeading
            eyebrow="How It Fits"
            title="From Campaign to Development."
            description="A connected workflow that supports the full graduate talent lifecycle."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Talent & Campaigns",
                desc: "Manage your graduate talent database and run recruitment campaigns.",
              },
              {
                step: "02",
                title: "Pipelines & Interviews",
                desc: "Track candidates through pipelines and coordinate interviews.",
              },
              {
                step: "03",
                title: "Programs & Development",
                desc: "Track graduate programs and automate development follow-ups.",
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
        title="Manage Your Graduate Recruitment Operations."
        description="See how a configured ClientFlow workspace supports the full talent lifecycle."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo" }]}
      />
    </>
  );
}
