import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, MapPin, Clock, Briefcase } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { sampleCandidates } from "@/data/employers";

export const Route = createFileRoute("/employers/our-talent")({
  head: () => ({
    meta: [
      { title: "Meet Our Talent — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "How candidate profiles look in the CareerMesh network — anonymized sample cards demonstrating the talent we work with. No real candidate data is shown without explicit consent.",
      },
      { property: "og:title", content: "Meet Our Talent — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "How candidate profiles look in the CareerMesh network — anonymized sample cards demonstrating the talent we work with. No real candidate data is shown without explicit consent.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurTalentPage,
});

function OurTalentPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Employers", to: "/employers" },
          { label: "Meet Our Talent" },
        ]}
      />
      <PageHero
        tone="employers"
        eyebrow="For Employers"
        title="Meet Our Talent."
        description="Here's how candidate profiles could look in the CareerMesh network. These are anonymized sample cards — no real people, no CVs, no personal data. We publish a real profile only with the candidate's explicit consent."
      />
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Sample Talent Cards"
            title="A Glimpse of the Talent We Work With."
            description="These sample cards show the kind of information we use to match candidates to your requirements — field, discipline, skills, availability and work mode."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {sampleCandidates.map((c, i) => (
              <Card key={i} tone="cloud" hover={false} className="flex h-full flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                      <Briefcase className="size-5" />
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    Sample
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{c.field}</h3>
                  <p className="mt-1 text-sm font-semibold text-teal-700">{c.discipline}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Clock className="size-4 text-teal-600" /> Available: {c.availability}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4 text-teal-600" /> Work mode: {c.workMode}
                  </span>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-e1)]">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-teal-700" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-navy-900">Privacy note:</span> These are
                anonymized sample cards for demonstration only. We never expose CVs, personal data
                or candidate profiles publicly. A real profile is shared with an employer only with
                the candidate's explicit consent and under agreed access policies.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection
        eyebrow="Hire with Confidence"
        title="Access Prepared Candidates."
        description="Submit a hiring requirement and we'll match candidates to your needs — with privacy and consent built in."
        ctas={[
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
          { label: "View Disciplines", to: "/employers/disciplines" },
        ]}
      />
    </>
  );
}
