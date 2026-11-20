import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { WorkflowDiagram } from "@/components/platform/PlatformComponents";

export const Route = createFileRoute("/platform/automation")({
  head: () => ({
    meta: [
      { title: "Automation & Workflows — ClientFlow — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Automated workflows for student registration, employer inquiries and interview scheduling — reducing repetitive administrative work.",
      },
      { property: "og:title", content: "Automation & Workflows — ClientFlow — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Automated workflows for student registration, employer inquiries and interview scheduling — reducing repetitive administrative work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AutomationPage,
});

function AutomationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "ClientFlow Platform", to: "/platform" },
          { label: "Automation & Workflows" },
        ]}
      />
      <PageHero
        tone="platform"
        eyebrow="ClientFlow CRM"
        title="Automation & Workflows."
        description="Automated workflows handle repetitive communication and follow-ups — from student registration to interview scheduling — so your team can focus on people, not admin."
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Workflow Examples"
            title="Automated Flows That Save Time."
            description="Three example workflows showing how ClientFlow automates coordination across the ecosystem."
          />
          <WorkflowDiagram />
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <SectionHeading
            eyebrow="Why It Matters"
            title="Less Admin, More People Time."
            description="Automation reduces repetitive tasks so your team can focus on relationships and outcomes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Reduce Manual Follow-ups",
                description: "Automated reminders keep candidates, students and partners engaged.",
              },
              {
                title: "Keep Records Current",
                description:
                  "CRM records and pipeline stages update automatically as workflows run.",
              },
              {
                title: "Never Lose a Lead",
                description:
                  "Every inquiry triggers a coordinated workflow with internal notifications.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]"
              >
                <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        tone="cyan"
        eyebrow="Get Started"
        title="See Automation in Action."
        description="Book a demo to explore how automated workflows fit your operations."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo" }]}
      />
    </>
  );
}
