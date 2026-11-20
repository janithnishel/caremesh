import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { placementSteps } from "@/data/education";

export const Route = createFileRoute("/education/internship-placement")({
  head: () => ({
    meta: [
      { title: "Internship Placement — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "End-to-end internship placement management for educational institutions — from registration to program evaluation.",
      },
      { property: "og:title", content: "Internship Placement — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "End-to-end internship placement management for educational institutions — from registration to program evaluation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InternshipPlacementPage,
});

function InternshipPlacementPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Education Providers", to: "/education-providers" },
          { label: "Internship Placement" },
        ]}
      />
      <PageHero
        tone="education"
        eyebrow="For Education Providers"
        title="Internship Placement Programs."
        description="We manage the full placement process — from student registration through to program evaluation — so your faculty can focus on academic outcomes."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="The Process"
            title="From Registration to Evaluation."
            description="Eight coordinated stages that take students from registration to a completed, reviewed placement."
          />
          <div className="mt-12">
            {/* Desktop horizontal */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-4">
                {placementSteps.map((step, i) => (
                  <div key={step.step} className="relative flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-700 text-sm font-bold text-white shadow-[var(--shadow-e1)]">
                        {String(step.step).padStart(2, "0")}
                      </div>
                      {i < placementSteps.length - 1 && (i + 1) % 4 !== 0 && (
                        <div
                          className="h-0.5 flex-1 rounded-full bg-navy-700/30"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-900">{step.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile vertical */}
            <ol className="space-y-0 lg:hidden">
              {placementSteps.map((step, i) => (
                <li key={step.step} className="relative flex gap-4 pb-8 last:pb-0">
                  {i < placementSteps.length - 1 && (
                    <div
                      className="absolute left-[22px] top-11 h-[calc(100%-2.75rem)] w-px bg-border-strong"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-700 text-sm font-bold text-white shadow-[var(--shadow-e1)]">
                    {String(step.step).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-base font-bold text-navy-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Partner With Us"
        title="Manage Placements with CareerMesh."
        description="Let us coordinate your internship placements end-to-end."
        ctas={[
          { label: "Partner With Us", to: "/education/partner-with-us" },
          { label: "View Programs", to: "/education/programs" },
        ]}
      />
    </>
  );
}
