import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { EmptyState } from "@/components/shared/EmptyState";
import { testimonials } from "@/data/content";

export const Route = createFileRoute("/employers/testimonials")({
  head: () => ({
    meta: [
      { title: "Employer Testimonials — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Genuine, approved testimonials from employer partners in the CareerMesh network. We never fabricate testimonials.",
      },
      { property: "og:title", content: "Employer Testimonials — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Genuine, approved testimonials from employer partners in the CareerMesh network. We never fabricate testimonials.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmployerTestimonialsPage,
});

function EmployerTestimonialsPage() {
  const empTestimonials = testimonials.filter((t) => t.audience === "employers");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Testimonials" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Employer Testimonials."
        description="Genuine, approved testimonials from our employer partners. We only share real, approved words — never fabricated ones."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Partner Voices"
            title="What Employers Say."
            description="We share only genuine, approved testimonials from organizations that have hired through CareerMesh."
          />
          <div className="mt-12">
            {empTestimonials.length === 0 ? (
              <EmptyState
                title="No testimonials published yet"
                description="We share genuine, approved testimonials from our employer partners. If you've hired through CareerMesh and would like to share your experience, we'd love to hear from you."
                ctaLabel="Share your experience"
                ctaTo="/contact"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {empTestimonials.map((t) => (
                  <Card key={t.slug} tone="white">
                    <p className="text-base leading-relaxed text-muted-foreground">"{t.quote}"</p>
                    <p className="mt-4 text-sm font-semibold text-navy-900">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}, {t.organization}
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Hire Through CareerMesh"
        title="Build Outcomes Worth Sharing."
        description="Hire interns through CareerMesh and become part of a network building stronger talent pipelines."
        ctas={[{ label: "Hire an Intern", to: "/employers/hire-an-intern" }]}
      />
    </>
  );
}
