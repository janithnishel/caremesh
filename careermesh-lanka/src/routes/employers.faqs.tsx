import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { getFaqsFor } from "@/data/faqs";

export const Route = createFileRoute("/employers/faqs")({
  head: () => ({
    meta: [
      { title: "Employer FAQs — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Common questions from employers about hiring interns, recruitment services, paid vs unpaid arrangements and pricing.",
      },
      { property: "og:title", content: "Employer FAQs — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Common questions from employers about hiring interns, recruitment services, paid vs unpaid arrangements and pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmployerFaqsPage,
});

function EmployerFaqsPage() {
  const faqs = getFaqsFor("employers");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "FAQs" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Employer FAQs."
        description="Common questions about hiring interns, recruitment services, paid versus unpaid arrangements and pricing. Search or browse by category."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Answers for Employers."
            description="Search or browse by category below."
          />
          <div className="mt-12 max-w-3xl">
            <FAQAccordion groups={faqs} searchable structuredData />
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Still Have Questions?"
        title="Talk to Us."
        description="We're happy to answer any questions about hiring interns through CareerMesh."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "Contact Us", to: "/contact" },
        ]}
      />
    </>
  );
}
