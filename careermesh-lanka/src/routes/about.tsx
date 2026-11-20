import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  School,
  Briefcase,
  Users,
  Network,
  Layers,
  Cpu,
  Target,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { ImageSlot } from "@/components/shared/ImageSlot";
import { siteConfig } from "@/config/site";
import { team } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "CareerMesh Lanka connects students, educational institutions, employers and graduate recruiters through meaningful career services and technology-enabled partnerships across Sri Lanka.",
      },
      { property: "og:title", content: "About Us — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "CareerMesh Lanka connects students, educational institutions, employers and graduate recruiters through meaningful career services and technology-enabled partnerships across Sri Lanka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const stakeholders = [
  {
    icon: <GraduationCap className="size-5" />,
    title: "Students & Graduates",
    desc: "Emerging talent building practical skills and professional experience.",
    to: "/students-graduates",
    tone: "mint" as const,
  },
  {
    icon: <School className="size-5" />,
    title: "Universities & Education Providers",
    desc: "Institutions strengthening graduate employability through industry partnerships.",
    to: "/education-providers",
    tone: "ice" as const,
  },
  {
    icon: <Briefcase className="size-5" />,
    title: "Employers & Companies",
    desc: "Organizations accessing prepared interns and future professionals.",
    to: "/employers",
    tone: "cloud" as const,
  },
  {
    icon: <Users className="size-5" />,
    title: "Graduate Recruiters & Corporate HR",
    desc: "Teams attracting, recruiting, developing and retaining early-career talent.",
    to: "/graduate-recruiters",
    tone: "dark" as const,
  },
];

const values = [
  {
    icon: <HeartHandshake className="size-5" />,
    title: "Genuine Connection",
    desc: "We build real relationships between people, education and industry.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Integrity",
    desc: "We publish only verified information and never overstate outcomes.",
  },
  {
    icon: <Lightbulb className="size-5" />,
    title: "Practical Impact",
    desc: "Everything we do is designed to create real, usable value.",
  },
  {
    icon: <Sparkles className="size-5" />,
    title: "Continuous Growth",
    desc: "We help individuals and organizations keep developing together.",
  },
];

function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      <Section bg="cloud">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-eyebrow text-teal-700">About CareerMesh Lanka</p>
              <h1 className="mt-3 text-display text-navy-900">
                Connecting Talent, Education & Industry.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {siteConfig.name} is an integrated graduate employability and talent solutions
                business. We connect four stakeholder groups — students, educational institutions,
                employers and graduate recruiters — through managed professional services and
                ClientFlow-powered business technology.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                CareerMesh connects the people, creates the opportunities and helps organizations
                manage their talent operations through ClientFlow.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ImageSlot
                ratio="4/3"
                tone="teal"
                label="Image slot"
                brief="Team collaboration in a bright Sri Lankan office — natural light, teal-leaning color grade"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission / Vision / Purpose */}
      <Section bg="white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What Drives Us"
            title="Our Mission, Vision & Purpose."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card tone="mint" hover className="flex h-full flex-col gap-3">
              <IconTile icon={<Target className="size-5" />} tone="teal" />
              <h3 className="text-lg font-bold text-navy-900">Our Mission</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To create stronger connections between education, emerging talent and industry
                through meaningful career services, strategic partnerships and technology-enabled
                operations.
              </p>
            </Card>
            <Card tone="ice" hover className="flex h-full flex-col gap-3">
              <IconTile icon={<Compass className="size-5" />} tone="navy" />
              <h3 className="text-lg font-bold text-navy-900">Our Vision</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To become a trusted talent and employability network that helps individuals and
                organizations grow together.
              </p>
            </Card>
            <Card tone="cloud" hover className="flex h-full flex-col gap-3">
              <IconTile icon={<Sparkles className="size-5" />} tone="teal" />
              <h3 className="text-lg font-bold text-navy-900">Our Purpose</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To help every student move from academic potential to professional success — and to
                help every organization build the workforce of its future.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section bg="cloud">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built Around a Simple Idea."
                description="Education and employment shouldn't be disconnected. CareerMesh exists to bridge that gap — with professional services on one side and business technology on the other."
              />
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Our story section is intentionally a placeholder: company history, registration
                details and milestones will be supplied by the owner. We never publish invented
                history or achievements.
              </p>
            </div>
            <ImageSlot
              ratio="4/3"
              tone="navy"
              label="Image slot"
              brief="CareerMesh team planning session — whiteboard, natural office light"
            />
          </div>
        </Container>
      </Section>

      {/* Four-Stakeholder Network */}
      <Section bg="white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our Network"
            title="One Network. Four Stakeholder Groups."
            description="CareerMesh serves every side of the employability equation."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {stakeholders.map((s) => {
              const dark = s.tone === "dark";
              return (
                <Link key={s.title} to={s.to as never} className="group">
                  <Card tone={s.tone} hover className="flex h-full flex-col gap-3">
                    <IconTile icon={s.icon} tone={dark ? "cyan" : "teal"} />
                    <h3
                      className={
                        dark ? "text-lg font-bold text-white" : "text-lg font-bold text-navy-900"
                      }
                    >
                      {s.title}
                    </h3>
                    <p className={dark ? "text-sm text-white/70" : "text-sm text-muted-foreground"}>
                      {s.desc}
                    </p>
                    <span
                      className={`mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold ${dark ? "text-teal-500 group-hover:text-teal-400" : "text-teal-700 group-hover:text-teal-800"}`}
                    >
                      Learn more <ArrowRight className="size-4" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Technology Advantage */}
      <Section bg="cyan">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-eyebrow text-cyan-800">Our Technology Advantage</p>
              <h2 className="mt-3 text-h2 text-navy-900">
                Services Plus a Business Management Platform.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                CareerMesh provides more than connections. Through ClientFlow CRM, participating
                organizations receive dedicated, configured business management workspaces —
                streamlining operations, automating communication and managing talent relationships.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-800 hover:text-cyan-600"
                >
                  Explore the platform <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card tone="white" hover>
                <Layers className="size-6 text-cyan-800" />
                <h3 className="mt-3 text-sm font-bold text-navy-900">Managed Services</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Internships, training, recruitment and development programs.
                </p>
              </Card>
              <Card tone="white" hover>
                <Cpu className="size-6 text-cyan-800" />
                <h3 className="mt-3 text-sm font-bold text-navy-900">ClientFlow Technology</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Dedicated CRM workspaces for participating organizations.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section bg="white">
        <Container>
          <SectionHeading align="center" eyebrow="Our Values" title="What We Stand For." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} tone="cloud" hover className="flex h-full flex-col gap-3">
                <IconTile icon={v.icon} tone="teal" />
                <h3 className="text-base font-bold text-navy-900">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind CareerMesh."
            description="Team profiles will be published as information is supplied and approved."
          />
          <div className="mt-12">
            {team.length === 0 ? (
              <EmptyState
                title="Team profiles coming soon"
                description="We don't publish invented names, titles or biographies. Real team profiles will appear here once approved for publication."
                icon={<Users className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((m) => (
                  <Card key={m.name} tone="white" hover>
                    <h3 className="text-base font-bold text-navy-900">{m.name}</h3>
                    <p className="text-sm text-teal-700">{m.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Work With Us"
        title="Let's Build Better Career Opportunities Together."
        description="Whether you're a student, institution, employer or recruiter — we're here to help you move forward."
        ctas={[
          { label: "Contact Us", to: "/contact" },
          { label: "Our Approach", to: "/our-approach" },
        ]}
      />
    </>
  );
}

// Network icon reserved for future network visual on this page
void Network;
