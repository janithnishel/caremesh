import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { team } from "@/data/content";

export const Route = createFileRoute("/graduate-recruiters/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — Graduate Recruiters — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "The CareerMesh graduate talent team. Real team profiles appear here once supplied — we never invent names, titles or biographies.",
      },
      { property: "og:title", content: "Meet Our Team — Graduate Recruiters — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "The CareerMesh graduate talent team. Real team profiles appear here once supplied — we never invent names, titles or biographies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecruiterTeamPage,
});

function RecruiterTeamPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Graduate Recruiters", to: "/graduate-recruiters" },
          { label: "Meet Our Team" },
        ]}
      />
      <PageHero
        tone="recruiters"
        eyebrow="Meet Our Team"
        title="The People Behind Our Graduate Talent Services."
        description="Our team brings graduate recruitment expertise, university relationships and structured program delivery. Real profiles appear here once supplied."
      />

      <Section bg="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Our Team"
            title="Graduate Talent Specialists."
            description="We never invent names, titles or biographies. Clean neutral profiles will appear here once real team information is supplied."
          />
          <div className="mt-12">
            {team.length === 0 ? (
              <EmptyState
                title="Team profiles coming soon"
                description="Real team profiles will appear here once supplied. In the meantime, we'd be glad to introduce our team in a consultation."
                ctaLabel="Talk to us"
                ctaTo="/graduate-recruiters/contact"
                icon={<Users className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((m) => (
                  <div key={m.name} className="rounded-lg border border-white/10 bg-navy-800 p-6">
                    <div className="flex size-16 items-center justify-center rounded-full bg-teal-500/15 text-teal-500">
                      <Users className="size-7" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-white">{m.name}</h3>
                    <p className="text-sm font-semibold text-teal-500">{m.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{m.bio}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Talk to Us"
        title="Meet the Team in a Consultation."
        description="We'd be glad to introduce ourselves and discuss your graduate talent needs."
        ctas={[{ label: "Request a Consultation", to: "/graduate-recruiters/contact" }]}
      />
    </>
  );
}
