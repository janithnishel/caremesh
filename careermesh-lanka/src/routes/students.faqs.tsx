import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { getFaqsFor } from "@/data/faqs";

export const Route = createFileRoute("/students/faqs")({
  head: () => ({
    meta: [
      { title: "Student FAQs — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Frequently asked questions for students: registration, eligibility, internship programs, fees, employer interviews, work arrangements, program support and completion.",
      },
      { property: "og:title", content: "Student FAQs — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Frequently asked questions for students: registration, eligibility, internship programs, fees, employer interviews, work arrangements, program support and completion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentFaqsPage,
});

function StudentFaqsPage() {
  const faqs = getFaqsFor("students");
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "FAQs" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Student FAQs."
        description="Answers to common questions about registration, eligibility, programs, fees, interviews and program support."
      />
      <Section bg="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion groups={faqs} searchable structuredData />
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Still Have Questions?"
        title="We're Here to Help."
        description="If you can't find the answer you're looking for, reach out and our team will assist."
        ctas={[
          { label: "Register Your Interest", to: "/students/register" },
          { label: "Contact Us", to: "/contact" },
        ]}
      />
    </>
  );
}
