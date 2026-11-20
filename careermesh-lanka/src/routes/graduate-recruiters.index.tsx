import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Network } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { EmptyState } from "@/components/shared/EmptyState";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { getIcon } from "@/lib/icons";
import { whyRecruiterBenefits, graduateCrmFeatures } from "@/data/recruiters";
import { testimonials, caseStudies, partners } from "@/data/content";
import { getFaqsFor } from "@/data/faqs";
import { GraduateJourney, TalentSolutionCard } from "@/components/recruiters/RecruiterComponents";

export const Route = createFileRoute("/graduate-recruiters/")({
  head: () => ({
    meta: [
      { title: "Graduate Recruiters — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Attract, recruit, develop and retain tomorrow's talent through CareerMesh graduate talent solutions and ClientFlow-powered recruitment operations.",
      },
      { property: "og:title", content: "Graduate Recruiters — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Attract, recruit, develop and retain tomorrow's talent through CareerMesh graduate talent solutions and ClientFlow-powered recruitment operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GraduateRecruitersPage,
});

function GraduateRecruitersPage() {
  const recTestimonials = testimonials.filter((t) => t.audience === "recruiters");
  const recCases = caseStudies.filter((c) => c.audience === "recruiters");
  const recPartners = partners.filter((p) => p.audience === "recruiters");
  const recFaqs = getFaqsFor("recruiters").slice(0, 4);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Graduate Recruiters" }]} />
      <PageHero
        tone="recruiters"
        eyebrow="For Graduate Recruiters & Corporate HR"
        title="Attract, Recruit, Develop & Retain Tomorrow's Talent."
        description="CareerMesh provides strategic graduate talent services — from promotion and attraction through recruitment, development and retention — powered by ClientFlow CRM for your recruitment operations."
        ctas={[
          { label: "Talk to Us", to: "/graduate-recruiters/contact", variant: "onDark" },
          {
            label: "Our Approach",
            to: "/graduate-recruiters/our-approach",
            variant: "onDarkOutline",
          },
        ]}
        visual={
          <div className="flex h-full flex-col justify-center gap-4 rounded-xl border border-white/10 bg-navy-800 p-6 shadow-[var(--shadow-e2)]">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-teal-500/15 text-teal-500">
                <Users className="size-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Four-Stage Framework</p>
                <p className="text-xs text-white/60">Attract → Prepare → Recruit → Develop</p>
              </div>
            </div>
            <ol className="space-y-2">
              {[
                "Promotion & Attraction",
                "Pre-Graduate Programs",
                "Recruitment & Selection",
                "Development & Retention",
              ].map((s, i) => (
                <li key={s} className="flex items-center gap-2 text-sm text-white">
                  <span className="flex size-6 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-navy-900">
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
      <Section bg="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Why CareerMesh"
            title="Graduate Talent Expertise, Powered by ClientFlow."
            description="We bring deep focus on early-career talent, university relationships and structured development — coordinated through ClientFlow CRM."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyRecruiterBenefits.map((b) => (
              <TalentSolutionCard key={b.title} benefit={b} />
            ))}
          </div>
          <div className="mt-8">
            <CTAButton to="/graduate-recruiters/why-careermesh" variant="onDarkOutline" size="md">
              Learn more <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Our Approach — four-stage framework */}
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="A Four-Stage Strategic Framework."
            description="Each stage connects to the next — and each has a dedicated detail page."
          />
          <GraduateJourney />
          <div className="mt-8">
            <CTAButton to="/graduate-recruiters/our-approach" variant="secondary" size="md">
              Explore the full approach <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* ClientFlow Graduate Recruitment CRM */}
      <Section bg="cyan">
        <Container>
          <SectionHeading
            eyebrow="Powered by ClientFlow CRM"
            title="Your Own Graduate Recruitment CRM Workspace."
            description="Participating organizations receive a dedicated ClientFlow workspace for graduate talent, pipelines, campaigns and communication."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {graduateCrmFeatures.map((f) => {
              const Icon = getIcon(f.icon);
              return (
                <div
                  key={f.title}
                  className="flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-e2)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <CTAButton to="/platform/graduate-recruitment-crm" variant="cyan" size="md">
              Discover Graduate Recruitment CRM <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Corporate Program Case Studies."
            description="Verified case studies from our graduate recruitment partnerships."
          />
          <div className="mt-12">
            {recCases.length === 0 ? (
              <EmptyState
                title="No case studies published yet"
                description="We share verified case studies from our graduate recruitment partnerships. Partner with us to build outcomes worth sharing."
                ctaLabel="Talk to us"
                ctaTo="/graduate-recruiters/contact"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {recCases.map((c) => (
                  <div
                    key={c.slug}
                    className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]"
                  >
                    <p className="text-base font-bold text-navy-900">{c.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.summary}
                    </p>
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: c.slug }}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
                    >
                      Read case study <ArrowRight className="size-4" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Our Network */}
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Our Network"
            title="Approved Partner Organizations."
            description="We only display approved, confirmed partner organizations — never fabricated names or logos."
          />
          <div className="mt-12">
            {recPartners.length === 0 ? (
              <EmptyState
                title="No partner organizations published yet"
                description="We're building our graduate recruiter network. If your organization would like to partner with CareerMesh, we'd love to talk."
                ctaLabel="Talk to us"
                ctaTo="/graduate-recruiters/contact"
                icon={<Network className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recPartners.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]"
                  >
                    <p className="text-base font-bold text-navy-900">{p.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.category}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* FAQ preview */}
      <Section bg="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="FAQs" title="Common Questions." />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Questions about our graduate talent services or technology?
              </p>
              <div className="mt-6">
                <CTAButton to="/graduate-recruiters/faqs" variant="secondary" size="md">
                  View all FAQs <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion groups={recFaqs} searchable={false} />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Talk to Us"
        title="Let's Build Your Graduate Talent Pipeline."
        description="Whether you need attraction, recruitment, development or retention support — CareerMesh can help."
        ctas={[
          { label: "Request a Consultation", to: "/graduate-recruiters/contact" },
          { label: "Meet Our Team", to: "/graduate-recruiters/team" },
        ]}
      />
    </>
  );
}
