import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { StudentRegistrationForm } from "@/components/students/StudentRegistrationForm";

export const Route = createFileRoute("/students/register")({
  head: () => ({
    meta: [
      { title: "Student Registration — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Register your interest in a CareerMesh internship program. Tell us about your background, field and goals — our team will guide you through preparation and opportunity matching.",
      },
      { property: "og:title", content: "Student Registration — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Register your interest in a CareerMesh internship program. Tell us about your background, field and goals — our team will guide you through preparation and opportunity matching.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentRegisterPage,
});

function StudentRegisterPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Register" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Register Your Interest."
        description="Tell us about your background and goals. Registration of interest is free — our team will review your details and contact you for a consultation."
      />
      <StudentRegistrationForm />
    </>
  );
}
