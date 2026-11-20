import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Network,
  Layers,
  Cpu,
  Sparkles,
  GraduationCap,
  School,
  Briefcase,
  Users,
  CheckCircle2,
  BookOpen,
  Zap,
  Workflow,
  BarChart3,
  MessageSquare,
  CalendarClock,
  Bot,
} from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTAButton, CTAGroup } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { EmptyState } from "@/components/shared/EmptyState";
import { SampleBadge } from "@/components/shared/Badge";
import { TalentNetwork } from "@/components/homepage/TalentNetwork";
import { EcosystemDiagram } from "@/components/homepage/EcosystemDiagram";
import { DashboardMockup } from "@/components/homepage/DashboardMockup";
import { getIcon } from "@/lib/icons";
import { siteConfig } from "@/config/site";
import { industries } from "@/data/industries";
import { resources } from "@/data/content";
import { testimonials } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — ${siteConfig.tagline}` },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: `${siteConfig.name} — ${siteConfig.tagline}` },
      { property: "og:description", content: siteConfig.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Section 1: Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-mint">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: "radial-gradient(60% 50% at 75% 15%, var(--color-teal-50), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-teal-700">A Connected Talent & Employability Network</p>
            <h1 className="mt-4 text-display text-navy-900">
              Connecting Talent, Education & Industry.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We bridge the gap between education and employment by connecting students, educational
              institutions, employers and graduate recruiters through professional career services,
              industry partnerships and powerful business technology.
            </p>
            <CTAGroup className="mt-8">
              <CTAButton to="/students-graduates" variant="primary" size="lg">
                Explore Our Solutions <ArrowRight className="size-4" />
              </CTAButton>
              <CTAButton to="/contact" variant="secondary" size="lg">
                Become a Partner
              </CTAButton>
            </CTAGroup>
            <p className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-navy-900">{siteConfig.technologyBadge}</span> —
              dedicated business management workspaces for participating organizations.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-e2)] md:p-8">
              <TalentNetwork />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Section 2: Four Customer Pathways ---------- */
const pathways = [
  {
    title: "Students & Graduates",
    desc: "Build your confidence, develop practical skills and discover opportunities that help you move toward a successful career.",
    cta: "Explore Student Opportunities",
    to: "/students-graduates",
    tone: "mint" as const,
    icon: <GraduationCap className="size-6" />,
  },
  {
    title: "Education Providers",
    desc: "Strengthen graduate employability through customized programs, industry connections and internship management solutions.",
    cta: "Explore Education Partnerships",
    to: "/education-providers",
    tone: "ice" as const,
    icon: <School className="size-6" />,
  },
  {
    title: "Employers",
    desc: "Access emerging talent, recruit interns and build stronger connections with future professionals.",
    cta: "Find Emerging Talent",
    to: "/employers",
    tone: "cloud" as const,
    icon: <Briefcase className="size-6" />,
  },
  {
    title: "Graduate Recruiters",
    desc: "Attract, recruit, develop and retain early-career talent through structured graduate talent solutions.",
    cta: "Explore Graduate Solutions",
    to: "/graduate-recruiters",
    tone: "dark" as const,
    icon: <Users className="size-6" />,
  },
];

function Pathways() {
  return (
    <Section bg="white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="One Network"
          title="One Network. Four Ways to Grow."
          description="Discover how CareerMesh supports every stage of the journey from education to employment."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pathways.map((p) => {
            const dark = p.tone === "dark";
            return (
              <Card key={p.title} tone={p.tone} hover>
                <div className="flex h-full flex-col gap-4">
                  <IconTile icon={p.icon} tone={dark ? "cyan" : "teal"} />
                  <h3 className={dark ? "text-h3 text-white" : "text-h3"}>{p.title}</h3>
                  <p className={dark ? "text-white/75" : "text-muted-foreground"}>{p.desc}</p>
                  <Link
                    to={p.to as never}
                    className={`mt-auto inline-flex items-center gap-1 text-sm font-semibold ${dark ? "text-teal-500 hover:text-teal-400" : "text-teal-700 hover:text-teal-800"}`}
                  >
                    {p.cta} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Section 3: Our Business Solutions ---------- */
const solutions = [
  {
    title: "Professional Internship Programs",
    desc: "Structured internships that give students real-world experience and connect employers with emerging talent.",
    to: "/students/internship-programs",
    icon: <Briefcase className="size-5" />,
  },
  {
    title: "University Employability Solutions",
    desc: "Customized programs and industry partnerships that strengthen graduate employability for institutions.",
    to: "/education-providers",
    icon: <School className="size-5" />,
  },
  {
    title: "Employer Recruitment Services",
    desc: "Intern recruitment, candidate shortlisting and placement coordination for hiring organizations.",
    to: "/employers/recruitment-services",
    icon: <Users className="size-5" />,
  },
  {
    title: "Graduate Talent Management",
    desc: "Attract, recruit, develop and retain early-career talent through structured graduate solutions.",
    to: "/graduate-recruiters",
    icon: <Network className="size-5" />,
  },
];

function BusinessSolutions() {
  return (
    <Section bg="cloud">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Solutions That Connect Every Stage of the Career Journey."
          description="CareerMesh provides managed professional services across the full talent lifecycle — from student preparation to graduate retention."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {solutions.map((s) => (
            <Card key={s.title} tone="white" hover>
              <div className="flex h-full flex-col gap-3">
                <IconTile icon={s.icon} tone="teal" />
                <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  to={s.to as never}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
                >
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Section 4: Ecosystem ---------- */
function Ecosystem() {
  return (
    <Section bg="white">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From Academic Potential to Professional Opportunity."
          description="CareerMesh connects the people and manages the relationships across every stage — from study to career."
        />
        <div className="mt-12">
          <EcosystemDiagram />
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Section 5: Our Programs ---------- */
const programs = [
  {
    title: "Professional Internships",
    desc: "Real-world placements across IT, finance, engineering, business and more.",
    to: "/students/internship-programs",
  },
  {
    title: "Industry Group Projects",
    desc: "Structured team projects connecting students with real industry challenges.",
    to: "/education/industry-projects",
  },
  {
    title: "Career Readiness Workshops",
    desc: "Focused preparation for interviews, communication and workplace skills.",
    to: "/students/career-development-toolkit",
  },
  {
    title: "Employability Training",
    desc: "Work-readiness modules: communication, etiquette, teamwork and leadership.",
    to: "/education/employability-training",
  },
  {
    title: "Graduate Development Programs",
    desc: "Onboarding, learning journeys and retention support for new graduates.",
    to: "/graduate-recruiters/development-retention",
  },
  {
    title: "Recruitment & Selection Support",
    desc: "End-to-end recruitment coordination for employers and recruiters.",
    to: "/employers/recruitment-services",
  },
];

function Programs() {
  return (
    <Section bg="cloud">
      <Container>
        <SectionHeading eyebrow="Our Programs" title="Programs for Every Stage of the Journey." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Card key={p.title} tone="white" hover>
              <h3 className="text-base font-bold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <Link
                to={p.to as never}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Learn More <ArrowRight className="size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Section 6: ClientFlow Technology ---------- */
const clientflowFeatures = [
  { icon: <Users className="size-5" />, label: "Student & Candidate CRM" },
  { icon: <Network className="size-5" />, label: "Employer Relationship Management" },
  { icon: <Layers className="size-5" />, label: "Internship & Recruitment Pipelines" },
  { icon: <MessageSquare className="size-5" />, label: "Automated Follow-ups" },
  { icon: <Workflow className="size-5" />, label: "Communication Management" },
  { icon: <CalendarClock className="size-5" />, label: "Interview Scheduling" },
  { icon: <BarChart3 className="size-5" />, label: "Reporting & Analytics" },
  { icon: <Bot className="size-5" />, label: "Configured AI Assistance" },
];

function ClientFlow() {
  return (
    <Section bg="cyan">
      <Container>
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
          <div>
            <p className="text-eyebrow text-cyan-800">Powered by ClientFlow CRM</p>
            <h2 className="mt-3 text-h2 text-navy-900">
              More Than Connections. Your Own Business Management Platform.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We understand that building strong relationships with students, employers and
              educational institutions requires more than spreadsheets and disconnected
              communication tools. Through ClientFlow CRM, we provide participating organizations
              with dedicated business management workspaces that help streamline operations,
              automate communication and manage their talent relationships.
            </p>
            <CTAGroup className="mt-8">
              <CTAButton to="/platform" variant="cyan" size="lg">
                Discover ClientFlow <ArrowRight className="size-4" />
              </CTAButton>
              <CTAButton to="/platform/book-demo" variant="secondary" size="lg">
                Book a Demo
              </CTAButton>
            </CTAGroup>
          </div>
          <div>
            <DashboardMockup />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clientflowFeatures.map((f) => (
            <Card key={f.label} tone="white" hover>
              <IconTile icon={f.icon} tone="cyan" />
              <p className="mt-3 text-sm font-semibold text-navy-900">{f.label}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Section 7: Partnership Journeys ---------- */
const journeys = [
  {
    audience: "Students",
    tone: "mint" as const,
    steps: ["Register", "Prepare", "Connect", "Gain Experience"],
    to: "/students/register",
  },
  {
    audience: "Universities",
    tone: "ice" as const,
    steps: ["Consultation", "Partnership", "Program Delivery", "Reporting"],
    to: "/education/partner-with-us",
  },
  {
    audience: "Employers",
    tone: "cloud" as const,
    steps: ["Submit Requirement", "Candidate Matching", "Interview", "Placement"],
    to: "/employers/hire-an-intern",
  },
  {
    audience: "Recruiters",
    tone: "dark" as const,
    steps: ["Strategy", "Attraction", "Recruitment", "Development"],
    to: "/graduate-recruiters/contact",
  },
];

function Journeys() {
  return (
    <Section bg="white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The Journey"
          title="The Complete Partnership Journey."
          description="Every stakeholder follows a clear, supported path from first contact to outcome."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {journeys.map((j) => {
            const dark = j.tone === "dark";
            return (
              <Card key={j.audience} tone={j.tone}>
                <div className="flex items-center justify-between">
                  <h3
                    className={
                      dark ? "text-lg font-bold text-white" : "text-lg font-bold text-navy-900"
                    }
                  >
                    {j.audience}
                  </h3>
                  <Link
                    to={j.to as never}
                    className={`text-sm font-semibold ${dark ? "text-teal-500 hover:text-teal-400" : "text-teal-700 hover:text-teal-800"}`}
                  >
                    Start →
                  </Link>
                </div>
                <ol className="mt-4 flex flex-wrap items-center gap-2">
                  {j.steps.map((s, i) => (
                    <li key={s} className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${dark ? "bg-white/10 text-white" : "bg-card text-navy-900"}`}
                      >
                        <span className={dark ? "text-teal-500" : "text-teal-700"}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s}
                      </span>
                      {i < j.steps.length - 1 && (
                        <ArrowRight
                          className={`size-3.5 ${dark ? "text-white/40" : "text-muted-foreground/50"}`}
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Section 8: Industry Network ---------- */
function IndustryNetwork() {
  return (
    <Section bg="cloud">
      <Container>
        <SectionHeading
          eyebrow="Industry Network"
          title="Talent Across Professional Disciplines."
          description="We connect students and employers across a broad range of professional fields."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {industries.map((ind) => {
            const Icon = getIcon(ind.icon);
            return (
              <Card key={ind.slug} tone="white" hover className="flex items-center gap-3">
                <IconTile icon={<Icon className="size-5" />} tone="teal" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-navy-900">{ind.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{ind.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Section 9: Success Stories ---------- */
function SuccessStories() {
  return (
    <Section bg="white">
      <Container>
        <SectionHeading
          eyebrow="Success Stories"
          title="Stories From Our Network."
          description="Real experiences from students, education partners and employers in the CareerMesh network."
        />
        <div className="mt-12">
          {testimonials.length === 0 ? (
            <EmptyState
              title="No stories published yet"
              description="We share genuine, approved stories from our network. If you're a partner or student who'd like to share your experience, we'd love to hear from you."
              ctaLabel="Share your story"
              ctaTo="/contact"
              icon={<Sparkles className="size-6" />}
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <Card key={t.slug} tone="white">
                  <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.organization}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Section 10: Why CareerMesh ---------- */
const strengths = [
  {
    icon: <Network className="size-6" />,
    title: "Connected Industry Network",
    desc: "A single network linking students, institutions, employers and recruiters.",
  },
  {
    icon: <Layers className="size-6" />,
    title: "End-to-End Employability Support",
    desc: "From preparation and matching to placement and completion.",
  },
  {
    icon: <Briefcase className="size-6" />,
    title: "Strategic Organizational Partnerships",
    desc: "Customized programs adapted to each partner's goals and cohort.",
  },
  {
    icon: <Cpu className="size-6" />,
    title: "ClientFlow-Powered Technology",
    desc: "Dedicated CRM workspaces that streamline and automate operations.",
  },
];

function WhyCareerMesh() {
  return (
    <Section bg="cloud">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why CareerMesh"
          title="Four Reasons Organizations Choose Us."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <Card key={s.title} tone="white" hover>
              <IconTile icon={s.icon} tone="teal" />
              <h3 className="mt-4 text-base font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Section 11: Resources ---------- */
function Resources() {
  const latest = resources.slice(0, 3);
  return (
    <Section bg="white">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Resources"
            title="Guides & Career Insights."
            description="Practical advice for students, employers and education partners."
          />
          <Link
            to="/resources"
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            View all resources <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latest.map((r) => (
            <Link key={r.slug} to="/resources/$slug" params={{ slug: r.slug }} className="group">
              <Card tone="white" hover>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                    <BookOpen className="size-3" /> {r.category}
                  </span>
                  {r.isDemo && <SampleBadge label="Sample" />}
                </div>
                <h3 className="mt-3 text-base font-bold text-navy-900 group-hover:text-teal-700">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.excerpt}</p>
                <p className="mt-3 text-xs text-muted-foreground">{r.readingTime}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Pathways />
      <BusinessSolutions />
      <Ecosystem />
      <Programs />
      <ClientFlow />
      <Journeys />
      <IndustryNetwork />
      <SuccessStories />
      <WhyCareerMesh />
      <Resources />
      <CTASection
        eyebrow="Let's Build Together"
        title="Let's Build Better Career Opportunities Together."
        description="Whether you're a student, educational institution, employer or graduate recruitment professional, CareerMesh is here to help you move forward."
        ctas={[
          { label: "Join Our Network", to: "/students/register" },
          { label: "Become a Partner", to: "/contact" },
        ]}
      />
    </>
  );
}

export { CheckCircle2 };
