import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { getFaqsFor } from "@/data/faqs";

export const Route = createFileRoute("/graduate-recruiters/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Graduate Recruiters — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Frequently asked questions about CareerMesh graduate recruitment services and ClientFlow CRM technology.",
      },
      { property: "og:title", content: "FAQs — Graduate Recruiters — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Frequently asked questions about CareerMesh graduate recruitment services and ClientFlow CRM technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecruiterFaqsPage,
});

function RecruiterFaqsPage() {
  const recFaqs = getFaqsFor("recruiters");
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "FAQs" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="FAQs"
        title="Graduate Recruiter FAQs."
        description="Common questions about our graduate talent services and ClientFlow-powered recruitment operations."
      />

      <Section bg="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Questions & Answers"
            title="Find Your Answer."
            description="Search our graduate recruiter FAQs by keyword or browse by category."
          />
          <div className="mt-12 max-w-3xl">
            <FAQAccordion groups={recFaqs} searchable structuredData />
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Still Have Questions?"
        title="Talk to Us."
        description="We're happy to answer any questions about our graduate talent services."
        ctas={[{ label: "Request a Consultation", to: "/graduate-recruiters/contact" }]}
      />
    </>
  );
}
