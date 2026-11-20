import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, MapPin, Briefcase, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { OpportunitiesEmptyState } from "@/components/shared/EmptyState";
import { Card } from "@/components/shared/Card";

export const Route = createFileRoute("/students/internship-opportunities")({
  head: () => ({
    meta: [
      { title: "Internship Opportunities — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Browse verified internship opportunities by industry, location and work mode. No active opportunities listed yet — register your interest to receive updates.",
      },
      { property: "og:title", content: "Internship Opportunities — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Browse verified internship opportunities by industry, location and work mode. No active opportunities listed yet — register your interest to receive updates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InternshipOpportunitiesPage,
});

function InternshipOpportunitiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Internship Opportunities" },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="For Students"
        title="Internship Opportunities."
        description="Browse verified internship opportunities by industry, location, work mode, duration and application status. We only list opportunities that have been verified — no fabricated vacancies."
      />
      <Section bg="white">
        <Container>
          {/* Filter bar (visual only — no fake results) */}
          <div className="rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-e1)] md:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="search" className="text-xs font-semibold text-navy-900">
                  Search
                </label>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="search"
                    type="search"
                    placeholder="Search opportunities..."
                    className="h-12 w-full rounded-sm border border-input bg-card pl-10 pr-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <FilterSelect
                icon={<Briefcase className="size-3.5" />}
                label="Industry"
                options={[
                  "All Industries",
                  "IT & Software",
                  "Finance & Accounting",
                  "Engineering",
                  "Business",
                  "Marketing",
                  "HR",
                  "Hospitality",
                ]}
              />
              <FilterSelect
                icon={<MapPin className="size-3.5" />}
                label="Location"
                options={["All Locations", "Colombo", "Kandy", "Galle", "Remote"]}
              />
              <FilterSelect
                icon={<Clock className="size-3.5" />}
                label="Work Mode"
                options={["All Modes", "On-site", "Remote", "Hybrid"]}
              />
            </div>
          </div>

          {/* Empty state — no verified vacancies */}
          <div className="mt-12">
            <SectionHeading
              eyebrow="Current Openings"
              title="No Active Opportunities Right Now."
              description="We only publish verified internship opportunities. When host companies confirm openings, they appear here."
            />
            <div className="mt-8">
              <OpportunitiesEmptyState ctaTo="/students/register" />
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading eyebrow="How It Works" title="How Opportunities Become Available." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Host Companies Submit Roles",
                d: "Employers share verified internship requirements with us.",
              },
              {
                t: "We Match Prepared Students",
                d: "We match suitable candidates from our prepared student pool.",
              },
              {
                t: "You Get Notified",
                d: "Registered students receive updates when relevant opportunities open.",
              },
            ].map((s) => (
              <Card key={s.t} tone="white" hover className="flex h-full flex-col gap-2">
                <h3 className="text-base font-bold text-navy-900">{s.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/students/register"
              className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Register to receive updates <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Stay Informed"
        title="Be the First to Know."
        description="Register your interest and we'll notify you when relevant opportunities become available."
        ctas={[
          { label: "Register Your Interest", to: "/students/register" },
          { label: "Explore Programs", to: "/students/internship-programs" },
        ]}
      />
    </>
  );
}

function FilterSelect({
  icon,
  label,
  options,
}: {
  icon: React.ReactNode;
  label: string;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={label}
        className="flex items-center gap-1 text-xs font-semibold text-navy-900"
      >
        {icon} {label}
      </label>
      <select
        id={label}
        className="h-12 w-full rounded-sm border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        defaultValue={options[0]}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
