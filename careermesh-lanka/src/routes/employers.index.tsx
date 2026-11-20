import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTAButton, CTAGroup } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { EmptyState } from "@/components/shared/EmptyState";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getIcon } from "@/lib/icons";
import { whyHostBenefits, recruitmentServices, recruitmentCrmFeatures } from "@/data/employers";
import { disciplineGroups } from "@/data/industries";
import { testimonials, caseStudies, partners } from "@/data/content";
import { getFaqsFor } from "@/data/faqs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { HiringProcess } from "@/components/employers/EmployerComponents";

export const Route = createFileRoute("/employers/")({
  head: () => ({
    meta: [
      { title: "Employers — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Discover emerging talent and develop your future workforce with CareerMesh intern and graduate recruitment services.",
      },
      { property: "og:title", content: "Employers — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Discover emerging talent and develop your future workforce with CareerMesh intern and graduate recruitment services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmployersPage,
});

function EmployersPage() {
  const employerPartners = partners.filter((p) => p.audience === "employers");
  const empTestimonials = testimonials.filter((t) => t.audience === "employers");
  const empCases = caseStudies.filter((c) => c.audience === "employers");
  const empFaqs = getFaqsFor("employers").slice(0, 4);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Employers" }]} />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Discover Emerging Talent. Develop Your Future Workforce."
        description="Access prepared candidates, recruit interns and build stronger connections with future professionals — coordinated through ClientFlow so your hiring stays organised."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern", variant: "primary" },
          { label: "How It Works", to: "/employers/how-it-works", variant: "secondary" },
        ]}
        visual={
          <div className="flex h-full flex-col justify-center gap-4 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-e2)]">
            <div className="flex items-center gap-3">
              <IconTile icon={<Briefcase className="size-6" />} tone="teal" />
              <div>
                <p className="text-sm font-bold text-navy-900">Your Hiring Journey</p>
                <p className="text-xs text-muted-foreground">
                  Requirement → Matching → Interview → Placement
                </p>
              </div>
            </div>
            <ol className="space-y-2">
              {["Submit Requirement", "Candidate Matching", "Interview", "Placement"].map(
                (s, i) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-navy-900">
                    <span className="flex size-6 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ),
              )}
            </ol>
          </div>
        }
      />

      {/* Why Work With CareerMesh */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Why Host Interns"
            title="Why Work With CareerMesh?"
            description="Access emerging talent, gain fresh perspectives and build your future recruitment pipeline."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyHostBenefits.map((b) => {
              const Icon = getIcon(b.icon);
              return (
                <Card key={b.title} tone="cloud" hover className="flex h-full flex-col gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="teal" />
                  <h3 className="text-base font-bold text-navy-900">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-8">
            <CTAButton to="/employers/why-host-interns" variant="secondary" size="md">
              Learn more about hosting interns <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Employer Network */}
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Our Employer Network"
            title="Approved Employer Partners."
            description="We only display approved, confirmed employer partners — never fabricated names or logos."
          />
          <div className="mt-12">
            {employerPartners.length === 0 ? (
              <EmptyState
                title="No employer partners published yet"
                description="We're building our employer network. If your organization would like to hire interns through CareerMesh, we'd love to talk."
                ctaLabel="Hire an intern"
                ctaTo="/employers/hire-an-intern"
                icon={<Briefcase className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {employerPartners.map((p) => (
                  <Card key={p.name} tone="white" hover={false}>
                    <p className="text-base font-bold text-navy-900">{p.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.category}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Our Recruitment Process."
            description="A clear six-step process from requirement to placement."
          />
          <HiringProcess />
          <div className="mt-8">
            <CTAButton to="/employers/how-it-works" variant="secondary" size="md">
              See the full process <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Available Talent Disciplines */}
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Available Disciplines"
            title="Talent Across Professional Fields."
            description="We source candidates across IT, engineering, finance, business, marketing and more."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {disciplineGroups.map((g) => {
              const Icon = getIcon(g.icon);
              return (
                <Card key={g.category} tone="white" hover className="flex h-full flex-col gap-2">
                  <IconTile icon={<Icon className="size-5" />} tone="teal" />
                  <h3 className="text-base font-bold text-navy-900">{g.category}</h3>
                  <p className="text-sm text-muted-foreground">
                    {g.disciplines.slice(0, 3).join(", ")}
                    {g.disciplines.length > 3 ? " and more" : ""}
                  </p>
                </Card>
              );
            })}
          </div>
          <div className="mt-8">
            <CTAButton to="/employers/disciplines" variant="secondary" size="md">
              View all disciplines <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Recruitment Services */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Recruitment Services"
            title="Full Recruitment Support."
            description="From intern recruitment to graduate hiring — we coordinate the process so you can focus on selecting."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recruitmentServices.map((s) => (
              <Card key={s.title} tone="cloud" hover className="flex h-full flex-col gap-2">
                <h3 className="text-base font-bold text-navy-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton to="/employers/recruitment-services" variant="secondary" size="md">
              Explore recruitment services <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* ClientFlow Recruitment CRM */}
      <Section bg="cyan">
        <Container>
          <SectionHeading
            eyebrow="Powered by ClientFlow CRM"
            title="Your Own Recruitment CRM Workspace."
            description="Participating employers receive a dedicated ClientFlow workspace for candidates, hiring pipelines and communication."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recruitmentCrmFeatures.map((f) => {
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
            <CTAButton to="/platform/employer-crm" variant="cyan" size="md">
              Discover Employer CRM <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Employers Say."
            description="Genuine, approved testimonials from our employer partners."
          />
          <div className="mt-12">
            {empTestimonials.length === 0 ? (
              <EmptyState
                title="No testimonials published yet"
                description="We share genuine, approved testimonials from our employer partners. If you'd like to share your experience, we'd love to hear from you."
                ctaLabel="Share your experience"
                ctaTo="/contact"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {empTestimonials.map((t) => (
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

      {/* Case Studies */}
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Employer Case Studies."
            description="Verified case studies from our employer partnerships."
          />
          <div className="mt-12">
            {empCases.length === 0 ? (
              <EmptyState
                title="No case studies published yet"
                description="We share verified case studies from our employer partnerships. Hire through CareerMesh to build outcomes worth sharing."
                ctaLabel="Hire an intern"
                ctaTo="/employers/hire-an-intern"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {empCases.map((c) => (
                  <Card key={c.slug} tone="white" hover>
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
              <SectionHeading eyebrow="Employer FAQs" title="Common Questions." />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Questions about hiring, services or pricing?
              </p>
              <div className="mt-6">
                <CTAButton to="/employers/faqs" variant="secondary" size="md">
                  View all FAQs <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion groups={empFaqs} searchable={false} />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Hiring Inquiry"
        title="Ready to Hire?"
        description="Submit a hiring requirement and access prepared candidates through CareerMesh."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "View Pricing", to: "/employers/pricing" },
        ]}
      />
    </>
  );
}
