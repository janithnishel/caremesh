import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BenefitGrid, RelatedLinks } from "@/components/students/BenefitGrid";
import { whyInternshipBenefits } from "@/data/students";

export const Route = createFileRoute("/students/why-internship")({
  head: () => ({
    meta: [
      { title: "Why Do an Internship? — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "The value of professional internships: practical experience, industry exposure, networking and career confidence.",
      },
      { property: "og:title", content: "Why Do an Internship? — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "The value of professional internships: practical experience, industry exposure, networking and career confidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyInternshipPage,
});

function WhyInternshipPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Why Do an Internship?" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Why Do an Internship?"
        description="A professional internship is one of the most valuable steps you can take during your studies — it turns academic potential into real professional experience."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="The Value of Experience"
            title="Eight Reasons an Internship Matters."
            description="Internships bridge the gap between study and work, giving you the experience, skills and connections employers value."
          />
          <BenefitGrid benefits={whyInternshipBenefits} columns={4} />
        </Container>
      </Section>
      <RelatedLinks
        heading="Keep Exploring"
        links={[
          { label: "Why CareerMesh?", to: "/students/why-careermesh" },
          { label: "Internship Programs", to: "/students/internship-programs" },
          { label: "Program Structure", to: "/students/program-structure" },
          { label: "Entry Requirements", to: "/students/entry-requirements" },
          { label: "Register Your Interest", to: "/students/register" },
        ]}
      />
      <CTASection
        eyebrow="Get Started"
        title="Ready to Gain Real Experience?"
        description="Register your interest and take the first step toward a professional internship."
        ctas={[{ label: "Register Now", to: "/students/register" }]}
      />
    </>
  );
}
