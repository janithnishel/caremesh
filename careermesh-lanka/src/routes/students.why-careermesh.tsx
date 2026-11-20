import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BenefitGrid, RelatedLinks } from "@/components/students/BenefitGrid";
import { whyCareerMeshBenefits } from "@/data/students";

export const Route = createFileRoute("/students/why-careermesh")({
  head: () => ({
    meta: [
      { title: "Why CareerMesh? — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Structured preparation, career guidance, industry relationships and ClientFlow-enabled coordination for your internship journey.",
      },
      { property: "og:title", content: "Why CareerMesh? — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Structured preparation, career guidance, industry relationships and ClientFlow-enabled coordination for your internship journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyCareerMeshPage,
});

function WhyCareerMeshPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Why CareerMesh?" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Why Choose CareerMesh?"
        description="We provide structured preparation, career guidance, industry relationships and ongoing support — coordinated through ClientFlow so your journey stays organised."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="How We Support You"
            title="More Than Matching. A Supported Journey."
            description="We don't just connect you to opportunities — we prepare, guide and support you at every step."
          />
          <BenefitGrid benefits={whyCareerMeshBenefits} columns={3} />
        </Container>
      </Section>
      <RelatedLinks
        heading="Keep Exploring"
        links={[
          { label: "Why Do an Internship?", to: "/students/why-internship" },
          { label: "Internship Programs", to: "/students/internship-programs" },
          { label: "Program Inclusions", to: "/students/program-inclusions" },
          { label: "Program Fees", to: "/students/program-fees" },
          { label: "Register Your Interest", to: "/students/register" },
        ]}
      />
      <CTASection
        eyebrow="Get Started"
        title="Let's Start Your Journey."
        description="Register your interest and our team will guide you through preparation and opportunity matching."
        ctas={[
          { label: "Register Now", to: "/students/register" },
          { label: "View Programs", to: "/students/internship-programs" },
        ]}
      />
    </>
  );
}
