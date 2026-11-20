import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card, IconTile } from "@/components/shared/Card";
import { getIcon } from "@/lib/icons";
import { whyPartnerBenefits } from "@/data/education";

export const Route = createFileRoute("/education/why-partner")({
  head: () => ({
    meta: [
      { title: "Why Partner With Us? — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Industry connections, structured internship coordination, employability strategy and a dedicated ClientFlow workspace for education providers.",
      },
      { property: "og:title", content: "Why Partner With Us? — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Industry connections, structured internship coordination, employability strategy and a dedicated ClientFlow workspace for education providers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyPartnerPage,
});

function WhyPartnerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Why Partner With Us?" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Why Partner With CareerMesh?"
        description="We bring industry connections, structured coordination and technology so your institution can strengthen graduate outcomes."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="The Partnership Advantage"
            title="Eight Reasons Institutions Partner With Us."
            description="A complete employability partner — from industry access to technology-enabled operations."
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
      <CTASection
        eyebrow="Partner With Us"
        title="Let's Build a Partnership."
        description="Tell us about your institution and goals — we'll tailor a partnership that works for your students."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "Explore Programs", to: "/education/programs" },
        ]}
      />
    </>
  );
}
