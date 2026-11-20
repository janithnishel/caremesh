import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { careerToolkitModules } from "@/data/students";
import { resolveToolkitIcon } from "@/components/students/BenefitGrid";

export const Route = createFileRoute("/students/career-development-toolkit")({
  head: () => ({
    meta: [
      { title: "Career Development Toolkit — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Career development modules: personal branding, communication, business skills, career planning, interview preparation, CV development and workplace readiness.",
      },
      { property: "og:title", content: "Career Development Toolkit — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Career development modules: personal branding, communication, business skills, career planning, interview preparation, CV development and workplace readiness.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareerToolkitPage,
});

function CareerToolkitPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Career Development Toolkit" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Career Development Toolkit."
        description="A structured set of learning modules to build your professional readiness — from personal branding and communication to interview preparation and workplace skills."
        visual={
          <div className="flex h-full flex-col justify-center gap-3 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-e2)]">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <BookOpen className="size-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900">8 Learning Modules</p>
                <p className="text-xs text-muted-foreground">
                  Structured for future LMS integration
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Each module is designed to plug into a future e-learning platform.
            </p>
          </div>
        }
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Modules"
            title="Eight Modules for Professional Readiness."
            description="Work through these modules to build the skills employers value — at your own pace."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerToolkitModules.map((mod) => {
              const Icon = resolveToolkitIcon(mod.icon);
              return (
                <Card key={mod.number} tone="mint" hover className="flex h-full flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs font-bold text-teal-700">
                      {String(mod.number).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{mod.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{mod.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900">Built for future e-learning</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    This toolkit is structured so a future LMS or e-learning integration can plug in
                    directly. Module content will be supplied as the platform develops.
                  </p>
                </div>
              </div>
              <a
                href="/students/register"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-teal-800"
              >
                Get started <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Get Started"
        title="Build Your Career Readiness."
        description="Register your interest to access career development support as part of your program."
        ctas={[
          { label: "Register Now", to: "/students/register" },
          { label: "Explore Programs", to: "/students/internship-programs" },
        ]}
      />
    </>
  );
}
