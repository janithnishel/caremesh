import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Layers } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getIcon } from "@/lib/icons";
import { platformPrinciples } from "@/data/platform";
import { DashboardMockup } from "@/components/homepage/DashboardMockup";
import { WorkspaceDiagram } from "@/components/platform/PlatformComponents";

export const Route = createFileRoute("/platform/")({
  head: () => ({
    meta: [
      { title: "ClientFlow Platform — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Your organization, your talent operations, one connected platform. Dedicated ClientFlow CRM workspaces for participating organizations.",
      },
      { property: "og:title", content: "ClientFlow Platform — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Your organization, your talent operations, one connected platform. Dedicated ClientFlow CRM workspaces for participating organizations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "ClientFlow Platform" }]} />
      <PageHero
        tone="platform"
        eyebrow="Powered by ClientFlow CRM"
        title="Your Organization. Your Talent Operations. One Connected Platform."
        description="Through ClientFlow CRM, CareerMesh enables participating organizations to manage their contacts, recruitment processes, communication and business relationships through dedicated, configured workspaces."
        ctas={[
          { label: "Book a Demo", to: "/platform/book-demo", variant: "cyan" },
          { label: "View Pricing", to: "/platform/pricing", variant: "secondary" },
        ]}
        visual={<DashboardMockup />}
      />

      {/* How workspaces work */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Dedicated Workspaces, Configured to You."
            description="Each participating organization receives its own ClientFlow workspace, configured to its operations and access permissions."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformPrinciples.map((p) => {
              const Icon = getIcon(p.icon);
              return (
                <div
                  key={p.title}
                  className="flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-e2)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CRM product pages */}
      <Section bg="cyan">
        <Container>
          <SectionHeading
            eyebrow="CRM Workspaces"
            title="A Workspace for Every Role."
            description="ClientFlow adapts to the operational needs of each organization type in the ecosystem."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "University CRM",
                to: "/platform/university-crm",
                desc: "Student CRM, cohorts, employer databases and internship pipelines.",
              },
              {
                title: "Internship Management CRM",
                to: "/platform/internship-management-crm",
                desc: "Applications, placement pipelines and host company management.",
              },
              {
                title: "Employer Recruitment CRM",
                to: "/platform/employer-crm",
                desc: "Candidate database, hiring pipelines and interview scheduling.",
              },
              {
                title: "Graduate Recruitment CRM",
                to: "/platform/graduate-recruitment-crm",
                desc: "Talent database, campaigns and automated communications.",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.to}
                className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-e2)]"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800">
                  <Layers className="size-5" />
                </div>
                <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-800 group-hover:text-cyan-600">
                  Explore <ArrowRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Automation & AI */}
      <Section bg="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border border-border bg-cyan-50 p-6 shadow-[var(--shadow-e1)] md:p-8">
              <h3 className="text-h3 text-navy-900">Automation & Workflows</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Automated workflows handle repetitive communication and follow-ups — from student
                registration to interview scheduling.
              </p>
              <div className="mt-6">
                <CTAButton to="/platform/automation" variant="cyan" size="md">
                  Explore automation <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
              <h3 className="text-h3 text-navy-900">AI Capabilities</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Configured AI assistance for communication, FAQs, lead qualification and career
                guidance — with a clear path to custom AI development.
              </p>
              <div className="mt-6">
                <CTAButton to="/platform/ai" variant="secondary" size="md">
                  Explore AI <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Workspace diagram */}
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Organization Workspaces"
            title="One Central Business, Many Connected Workspaces."
            description="CareerMesh Central Business connects to dedicated workspaces — each with appropriate access restrictions."
          />
          <div className="mt-12">
            <WorkspaceDiagram />
          </div>
        </Container>
      </Section>

      <CTASection
        tone="cyan"
        eyebrow="Get Started"
        title="See ClientFlow in Action."
        description="Book a demo to explore a configured workspace tailored to your operations."
        ctas={[
          { label: "Book a Demo", to: "/platform/book-demo" },
          { label: "View Pricing", to: "/platform/pricing" },
        ]}
      />
    </>
  );
}
