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
import { internshipProviderCrmFeatures } from "@/data/platform";

export const Route = createFileRoute("/platform/internship-management-crm")({
  head: () => ({
    meta: [
      { title: "Internship Management CRM — ClientFlow — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Student applications, candidate profiles, placement pipelines, host company management and communication for internship providers.",
      },
      {
        property: "og:title",
        content: "Internship Management CRM — ClientFlow — CareerMesh Lanka",
      },
      {
        property: "og:description",
        content:
          "Student applications, candidate profiles, placement pipelines, host company management and communication for internship providers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InternshipManagementCrmPage,
});

function InternshipManagementCrmPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "ClientFlow Platform", to: "/platform" },
          { label: "Internship Management CRM" },
        ]}
      />
      <PageHero
        tone="platform"
        eyebrow="ClientFlow CRM"
        title="Internship Provider CRM."
        description="A dedicated workspace for internship providers to manage applications, candidate profiles, placement pipelines, host companies and communication."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo", variant: "cyan" }]}
        visual={<DashboardMockup />}
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Manage the Full Placement Lifecycle."
            description="From application to placement tracking — coordinated in one workspace."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {internshipProviderCrmFeatures.map((f) => (
              <CRMFeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <SectionHeading
            eyebrow="How It Fits"
            title="From Application to Placement."
            description="A connected workflow that keeps students and host companies coordinated."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Applications & Profiles",
                desc: "Collect and organise applications with searchable candidate profiles.",
              },
              {
                step: "02",
                title: "Pipelines & Host Companies",
                desc: "Track placements through pipelines and manage host company relationships.",
              },
              {
                step: "03",
                title: "Coordination & Tracking",
                desc: "Automated reminders and placement tracking keep everything on schedule.",
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
        title="Manage Your Internship Operations."
        description="See how a configured ClientFlow workspace streamlines placement management."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo" }]}
      />
    </>
  );
}
