import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmployerHireForm } from "@/components/employers/EmployerHireForm";

export const Route = createFileRoute("/employers/hire-an-intern")({
  head: () => ({
    meta: [
      { title: "Hire an Intern — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Submit a hiring requirement and access prepared, motivated candidates through CareerMesh. Tell us the role, skills and timing you need.",
      },
      { property: "og:title", content: "Hire an Intern — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Submit a hiring requirement and access prepared, motivated candidates through CareerMesh. Tell us the role, skills and timing you need.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HireAnInternPage,
});

function HireAnInternPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Hire an Intern" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Hire an Intern."
        description="Tell us about the role and your requirements. We'll source, screen and coordinate prepared candidates so you can focus on interviewing and selecting."
      />
      <EmployerHireForm />
    </>
  );
}
