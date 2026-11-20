import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card, IconTile } from "@/components/shared/Card";
import { getIcon } from "@/lib/icons";
import { hostBenefitsDetailed } from "@/data/employers";

export const Route = createFileRoute("/employers/benefits")({
  head: () => ({
    meta: [
      { title: "Benefits of Hiring Interns — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Talent discovery, project contribution, skills-based matching, professional development and industry engagement through intern hiring with CareerMesh.",
      },
      { property: "og:title", content: "Benefits of Hiring Interns — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Talent discovery, project contribution, skills-based matching, professional development and industry engagement through intern hiring with CareerMesh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BenefitsPage,
});

function BenefitsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Benefits of Hiring Interns" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Benefits of Hiring Interns."
        description="Hiring interns through CareerMesh brings real, measurable value to your organization — from talent discovery to project contribution and industry engagement."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="What You Gain"
            title="Six Benefits for Your Organization."
            description="Each benefit is designed to give your team genuine value while building your future talent pipeline."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hostBenefitsDetailed.map((b) => {
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
        </Container>
      </Section>
      <Section bg="cloud">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
              <h3 className="text-h3 text-navy-900">Talent Discovery</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Interns give you structured, low-risk exposure to motivated candidates. Through a
                real placement, you discover capability, work ethic and cultural fit before making
                longer-term hiring decisions.
              </p>
              <Link
                to="/employers/our-talent"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Meet our talent approach <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
              <h3 className="text-h3 text-navy-900">Project Contribution</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Interns contribute real work to active projects and operations. With the right
                mentorship, they reduce workload on your team while gaining the experience they need
                to grow.
              </p>
              <Link
                to="/employers/recruitment-services"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Explore recruitment services <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Get Started"
        title="Hire Emerging Talent."
        description="Submit a hiring requirement and access prepared, motivated candidates through CareerMesh."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "View Pricing", to: "/employers/pricing" },
        ]}
      />
    </>
  );
}
