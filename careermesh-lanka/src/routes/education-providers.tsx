import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, School, Workflow, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTAButton, CTAGroup } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { EmptyState } from "@/components/shared/EmptyState";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getIcon } from "@/lib/icons";
import {
  whyPartnerBenefits,
  educationNetworkCategories,
  employabilityPrograms,
  institutionCrmFeatures,
} from "@/data/education";
import { testimonials, caseStudies, partners } from "@/data/content";
import { getFaqsFor } from "@/data/faqs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export const Route = createFileRoute("/education-providers")({
  head: () => ({
    meta: [
      { title: "Education Providers — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Stronger industry connections and better graduate employability through CareerMesh partnerships, internship management and ClientFlow technology.",
      },
      { property: "og:title", content: "Education Providers — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Stronger industry connections and better graduate employability through CareerMesh partnerships, internship management and ClientFlow technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationProvidersPage,
});

function EducationProvidersPage() {
  const educationPartners = partners.filter((p) => p.audience === "education");
  const edTestimonials = testimonials.filter((t) => t.audience === "education");
  const edCases = caseStudies.filter((c) => c.audience === "education");
  const edFaqs = getFaqsFor("education").slice(0, 4);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Education Providers" }]} />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Stronger Industry Connections. Better Graduate Employability."
        description="CareerMesh supports educational institutions in delivering practical career development and structured industry experiences — coordinated through ClientFlow so your operations stay organised."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us", variant: "primary" },
          { label: "Explore Programs", to: "/education/programs", variant: "secondary" },
        ]}
        visual={
          <div className="flex h-full flex-col justify-center gap-4 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-e2)]">
            <div className="flex items-center gap-3">
              <IconTile icon={<School className="size-6" />} tone="navy" />
              <div>
                <p className="text-sm font-bold text-navy-900">Institution Partnership</p>
                <p className="text-xs text-muted-foreground">
                  Consultation → Partnership → Delivery → Reporting
                </p>
              </div>
            </div>
            <ol className="space-y-2">
              {["Consultation", "Partnership", "Program Delivery", "Reporting"].map((s, i) => (
                <li key={s} className="flex items-center gap-2 text-sm text-navy-900">
                  <span className="flex size-6 items-center justify-center rounded-full bg-navy-700 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        }
      />

      {/* Why Partner With CareerMesh */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="A Complete Employability Partner."
            description="We bring industry connections, structured coordination and technology so your institution can strengthen graduate outcomes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPartnerBenefits.map((b) => {
              const Icon = getIcon(b.icon);
              return (
                <Card key={b.title} tone="ice" hover className="flex h-full flex-col gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="navy" />
                  <h3 className="text-base font-bold text-navy-900">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Education Network */}
      <Section bg="ice">
        <Container>
          <SectionHeading
            eyebrow="Education Network"
            title="Who We Partner With."
            description="We work with a range of educational institutions across Sri Lanka."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {educationNetworkCategories.map((c) => {
              const Icon = getIcon(c.icon);
              return (
                <Card key={c.title} tone="white" hover className="flex h-full flex-col gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="navy" />
                  <h3 className="text-base font-bold text-navy-900">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-8">
            <CTAButton to="/education/our-partners" variant="secondary" size="md">
              View our network <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Our Programs */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Our Programs"
            title="Graduate Employability Programs."
            description="Customized solutions adapted to academic requirements, faculty objectives and industry needs."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {employabilityPrograms.map((p) => {
              const Icon = getIcon(p.icon);
              return (
                <Card key={p.title} tone="white" hover className="flex h-full flex-col gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="navy" />
                  <h3 className="text-lg font-bold text-navy-900">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-1 space-y-1.5">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 text-sm text-muted-foreground">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-navy-700"
                          aria-hidden="true"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
          <div className="mt-8">
            <CTAButton to="/education/programs" variant="secondary" size="md">
              Explore all programs <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Work Integrated Learning + Internship Placement Management */}
      <Section bg="ice">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionHeading
                eyebrow="Work Integrated Learning"
                title="Connecting Study with Industry."
                description="We help institutions embed real industry experience into the academic journey."
              />
              <div className="mt-6">
                <CTAButton to="/education/internship-placement" variant="secondary" size="md">
                  Internship placement management <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Internship Placement Management"
                title="End-to-End Coordination."
                description="From registration to completion, we manage the placement process so your faculty can focus on academics."
              />
              <div className="mt-6">
                <CTAButton to="/education/industry-projects" variant="secondary" size="md">
                  Industry group projects <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ClientFlow Institution CRM */}
      <Section bg="cyan">
        <Container>
          <SectionHeading
            eyebrow="Powered by ClientFlow CRM"
            title="Your Institution's Own CRM Workspace."
            description="Participating institutions receive a dedicated ClientFlow workspace configured for student records, employer relationships and internship pipelines."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {institutionCrmFeatures.map((f) => {
              const Icon = getIcon(f.icon);
              return (
                <Card key={f.title} tone="white" hover className="flex h-full flex-col gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="cyan" />
                  <h3 className="text-base font-bold text-navy-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-8">
            <CTAButton to="/platform/university-crm" variant="cyan" size="md">
              Discover University CRM <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Education Partnership Outcomes."
            description="Verified case studies from our education partnerships."
          />
          <div className="mt-12">
            {edCases.length === 0 ? (
              <EmptyState
                title="No case studies published yet"
                description="We share verified case studies from our education partnerships. Partner with us to build outcomes worth sharing."
                ctaLabel="Partner with us"
                ctaTo="/education/partner-with-us"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {edCases.map((c) => (
                  <Card key={c.slug} tone="white">
                    <p className="text-base font-bold text-navy-900">{c.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.summary}
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section bg="ice">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Partners Say."
            description="Genuine, approved testimonials from our education partners."
          />
          <div className="mt-12">
            {edTestimonials.length === 0 ? (
              <EmptyState
                title="No testimonials published yet"
                description="We share genuine, approved testimonials from our partners. If you'd like to share your experience, we'd love to hear from you."
                ctaLabel="Share your experience"
                ctaTo="/contact"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {edTestimonials.map((t) => (
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

      {/* FAQ preview */}
      <Section bg="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Education FAQs" title="Common Questions." />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Questions about partnerships, programs, reporting or ClientFlow access?
              </p>
              <div className="mt-6">
                <CTAButton to="/education/faqs" variant="secondary" size="md">
                  View all FAQs <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion groups={edFaqs} searchable={false} />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Partner With Us"
        title="Strengthen Your Graduate Employability."
        description="Let's discuss how a CareerMesh partnership can support your institution's goals."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "Talk to Us", to: "/contact" },
        ]}
      />
    </>
  );
}
