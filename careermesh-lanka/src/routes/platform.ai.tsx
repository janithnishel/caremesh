import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getIcon } from "@/lib/icons";
import { standardAiCapabilities } from "@/data/platform";

export const Route = createFileRoute("/platform/ai")({
  head: () => ({
    meta: [
      { title: "AI Capabilities — ClientFlow — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Configured AI assistance for communication, FAQs, lead qualification and career guidance — with a clear path to custom AI development.",
      },
      { property: "og:title", content: "AI Capabilities — ClientFlow — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Configured AI assistance for communication, FAQs, lead qualification and career guidance — with a clear path to custom AI development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiPage,
});

function AiPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "ClientFlow Platform", to: "/platform" },
          { label: "AI Capabilities" },
        ]}
      />
      <PageHero
        tone="platform"
        eyebrow="ClientFlow CRM"
        title="AI Capabilities."
        description="ClientFlow offers configured AI assistance for communication, FAQs, lead qualification and career guidance. Advanced, specialized AI applications can be developed as custom projects when required."
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Standard AI Capabilities"
            title="AI That Supports Your Team."
            description="Configured AI applications available within ClientFlow workspaces."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standardAiCapabilities.map((c) => {
              const Icon = getIcon(c.icon);
              return (
                <div
                  key={c.title}
                  className="flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-e2)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
              <div className="flex size-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800">
                <Cpu className="size-6" />
              </div>
              <h3 className="mt-4 text-h3 text-navy-900">Standard ClientFlow AI</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The AI capabilities above are part of the standard ClientFlow platform — configured
                for your workspace and ready to support your team's daily operations.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-navy-900 p-6 text-white shadow-[var(--shadow-e1)] md:p-8">
              <div className="flex size-12 items-center justify-center rounded-lg bg-teal-500/15 text-teal-500">
                <Sparkles className="size-6" />
              </div>
              <h3 className="mt-4 text-h3 text-white">Custom AI Development</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Advanced portals, candidate matching and specialized student management functions
                may require additional development. These can be built as custom AI projects when
                your operations require them.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <CTAButton to="/platform/book-demo" variant="cyan" size="md">
              Discuss your AI needs <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      <CTASection
        tone="cyan"
        eyebrow="Get Started"
        title="Explore AI for Your Workspace."
        description="Book a demo to see configured AI assistance in action."
        ctas={[{ label: "Book a Demo", to: "/platform/book-demo" }]}
      />
    </>
  );
}
