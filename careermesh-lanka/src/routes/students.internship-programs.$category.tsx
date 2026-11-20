import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  BookOpen,
  Layers,
  Building2,
  ClipboardCheck,
  Compass,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/shared/Card";
import { getIcon } from "@/lib/icons";
import { getProgramCategory, programCategories } from "@/data/programs";

export const Route = createFileRoute("/students/internship-programs/$category")({
  head: ({ params }) => {
    const category = getProgramCategory(params.category);
    const title = category
      ? `${category.title} Internship Program — CareerMesh Lanka`
      : "Internship Program — CareerMesh Lanka";
    const desc = category?.shortDescription ?? "Internship program category details.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  loader: ({ params }) => {
    if (!getProgramCategory(params.category)) {
      throw notFound();
    }
    return null;
  },
  component: ProgramCategoryPage,
  notFoundComponent: () => <ProgramNotFound />,
  errorComponent: ({ error }) => (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <p className="text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function ProgramCategoryPage() {
  const { category } = Route.useParams();
  const program = getProgramCategory(category);

  if (!program) {
    throw notFound();
  }

  const Icon = getIcon(program.icon);
  const related = programCategories.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Students & Graduates", to: "/students-graduates" },
          { label: "Internship Programs", to: "/students/internship-programs" },
          { label: program.title },
        ]}
      />
      <PageHero
        tone="students"
        eyebrow="Internship Program"
        title={`${program.title}`}
        description={program.shortDescription}
        visual={
          <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-8 text-center shadow-[var(--shadow-e2)]">
            <div className="flex size-16 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <Icon className="size-8" />
            </div>
            <p className="text-sm font-semibold text-navy-900">{program.title}</p>
            <p className="text-xs text-muted-foreground">Internship program category</p>
          </div>
        }
      />

      <Section bg="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <DetailBlock icon={<BookOpen className="size-5" />} title="What You Can Learn">
                  <ul className="space-y-2">
                    {program.whatYouLearn.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock
                  icon={<Compass className="size-5" />}
                  title="Suitable Academic Backgrounds"
                >
                  <div className="flex flex-wrap gap-2">
                    {program.academicBackgrounds.map((bg) => (
                      <span
                        key={bg}
                        className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-teal-800"
                      >
                        {bg}
                      </span>
                    ))}
                  </div>
                </DetailBlock>

                <DetailBlock
                  icon={<Briefcase className="size-5" />}
                  title="Example Professional Tasks"
                >
                  <ul className="space-y-2">
                    {program.exampleTasks.map((task) => (
                      <li
                        key={task}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock icon={<Layers className="size-5" />} title="Skills Developed">
                  <div className="flex flex-wrap gap-2">
                    {program.skillsDeveloped.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </DetailBlock>

                <DetailBlock
                  icon={<Building2 className="size-5" />}
                  title="Possible Work Environments"
                >
                  <ul className="space-y-2">
                    {program.workEnvironments.map((env) => (
                      <li
                        key={env}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                        {env}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock
                  icon={<ClipboardCheck className="size-5" />}
                  title="Application Requirements"
                >
                  <ul className="space-y-2">
                    {program.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock icon={<Compass className="size-5" />} title="How to Register Interest">
                  <ol className="space-y-3">
                    {program.howToRegister.map((step, i) => (
                      <li
                        key={step}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </DetailBlock>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-4">
                <Card tone="mint" className="space-y-4">
                  <h3 className="text-base font-bold text-navy-900">
                    Interested in {program.title}?
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Register your interest and we'll guide you through preparation and opportunity
                    matching in this field.
                  </p>
                  <Link
                    to="/students/register"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal-800"
                  >
                    Register Interest <ArrowRight className="size-4" />
                  </Link>
                </Card>
                <Card tone="white">
                  <h3 className="text-sm font-bold text-navy-900">Important note</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Opportunities depend on host company requirements and availability. We do not
                    list a field as available unless a suitable opportunity is verified.
                  </p>
                </Card>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section bg="cloud">
        <Container>
          <SectionHeading eyebrow="Other Programs" title="Explore Other Fields." />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((p) => {
              const RIcon = getIcon(p.icon);
              return (
                <Link
                  key={p.slug}
                  to="/students/internship-programs/$category"
                  params={{ category: p.slug }}
                >
                  <Card tone="white" hover className="flex h-full flex-col gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <RIcon className="size-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-900">{p.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {p.shortDescription}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Get Started"
        title={`Ready to Explore ${program.title}?`}
        description="Register your interest today and take the first step toward real-world professional experience."
        ctas={[{ label: "Register Now", to: "/students/register" }]}
      />
    </>
  );
}

function DetailBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)]">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
          {icon}
        </div>
        <h2 className="text-lg font-bold text-navy-900">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function ProgramNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow text-teal-700">Program not found</p>
        <h1 className="mt-3 text-display text-navy-900">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We couldn't find that internship program category.
        </p>
        <Link
          to="/students/internship-programs"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-teal-800"
        >
          View all programs
        </Link>
      </div>
    </div>
  );
}
