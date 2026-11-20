import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PackageComparison } from "@/components/platform/PlatformComponents";
import { clientFlowPackages } from "@/data/pricing";

export const Route = createFileRoute("/platform/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ClientFlow — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "ClientFlow CRM packages: Starter, Professional, Business and Enterprise. Configurable features, user limits, workspaces, automation and support.",
      },
      { property: "og:title", content: "Pricing — ClientFlow — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "ClientFlow CRM packages: Starter, Professional, Business and Enterprise. Configurable features, user limits, workspaces, automation and support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlatformPricingPage,
});

function PlatformPricingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "ClientFlow Platform", to: "/platform" },
          { label: "Pricing" },
        ]}
      />
      <PageHero
        tone="platform"
        eyebrow="ClientFlow CRM"
        title="Packages That Scale With You."
        description="From small teams to enterprise organizations — ClientFlow packages are configurable. Prices are available on request; we never publish invented figures or promise unlimited functionality."
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Packages"
            title="Four Configurable Packages."
            description="Compare features, user limits, workspaces, automation, integrations, support and implementation."
          />
          <PackageComparison packages={clientFlowPackages} />
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card p-6 text-center shadow-[var(--shadow-e1)] md:p-8">
            <h3 className="text-h3 text-navy-900">Need a custom enterprise package?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              For large organizations with custom requirements, we tailor a package to your
              operations — including custom AI development and dedicated account management.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-cyan-800 px-6 text-sm font-semibold text-white hover:bg-cyan-600"
              >
                Contact us about enterprise
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        tone="cyan"
        eyebrow="Get Started"
        title="Not Sure Which Package Fits?"
        description="Book a demo and we'll help you choose the right configuration for your operations."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo" }]}
      />
    </>
  );
}
