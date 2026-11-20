import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Handshake,
  Layers,
  Cpu,
  GraduationCap,
  School,
  Briefcase,
  Users,
  Workflow,
  Zap,
  Network,
} from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EcosystemDiagram } from "@/components/homepage/EcosystemDiagram";

export const Route = createFileRoute("/our-approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "How CareerMesh connects the people, creates the opportunities and helps organizations manage their talent operations through ClientFlow.",
      },
      { property: "og:title", content: "Our Approach — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "How CareerMesh connects the people, creates the opportunities and helps organizations manage their talent operations through ClientFlow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurApproachPage,
});

const pillars = [
  {
    icon: <Compass className="size-5" />,
    title: "Prepare",
    desc: "We help students build the skills, confidence and professional readiness they need before they ever meet an employer.",
  },
  {
    icon: <Handshake className="size-5" />,
    title: "Connect",
    desc: "We create genuine connections between students, institutions, employers and recruiters — matched to real requirements.",
  },
  {
    icon: <Layers className="size-5" />,
    title: "Coordinate",
    desc: "We manage the full journey: registration, preparation, matching, interviews, placement and progress monitoring.",
  },
  {
    icon: <Cpu className="size-5" />,
    title: "Empower",
    desc: "Through ClientFlow, participating organizations run their own talent operations on dedicated, configured workspaces.",
  },
];

const audienceApproaches = [
  {
    icon: <GraduationCap className="size-5" />,
    title: "For Students",
    desc: "Structured preparation, career guidance and placement coordination.",
    to: "/students-graduates",
    tone: "mint" as const,
  },
  {
    icon: <School className="size-5" />,
    title: "For Education Providers",
    desc: "Customized programs, industry connections and internship management.",
    to: "/education-providers",
    tone: "ice" as const,
  },
  {
    icon: <Briefcase className="size-5" />,
    title: "For Employers",
    desc: "Prepared candidates, structured matching and hiring coordination.",
    to: "/employers",
    tone: "cloud" as const,
  },
  {
    icon: <Users className="size-5" />,
    title: "For Graduate Recruiters",
    desc: "Attraction, recruitment, development and retention solutions.",
    to: "/graduate-recruiters",
    tone: "dark" as const,
  },
];

function OurApproachPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Our Approach" }]} />
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="Connect the People. Create the Opportunities. Manage the Operations."
            description="CareerMesh works at the centre of the employability ecosystem — managing relationships across education and industry, and giving organizations the technology to run their own talent operations."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <Card key={p.title} tone="white" hover className="flex h-full flex-col gap-3">
                <IconTile icon={p.icon} tone="teal" />
                <h3 className="text-base font-bold text-navy-900">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="The Ecosystem"
            title="From Academic Potential to Professional Opportunity."
            description="We manage the connections across every stage — from study to career."
          />
          <div className="mt-12">
            <EcosystemDiagram />
          </div>
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading eyebrow="By Audience" title="How We Work With Each Stakeholder." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {audienceApproaches.map((a) => {
              const dark = a.tone === "dark";
              return (
                <Link key={a.title} to={a.to as never} className="group">
                  <Card tone={a.tone} hover className="flex h-full flex-col gap-3">
                    <IconTile icon={a.icon} tone={dark ? "cyan" : "teal"} />
                    <h3
                      className={
                        dark ? "text-lg font-bold text-white" : "text-lg font-bold text-navy-900"
                      }
                    >
                      {a.title}
                    </h3>
                    <p className={dark ? "text-sm text-white/70" : "text-sm text-muted-foreground"}>
                      {a.desc}
                    </p>
                    <span
                      className={`mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold ${dark ? "text-teal-500 group-hover:text-teal-400" : "text-teal-700 group-hover:text-teal-800"}`}
                    >
                      Explore <ArrowRight className="size-4" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card tone="white" hover>
              <IconTile icon={<Workflow className="size-5" />} tone="cyan" />
              <h3 className="mt-4 text-base font-bold text-navy-900">Managed Services</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Professional internships, employability training, industry projects, university
                partnerships, intern and graduate recruitment, and development programs — delivered
                by the CareerMesh team.
              </p>
            </Card>
            <Card tone="white" hover>
              <IconTile icon={<Zap className="size-5" />} tone="cyan" />
              <h3 className="mt-4 text-base font-bold text-navy-900">ClientFlow Technology</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Dedicated CRM workspaces configured for universities, internship providers,
                employers and graduate recruiters — with pipelines, automation and communication
                management.
              </p>
            </Card>
          </div>
          <div className="mt-8">
            <Link
              to="/platform"
              className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-800 hover:text-cyan-600"
            >
              Discover ClientFlow <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Get Started"
        title="See How We Can Work Together."
        description="Tell us who you are and what you're trying to achieve — we'll show you the path."
        ctas={[
          { label: "Contact Us", to: "/contact" },
          { label: "Our Network", to: "/our-network" },
        ]}
      />
    </>
  );
}

// Network icon reserved for future use
void Network;
