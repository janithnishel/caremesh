import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Home, MessageSquare } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { CTAButton, CTAGroup } from "@/components/shared/CTAButton";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — CareerMesh Lanka" },
      {
        name: "description",
        content: "Your inquiry has been received. The CareerMesh team will be in touch.",
      },
      { property: "og:title", content: "Thank You — CareerMesh Lanka" },
      {
        property: "og:description",
        content: "Your inquiry has been received. The CareerMesh team will be in touch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Thank You" }]} />
      <Section bg="cloud">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-5 rounded-lg border border-border bg-card px-6 py-16 text-center shadow-[var(--shadow-e1)]">
            <div className="flex size-16 items-center justify-center rounded-full bg-success/15 text-success">
              <CheckCircle2 className="size-8" />
            </div>
            <h1 className="text-display text-navy-900">Thank You</h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Your inquiry has been received. The {siteConfig.name} team will respond within two
              business days.
            </p>
            <CTAGroup align="center" className="mt-2">
              <CTAButton to="/" variant="primary" size="lg">
                <Home className="size-4" /> Back to Home
              </CTAButton>
              <CTAButton to="/contact" variant="secondary" size="lg">
                <MessageSquare className="size-4" /> Send Another Inquiry
              </CTAButton>
            </CTAGroup>
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <h2 className="text-h3 text-navy-900">While you wait, explore:</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Link
                to="/resources"
                className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-e1)] transition-colors hover:border-teal-700"
              >
                <span className="text-sm font-bold text-navy-900 group-hover:text-teal-700">
                  Resources & Guides
                </span>
                <ArrowRight className="size-4 text-teal-700" />
              </Link>
              <Link
                to="/platform"
                className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-e1)] transition-colors hover:border-teal-700"
              >
                <span className="text-sm font-bold text-navy-900 group-hover:text-teal-700">
                  ClientFlow Platform
                </span>
                <ArrowRight className="size-4 text-teal-700" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
