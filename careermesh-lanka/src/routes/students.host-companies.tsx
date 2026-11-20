import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Handshake, LifeBuoy } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BenefitGrid, RelatedLinks } from "@/components/students/BenefitGrid";
import { EmptyState } from "@/components/shared/EmptyState";
import { hostCompanyBenefits } from "@/data/students";
import { partners } from "@/data/content";

export const Route = createFileRoute("/students/host-companies")({
  head: () => ({
    meta: [
      { title: "Host Companies — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "How host companies work with CareerMesh: industry categories, benefits, mentorship expectations and placement responsibilities.",
      },
      { property: "og:title", content: "Host Companies — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "How host companies work with CareerMesh: industry categories, benefits, mentorship expectations and placement responsibilities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HostCompaniesPage,
});

function HostCompaniesPage() {
  const employerPartners = partners.filter((p) => p.audience === "employers");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Host Companies" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="How Host Companies Work with CareerMesh."
        description="Host organizations provide meaningful work, mentorship and a structured professional experience. We coordinate the relationship and support you throughout."
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="What Hosts Provide"
            title="A Structured, Supported Workplace Experience."
            description="Host companies commit to providing genuine learning opportunities under experienced professionals."
          />
          <BenefitGrid benefits={hostCompanyBenefits} columns={3} />
        </Container>
      </Section>

      <Section bg="mint">
        <Container>
          <SectionHeading
            eyebrow="Mentorship & Supervision"
            title="You Learn Under Experienced Professionals."
            description="Hosts provide mentorship and guidance, while CareerMesh coordinates and checks in throughout your placement."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <Users className="size-5" />,
                t: "Mentorship",
                d: "Learn under experienced professionals in your field.",
              },
              {
                icon: <Handshake className="size-5" />,
                t: "Meaningful Tasks",
                d: "Real work aligned to your field, not just busywork.",
              },
              {
                icon: <LifeBuoy className="size-5" />,
                t: "Ongoing Support",
                d: "CareerMesh coordinates and checks in throughout.",
              },
            ].map((m) => (
              <div
                key={m.t}
                className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  {m.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-900">{m.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Our Host Network"
            title="Approved Host Company Partners."
            description="We only display approved, confirmed host company partners — never fabricated names or logos."
          />
          <div className="mt-12">
            {employerPartners.length === 0 ? (
              <EmptyState
                title="No host company partners published yet"
                description="We're building our host company network. If your organization would like to host interns through CareerMesh, we'd love to talk."
                ctaLabel="Become a host company"
                ctaTo="/employers/hire-an-intern"
                icon={<Handshake className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {employerPartners.map((p) => (
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
          <div className="mt-8">
            <Link
              to="/employers"
              className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              For employers <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <RelatedLinks
        heading="Keep Exploring"
        links={[
          { label: "Internship Programs", to: "/students/internship-programs" },
          { label: "Program Structure", to: "/students/program-structure" },
          { label: "Program Inclusions", to: "/students/program-inclusions" },
          { label: "Register Your Interest", to: "/students/register" },
        ]}
      />

      <CTASection
        eyebrow="Get Started"
        title="Ready to Join a Host Company?"
        description="Register your interest and we'll guide you through preparation and opportunity matching."
        ctas={[{ label: "Register Now", to: "/students/register" }]}
      />
    </>
  );
}
