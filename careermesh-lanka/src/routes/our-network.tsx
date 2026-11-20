import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, School, Briefcase, Users, Network } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EmptyState } from "@/components/shared/EmptyState";
import { industries } from "@/data/industries";
import { partners } from "@/data/content";
import { getIcon } from "@/lib/icons";

export const Route = createFileRoute("/our-network")({
  head: () => ({
    meta: [
      { title: "Our Network — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "The CareerMesh network of students, educational institutions, employers and graduate recruiters across Sri Lanka.",
      },
      { property: "og:title", content: "Our Network — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "The CareerMesh network of students, educational institutions, employers and graduate recruiters across Sri Lanka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurNetworkPage,
});

const networkGroups = [
  {
    icon: <GraduationCap className="size-5" />,
    title: "Students & Graduates",
    desc: "Emerging talent across professional disciplines, supported from preparation to placement.",
    to: "/students-graduates",
    tone: "mint" as const,
  },
  {
    icon: <School className="size-5" />,
    title: "Universities & Education Providers",
    desc: "Universities, higher education institutions, professional education providers and training institutes.",
    to: "/education/our-partners",
    tone: "ice" as const,
  },
  {
    icon: <Briefcase className="size-5" />,
    title: "Employers & Companies",
    desc: "Host organizations across IT, finance, engineering, business, marketing, HR and hospitality.",
    to: "/employers/our-partners",
    tone: "cloud" as const,
  },
  {
    icon: <Users className="size-5" />,
    title: "Graduate Recruiters & Corporate HR",
    desc: "Recruitment agencies and corporate HR teams building early-career talent pipelines.",
    to: "/graduate-recruiters/partners",
    tone: "dark" as const,
  },
];

function OurNetworkPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Our Network" }]} />
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Our Network"
            title="A Connected Talent & Employability Network."
            description="CareerMesh links four stakeholder groups across Sri Lanka — and gives participating organizations the technology to manage their side of the network."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {networkGroups.map((g) => {
              const dark = g.tone === "dark";
              return (
                <Link key={g.title} to={g.to as never} className="group">
                  <Card tone={g.tone} hover className="flex h-full flex-col gap-3">
                    <IconTile icon={g.icon} tone={dark ? "cyan" : "teal"} />
                    <h3
                      className={
                        dark ? "text-lg font-bold text-white" : "text-lg font-bold text-navy-900"
                      }
                    >
                      {g.title}
                    </h3>
                    <p className={dark ? "text-sm text-white/70" : "text-sm text-muted-foreground"}>
                      {g.desc}
                    </p>
                    <span
                      className={`mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold ${dark ? "text-teal-500 group-hover:text-teal-400" : "text-teal-700 group-hover:text-teal-800"}`}
                    >
                      Explore <ArrowRight className="size-4" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Industry Coverage"
            title="Talent Across Professional Disciplines."
            description="Our network spans the professional fields most in demand across Sri Lanka."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {industries.map((ind) => {
              const Icon = getIcon(ind.icon);
              return (
                <Card key={ind.slug} tone="cloud" hover className="flex items-center gap-3">
                  <IconTile icon={<Icon className="size-5" />} tone="teal" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-navy-900">{ind.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{ind.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section bg="ice">
        <Container>
          <SectionHeading
            eyebrow="Partner Organizations"
            title="Our Confirmed Partners."
            description="We publish partner names and logos only after partnerships are confirmed and approved."
          />
          <div className="mt-12">
            {partners.length === 0 ? (
              <EmptyState
                title="Partner details coming soon"
                description="We never display invented partner names or logos. Confirmed education, employer and recruitment partners will be listed here."
                ctaLabel="Become a Partner"
                ctaTo="/contact"
                icon={<Network className="size-6" />}
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {partners.map((p) => (
                  <Card key={p.name} tone="white" hover>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-base font-bold text-navy-900">{p.name}</h3>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Join the Network"
        title="Become Part of the CareerMesh Network."
        description="Students, institutions, employers and recruiters — there's a place for you in the network."
        ctas={[
          { label: "Become a Partner", to: "/contact" },
          { label: "Register as a Student", to: "/students/register" },
        ]}
      />
    </>
  );
}
