import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  Compass,
  Network,
  LifeBuoy,
  BookOpen,
} from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTAButton, CTAGroup } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { EmptyState } from "@/components/shared/EmptyState";
import { ProgramCard } from "@/components/students/ProgramCard";
import { StudentJourney } from "@/components/students/InternshipTimeline";
import { programCategories } from "@/data/programs";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/content";
import { getFaqsFor } from "@/data/faqs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { getIcon } from "@/lib/icons";

export const Route = createFileRoute("/students-graduates")({
  head: () => ({
    meta: [
      { title: "Students & Graduates — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Your future career starts with real-world experience. Explore internship programs, career development and opportunities with CareerMesh.",
      },
      { property: "og:title", content: "Students & Graduates — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Your future career starts with real-world experience. Explore internship programs, career development and opportunities with CareerMesh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentsGraduatesPage,
});

const whyCareerMesh = [
  {
    icon: <Compass className="size-5" />,
    title: "Career Guidance",
    desc: "Personalised consultation to help you position yourself.",
  },
  {
    icon: <Network className="size-5" />,
    title: "Industry Relationships",
    desc: "Connections with employers across professional fields.",
  },
  {
    icon: <LifeBuoy className="size-5" />,
    title: "Ongoing Support",
    desc: "Progress monitoring and check-ins throughout your program.",
  },
  {
    icon: <BookOpen className="size-5" />,
    title: "Structured Preparation",
    desc: "A clear pathway from registration to placement.",
  },
];

function StudentsGraduatesPage() {
  const studentFaqs = getFaqsFor("students").slice(0, 4);
  const featuredPrograms = programCategories.slice(0, 6);

  return (
    <>
      <PageHero
        tone="students"
        eyebrow="For Students & Graduates"
        title="Your Future Career Starts with Real-World Experience."
        description="Build your confidence, develop practical skills and discover opportunities that help you move toward a successful career — with structured preparation, industry connections and ongoing support."
        ctas={[
          { label: "Register Your Interest", to: "/students/register", variant: "primary" },
          { label: "Explore Programs", to: "/students/internship-programs", variant: "secondary" },
        ]}
        visual={
          <div className="flex h-full flex-col justify-center gap-4 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-e2)]">
            <div className="flex items-center gap-3">
              <IconTile icon={<GraduationCap className="size-6" />} tone="teal" />
              <div>
                <p className="text-sm font-bold text-navy-900">Your Career Journey</p>
                <p className="text-xs text-muted-foreground">Structured, supported, step by step</p>
              </div>
            </div>
            <ol className="space-y-2">
              {["Register", "Prepare", "Connect", "Gain Experience"].map((s, i) => (
                <li key={s} className="flex items-center gap-2 text-sm text-navy-900">
                  <span className="flex size-6 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        }
      />

      {/* Why CareerMesh */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Why CareerMesh"
            title="Structured Support for Your Career Journey."
            description="We don't just match you to opportunities — we prepare, guide and support you along the way."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCareerMesh.map((w) => (
              <Card key={w.title} tone="mint" hover className="flex h-full flex-col gap-3">
                <IconTile icon={w.icon} tone="teal" />
                <h3 className="text-base font-bold text-navy-900">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Professional Internships Matter */}
      <Section bg="mint">
        <Container>
          <SectionHeading
            eyebrow="Why Internships Matter"
            title="Real Experience. Real Confidence. Real Direction."
            description="A professional internship bridges the gap between study and work — giving you the experience employers value."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "Briefcase",
                t: "Practical Experience",
                d: "Apply your learning in a real workplace.",
              },
              {
                icon: "Network",
                t: "Industry Networking",
                d: "Build connections that support your future.",
              },
              {
                icon: "Sparkles",
                t: "Career Confidence",
                d: "Grow through real responsibilities.",
              },
            ].map((b) => {
              const Icon = getIcon(b.icon);
              return (
                <Card key={b.t} tone="white" hover className="flex h-full flex-col gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="teal" />
                  <h3 className="text-base font-bold text-navy-900">{b.t}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-8">
            <CTAButton to="/students/why-internship" variant="secondary" size="md">
              Learn why internships matter <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Our Internship Programs */}
      <Section bg="white">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Internship Programs"
              title="Explore Programs by Field."
              description="Choose a field to see what you can learn, suitable backgrounds, skills developed and how to register interest."
            />
            <Link
              to="/students/internship-programs"
              className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              View all programs <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Available Industry Areas */}
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Industry Areas"
            title="Talent Across Professional Disciplines."
            description="We connect students with opportunities across a broad range of professional fields."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {industries.map((ind) => {
              const Icon = getIcon(ind.icon);
              return (
                <Card key={ind.slug} tone="white" hover className="flex items-center gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="teal" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-navy-900">{ind.title}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Host Company Network */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Host Company Network"
            title="How Host Companies Work with CareerMesh."
            description="Host organizations provide meaningful work, mentorship and a structured professional experience."
          />
          <div className="mt-8">
            <CTAGroup>
              <CTAButton to="/students/host-companies" variant="primary" size="md">
                Learn about host companies <ArrowRight className="size-4" />
              </CTAButton>
              <CTAButton to="/employers" variant="secondary" size="md">
                For employers
              </CTAButton>
            </CTAGroup>
          </div>
        </Container>
      </Section>

      {/* Internship Preparation */}
      <Section bg="mint">
        <Container>
          <SectionHeading
            eyebrow="Internship Preparation"
            title="We Prepare You Before You Start."
            description="From CV preparation to interview practice — we help you feel ready for professional opportunities."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "CV Preparation", d: "A clear, professional CV." },
              { t: "Interview Preparation", d: "Practice and guidance for employer interviews." },
              { t: "Career Development", d: "Modules to build workplace readiness." },
              { t: "Profile Review", d: "A consultation to position yourself well." },
            ].map((p) => (
              <Card key={p.t} tone="white" hover className="flex h-full flex-col gap-2">
                <h3 className="text-base font-bold text-navy-900">{p.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton to="/students/career-development-toolkit" variant="secondary" size="md">
              Explore the career toolkit <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Student Success Stories */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Student Success Stories"
            title="Stories From Our Students."
            description="Real experiences from students in the CareerMesh network."
          />
          <div className="mt-12">
            {testimonials.filter((t) => t.audience === "students").length === 0 ? (
              <EmptyState
                title="No student stories published yet"
                description="We share genuine, approved stories from our students. If you'd like to share your experience, we'd love to hear from you."
                ctaLabel="Share your story"
                ctaTo="/contact"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-3">
                {testimonials
                  .filter((t) => t.audience === "students")
                  .map((t) => (
                    <Card key={t.slug} tone="white">
                      <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                      <p className="mt-4 text-sm font-semibold text-navy-900">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </Card>
                  ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Program Journey */}
      <Section bg="cloud">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Program Journey"
            title="Your Step-by-Step Path."
            description="A clear, supported journey from registration to completion."
          />
          <div className="mt-12">
            <StudentJourney />
          </div>
          <div className="mt-8 text-center">
            <CTAButton to="/students/program-structure" variant="secondary" size="md">
              See the full program structure <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Student FAQs preview */}
      <Section bg="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Student FAQs" title="Common Questions." />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Have a question about registration, eligibility, fees or what to expect?
              </p>
              <div className="mt-6">
                <CTAButton to="/students/faqs" variant="secondary" size="md">
                  View all FAQs <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion groups={studentFaqs} searchable={false} />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Get Started"
        title="Ready to Begin Your Career Journey?"
        description="Register your interest today and take the first step toward real-world professional experience."
        ctas={[
          { label: "Register Now", to: "/students/register" },
          { label: "Talk to Us", to: "/contact" },
        ]}
      />
    </>
  );
}
