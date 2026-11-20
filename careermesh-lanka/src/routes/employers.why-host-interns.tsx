import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card, IconTile } from "@/components/shared/Card";
import { CTAButton } from "@/components/shared/CTAButton";
import { getIcon } from "@/lib/icons";
import { whyHostBenefits } from "@/data/employers";

export const Route = createFileRoute("/employers/why-host-interns")({
  head: () => ({
    meta: [
      { title: "Why Host Interns? — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Benefits of hosting interns: access to emerging talent, fresh perspectives, project support and future recruitment pipelines through CareerMesh.",
      },
      { property: "og:title", content: "Why Host Interns? — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Benefits of hosting interns: access to emerging talent, fresh perspectives, project support and future recruitment pipelines through CareerMesh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyHostInternsPage,
});

function WhyHostInternsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Why Host Interns?" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Why Host Interns?"
        description="Hosting interns gives your organization access to emerging talent, fresh perspectives and meaningful support for your projects — while building relationships with the professionals of tomorrow."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="The Value"
            title="Six Reasons to Host Interns."
            description="Interns bring energy, new ideas and real contribution to your team — while you discover potential future hires."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyHostBenefits.map((b) => {
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
          <div className="mt-8">
            <CTAButton to="/employers/benefits" variant="secondary" size="md">
              Explore the benefits in detail <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </Container>
      </Section>
      <Section bg="cloud">
        <Container>
          <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
            <SectionHeading
              eyebrow="Important"
              title="Paid or Unpaid — It Depends."
              description="Whether an internship is paid depends on the role, the host organization and applicable law. CareerMesh does not imply that all internships can legally be unpaid. We discuss arrangements with each host on a case-by-case basis."
            />
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Get Started"
        title="Ready to Host an Intern?"
        description="Submit a hiring requirement and we'll source prepared candidates aligned to your needs."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "How It Works", to: "/employers/how-it-works" },
        ]}
      />
    </>
  );
}
