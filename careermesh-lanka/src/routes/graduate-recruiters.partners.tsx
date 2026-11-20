import { createFileRoute } from "@tanstack/react-router";
import { Network, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { partners } from "@/data/content";

export const Route = createFileRoute("/graduate-recruiters/partners")({
  head: () => ({
    meta: [
      { title: "Our Network — Graduate Recruiters — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Approved partner organizations working with CareerMesh on graduate recruitment and talent programs.",
      },
      { property: "og:title", content: "Our Network — Graduate Recruiters — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Approved partner organizations working with CareerMesh on graduate recruitment and talent programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecruiterPartnersPage,
});

function RecruiterPartnersPage() {
  const recPartners = partners.filter((p) => p.audience === "recruiters");
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Our Network" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Our Network"
        title="Approved Partner Organizations."
        description="We only display approved, confirmed partner organizations — never fabricated names or logos."
      />

      <Section bg="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Partner Network"
            title="Organizations We Work With."
            description="Our partner network grows as confirmed relationships are established."
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
                  <div key={p.name} className="rounded-lg border border-white/10 bg-navy-800 p-6">
                    <p className="text-base font-bold text-white">{p.name}</p>
                    <p className="mt-1 text-xs text-white/60">{p.category}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Join Our Network"
        title="Partner With CareerMesh."
        description="If your organization works in graduate recruitment or corporate HR, let's talk."
        ctas={[{ label: "Request a Consultation", to: "/graduate-recruiters/contact" }]}
      />
    </>
  );
}
