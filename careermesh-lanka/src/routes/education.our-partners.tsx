import { createFileRoute } from "@tanstack/react-router";
import { Handshake } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card, IconTile } from "@/components/shared/Card";
import { EmptyState } from "@/components/shared/EmptyState";
import { getIcon } from "@/lib/icons";
import { educationNetworkCategories } from "@/data/education";
import { partners } from "@/data/content";

export const Route = createFileRoute("/education/our-partners")({
  head: () => ({
    meta: [
      { title: "Our Education Network — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "The CareerMesh education network of universities, higher education institutions and training providers across Sri Lanka.",
      },
      { property: "og:title", content: "Our Education Network — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "The CareerMesh education network of universities, higher education institutions and training providers across Sri Lanka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurPartnersPage,
});

function OurPartnersPage() {
  const educationPartners = partners.filter((p) => p.audience === "education");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Our Education Network" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Our Education Network."
        description="We partner with a range of educational institutions across Sri Lanka. We only display approved, confirmed partners — never fabricated names or logos."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Institution Types"
            title="Who's in Our Network."
            description="Our network spans universities, higher education institutions, professional education providers and training institutes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {educationNetworkCategories.map((c) => {
              const Icon = getIcon(c.icon);
              return (
                <Card key={c.title} tone="ice" hover className="flex h-full flex-col gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="navy" />
                  <h3 className="text-base font-bold text-navy-900">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section bg="ice">
        <Container>
          <SectionHeading
            eyebrow="Confirmed Partners"
            title="Approved Education Partners."
            description="We only display approved, confirmed partner institutions. Until partnerships are confirmed, we invite institutions to partner with us."
          />
          <div className="mt-12">
            {educationPartners.length === 0 ? (
              <EmptyState
                title="No education partners published yet"
                description="We're building our education network. If your institution would like to partner with CareerMesh, we'd love to talk."
                ctaLabel="Partner with us"
                ctaTo="/education/partner-with-us"
                icon={<Handshake className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {educationPartners.map((p) => (
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
        title="Become an Education Partner."
        description="Join a network of institutions strengthening graduate employability together."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "Talk to Us", to: "/contact" },
        ]}
      />
    </>
  );
}
