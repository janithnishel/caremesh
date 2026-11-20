import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getIcon } from "@/lib/icons";
import { DashboardMockup } from "@/components/homepage/DashboardMockup";
import { demoHighlights } from "@/data/platform";
import { BookDemoForm } from "@/components/platform/BookDemoForm";

export const Route = createFileRoute("/platform/book-demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo — ClientFlow — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Book a personalized ClientFlow demo. See a configured workspace with pipelines, automation, communication and reporting.",
      },
      { property: "og:title", content: "Book a Demo — ClientFlow — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Book a personalized ClientFlow demo. See a configured workspace with pipelines, automation, communication and reporting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookDemoPage,
});

function BookDemoPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "ClientFlow Platform", to: "/platform" },
          { label: "Book a Demo" },
        ]}
      />
      <PageHero
        tone="platform"
        eyebrow="ClientFlow CRM"
        title="See ClientFlow in Action."
        description="Book a personalized demo and we'll walk you through a workspace configured to your organization type — pipelines, automation, communication and reporting."
        visual={<DashboardMockup />}
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="What You'll See"
            title="A Walkthrough Tailored to You."
            description="Your demo covers the features most relevant to your operations."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {demoHighlights.map((h) => {
              const Icon = getIcon(h.icon);
              return (
                <div
                  key={h.title}
                  className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-900">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <BookDemoForm />
    </>
  );
}
