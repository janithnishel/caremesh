import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, School, Briefcase, Users, Cpu } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { getFaqsFor } from "@/data/faqs";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Frequently asked questions about CareerMesh programs, partnerships, recruitment services and the ClientFlow platform.",
      },
      { property: "og:title", content: "FAQs — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Frequently asked questions about CareerMesh programs, partnerships, recruitment services and the ClientFlow platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqsPage,
});

const audienceLinks = [
  {
    icon: <GraduationCap className="size-5" />,
    title: "Student FAQs",
    desc: "Registration, eligibility, programs, fees, interviews and support.",
    to: "/students/faqs",
    tone: "mint" as const,
  },
  {
    icon: <School className="size-5" />,
    title: "Education FAQs",
    desc: "Partnerships, program customization, technology and contracts.",
    to: "/education/faqs",
    tone: "ice" as const,
  },
  {
    icon: <Briefcase className="size-5" />,
    title: "Employer FAQs",
    desc: "Hiring interns, services, work arrangements and pricing.",
    to: "/employers/faqs",
    tone: "cloud" as const,
  },
  {
    icon: <Users className="size-5" />,
    title: "Recruiter FAQs",
    desc: "Graduate recruitment services and technology support.",
    to: "/graduate-recruiters/faqs",
    tone: "dark" as const,
  },
];

function FaqsPage() {
  const generalFaqs = getFaqsFor("general");

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "FAQs" }]} />
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently Asked Questions."
            description="Answers to the most common questions about CareerMesh and ClientFlow. For audience-specific questions, explore the sections below."
          />
        </Container>
      </Section>

      <Section bg="white">
        <Container className="max-w-4xl">
          <FAQAccordion groups={generalFaqs} structuredData />
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading eyebrow="By Audience" title="Explore Audience-Specific FAQs." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {audienceLinks.map((a) => {
              const dark = a.tone === "dark";
              return (
                <Link key={a.title} to={a.to as never} className="group">
                  <Card tone={a.tone} hover className="flex h-full flex-col gap-3">
                    <div className={dark ? "text-teal-500" : "text-teal-700"}>{a.icon}</div>
                    <h3
                      className={
                        dark ? "text-lg font-bold text-white" : "text-lg font-bold text-navy-900"
                      }
                    >
                      {a.title}
                    </h3>
                    <p className={dark ? "text-sm text-white/70" : "text-sm text-muted-foreground"}>
                      {a.desc}
                    </p>
                    <span
                      className={`mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold ${dark ? "text-teal-500 group-hover:text-teal-400" : "text-teal-700 group-hover:text-teal-800"}`}
                    >
                      View FAQs <ArrowRight className="size-4" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section bg="cyan">
        <Container>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-800">
                <Cpu className="size-5" />
                <p className="text-eyebrow">ClientFlow Platform</p>
              </div>
              <h2 className="mt-2 text-h3 text-navy-900">Questions about the platform?</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Book a demo and we'll walk you through workspaces, pipelines and automation live.
              </p>
            </div>
            <Link
              to="/platform/book-demo"
              className="inline-flex items-center gap-1 rounded-md bg-cyan-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-600"
            >
              Book a Demo <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Still Have Questions?"
        title="We're Happy to Help."
        description="If you can't find the answer you're looking for, contact us and we'll respond personally."
        ctas={[{ label: "Contact Us", to: "/contact" }]}
      />
    </>
  );
}
