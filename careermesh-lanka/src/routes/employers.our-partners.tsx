import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card, IconTile } from "@/components/shared/Card";
import { EmptyState } from "@/components/shared/EmptyState";
import { getIcon } from "@/lib/icons";
import { disciplineGroups } from "@/data/industries";
import { partners } from "@/data/content";

export const Route = createFileRoute("/employers/our-partners")({
  head: () => ({
    meta: [
      { title: "Our Employer Network — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "The CareerMesh employer network of partner companies and organizations across Sri Lanka. We only display approved, confirmed partners.",
      },
      { property: "og:title", content: "Our Employer Network — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "The CareerMesh employer network of partner companies and organizations across Sri Lanka. We only display approved, confirmed partners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurPartnersPage,
});

function OurPartnersPage() {
  const employerPartners = partners.filter((p) => p.audience === "employers");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Our Employer Network" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Our Employer Network."
        description="We partner with organizations across a range of industries in Sri Lanka. We only display approved, confirmed employer partners — never fabricated names or logos."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Partner Categories"
            title="Industries We Work With."
            description="Our employer network spans the professional disciplines below. We match candidates to your requirements based on skills and field."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {disciplineGroups.map((g) => {
              const Icon = getIcon(g.icon);
              return (
                <Card key={g.category} tone="cloud" hover className="flex h-full flex-col gap-2">
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
        </Container>
      </Section>
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Confirmed Partners"
            title="Approved Employer Partners."
            description="We only display approved, confirmed employer partners. Until partnerships are confirmed, we invite organizations to hire through CareerMesh."
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
      <CTASection
        eyebrow="Join Our Network"
        title="Become an Employer Partner."
        description="Join a network of organizations building their future workforce through CareerMesh."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "Talk to Us", to: "/contact" },
        ]}
      />
    </>
  );
}
