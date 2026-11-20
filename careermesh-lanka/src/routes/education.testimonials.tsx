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

export const Route = createFileRoute("/education/testimonials")({
  head: () => ({
    meta: [
      { title: "Education Testimonials — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Genuine, approved testimonials from education partners in the CareerMesh network.",
      },
      { property: "og:title", content: "Education Testimonials — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Genuine, approved testimonials from education partners in the CareerMesh network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationTestimonialsPage,
});

function EducationTestimonialsPage() {
  const edTestimonials = testimonials.filter((t) => t.audience === "education");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Testimonials" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Education Testimonials."
        description="Genuine, approved testimonials from our education partners."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Partner Voices"
            title="What Education Partners Say."
            description="We only share genuine, approved testimonials — never fabricated ones."
          />
          <div className="mt-12">
            {edTestimonials.length === 0 ? (
              <EmptyState
                title="No testimonials published yet"
                description="We share genuine, approved testimonials from our education partners. If you'd like to share your experience, we'd love to hear from you."
                ctaLabel="Share your experience"
                ctaTo="/contact"
                icon={<Sparkles className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {edTestimonials.map((t) => (
                  <Card key={t.slug} tone="white">
                    <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                    <p className="mt-4 text-sm font-semibold text-navy-900">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Partner With Us"
        title="Become a Partner."
        description="Join our network and build outcomes worth sharing."
        ctas={[{ label: "Partner With Us", to: "/education/partner-with-us" }]}
      />
    </>
  );
}
