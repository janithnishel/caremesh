import {
  Briefcase,
  BookOpen,
  MessageSquare,
  Building2,
  Network,
  Sparkles,
  Users,
  Compass,
  ListChecks,
  Handshake,
  LifeBuoy,
  Workflow,
  GraduationCap,
  Clock,
  FileText,
  ClipboardList,
  Mail,
  Cpu,
  Code2,
  LineChart,
  HardHat,
  Megaphone,
  School,
  Layers,
  CheckCircle2,
  Zap,
  Target,
  Trophy,
  TrendingUp,
  Star,
  Lightbulb,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, IconTile } from "@/components/shared/Card";
import { CTAButton } from "@/components/shared/CTAButton";

const localIcons: Record<string, LucideIcon> = {
  Briefcase,
  BookOpen,
  MessageSquare,
  Building2,
  Network,
  Sparkles,
  Users,
  Compass,
  ListChecks,
  Handshake,
  LifeBuoy,
  Workflow,
  GraduationCap,
  Clock,
  FileText,
  ClipboardList,
  Mail,
  Cpu,
  Code2,
  LineChart,
  HardHat,
  Megaphone,
  School,
  Layers,
  CheckCircle2,
  Zap,
  Target,
  Trophy,
  TrendingUp,
  Star,
  Lightbulb,
};

export function resolveIcon(name: string): LucideIcon {
  return localIcons[name] ?? Sparkles;
}

/** Alias used by the career toolkit page. */
export const resolveToolkitIcon = resolveIcon;

/**
 * BenefitGrid — reusable benefit card grid driven by data.
 * Used across student pages (why-internship, why-careermesh, host-companies).
 */
export function BenefitGrid({
  benefits,
  columns = 3,
}: {
  benefits: { icon: string; title: string; description: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-12 grid gap-6 ${cols}`}>
      {benefits.map((b) => {
        const Icon = resolveIcon(b.icon);
        return (
          <Card key={b.title} tone="white" hover className="flex h-full flex-col gap-3">
            <IconTile icon={<Icon className="size-5" />} tone="teal" />
            <h3 className="text-base font-bold text-navy-900">{b.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
          </Card>
        );
      })}
    </div>
  );
}

/**
 * RelatedLinks — related page links with the section's relevant pages.
 */
export function RelatedLinks({
  heading = "Related Pages",
  links,
}: {
  heading?: string;
  links: { label: string; to: string }[];
}) {
  return (
    <Section bg="cloud">
      <Container>
        <SectionHeading eyebrow="Explore More" title={heading} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <CTAButton
              key={l.label}
              to={l.to}
              variant="secondary"
              size="md"
              className="justify-between"
            >
              {l.label} <ArrowRight className="size-4" />
            </CTAButton>
          ))}
        </div>
      </Container>
    </Section>
  );
}
