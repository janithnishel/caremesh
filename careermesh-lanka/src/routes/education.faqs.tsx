import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { getFaqsFor } from "@/data/faqs";

export const Route = createFileRoute("/education/faqs")({
  head: () => ({
    meta: [
      { title: "Education FAQs — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Common questions from education providers about partnerships, programs, student eligibility, reporting and ClientFlow access.",
      },
      { property: "og:title", content: "Education FAQs — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Common questions from education providers about partnerships, programs, student eligibility, reporting and ClientFlow access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationFaqsPage,
});

function EducationFaqsPage() {
  const faqs = getFaqsFor("education");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "FAQs" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Education FAQs."
        description="Common questions about partnerships, programs, student eligibility, internship coordination, reporting, ClientFlow access, pricing and contracts."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Answers for Education Providers."
            description="Search or browse by category."
          />
          <div className="mt-12 max-w-3xl">
            <FAQAccordion groups={faqs} searchable structuredData />
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Still Have Questions?"
        title="Talk to Us."
        description="We're happy to answer any questions about partnering with CareerMesh."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "Contact Us", to: "/contact" },
        ]}
      />
    </>
  );
}
