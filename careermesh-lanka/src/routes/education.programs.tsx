import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, XCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card, IconTile } from "@/components/shared/Card";
import { getIcon } from "@/lib/icons";
import { employabilityPrograms, programComparison } from "@/data/education";

export const Route = createFileRoute("/education/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Customized employability programs: internship placement, industry group projects, internship accelerator and employability training.",
      },
      { property: "og:title", content: "Our Programs — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Customized employability programs: internship placement, industry group projects, internship accelerator and employability training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Our Programs" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Graduate Employability Programs."
        description="Customized solutions adapted to academic requirements, faculty objectives, industry needs, cohort sizes and internship requirements."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Academic Partnership Cards"
            title="Four Programs, One Goal."
            description="Each program is tailored to your institution's context and goals."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {employabilityPrograms.map((p) => {
              const Icon = getIcon(p.icon);
              return (
                <Card key={p.title} tone="ice" hover className="flex h-full flex-col gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="navy" />
                  <h3 className="text-lg font-bold text-navy-900">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-1 space-y-1.5">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-navy-700" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section bg="ice">
        <Container>
          <SectionHeading
            eyebrow="Program Comparison"
            title="What Each Program Includes."
            description="Compare the focus of each program to choose what fits your institution."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse rounded-lg border border-border bg-card">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="p-4 text-left text-sm font-bold text-navy-900">Feature</th>
                  <th className="p-4 text-center text-sm font-bold text-navy-900">Placement</th>
                  <th className="p-4 text-center text-sm font-bold text-navy-900">Projects</th>
                  <th className="p-4 text-center text-sm font-bold text-navy-900">Accelerator</th>
                  <th className="p-4 text-center text-sm font-bold text-navy-900">Training</th>
                </tr>
              </thead>
              <tbody>
                {programComparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-b-0">
                    <td className="p-4 text-sm font-medium text-navy-900">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.placement ? (
                        <CheckCircle2 className="mx-auto size-5 text-teal-600" />
                      ) : (
                        <XCircle className="mx-auto size-5 text-muted-foreground/40" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.projects ? (
                        <CheckCircle2 className="mx-auto size-5 text-teal-600" />
                      ) : (
                        <XCircle className="mx-auto size-5 text-muted-foreground/40" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.accelerator ? (
                        <CheckCircle2 className="mx-auto size-5 text-teal-600" />
                      ) : (
                        <XCircle className="mx-auto size-5 text-muted-foreground/40" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.training ? (
                        <CheckCircle2 className="mx-auto size-5 text-teal-600" />
                      ) : (
                        <XCircle className="mx-auto size-5 text-muted-foreground/40" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Partner With Us"
        title="Tailor a Program to Your Institution."
        description="Tell us your goals and we'll design a program that fits your students and faculty."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "View Internship Placement", to: "/education/internship-placement" },
        ]}
      />
    </>
  );
}
