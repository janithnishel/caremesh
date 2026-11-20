import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EducationPartnerForm } from "@/components/education/EducationPartnerForm";

export const Route = createFileRoute("/education/partner-with-us")({
  head: () => ({
    meta: [
      { title: "Partner With Us — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Start an education partnership with CareerMesh Lanka. Tell us about your institution and goals.",
      },
      { property: "og:title", content: "Partner With Us — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Start an education partnership with CareerMesh Lanka. Tell us about your institution and goals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnerWithUsPage,
});

function PartnerWithUsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Partner With Us" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Partner With Us."
        description="Tell us about your institution and goals. We'll tailor a partnership that strengthens graduate employability for your students."
      />
      <EducationPartnerForm />
    </>
  );
}
