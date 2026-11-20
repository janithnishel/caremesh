import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RecruiterContactForm } from "@/components/recruiters/RecruiterContactForm";

export const Route = createFileRoute("/graduate-recruiters/contact")({
  head: () => ({
    meta: [
      { title: "Talk to Us — Graduate Recruiters — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Request a consultation about graduate recruitment, development and retention. Tell us your intake needs and current process.",
      },
      { property: "og:title", content: "Talk to Us — Graduate Recruiters — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Request a consultation about graduate recruitment, development and retention. Tell us your intake needs and current process.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecruiterContactPage,
});

function RecruiterContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Talk to Us" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Talk to Us"
        title="Request a Consultation."
        description="Tell us about your organization, your graduate intake needs and your current recruitment process. We'll tailor a solution across attraction, recruitment, development and retention."
      />
      <RecruiterContactForm />
    </>
  );
}
