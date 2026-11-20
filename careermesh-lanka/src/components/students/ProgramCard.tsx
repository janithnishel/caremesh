import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Card, IconTile } from "@/components/shared/Card";
import { getIcon } from "@/lib/icons";
import type { ProgramCategory } from "@/data/programs";

/**
 * ProgramCard — an internship program category card for the programs listing.
 */
export function ProgramCard({ program }: { program: ProgramCategory }) {
  const Icon = getIcon(program.icon);
  return (
    <Link to="/students/internship-programs/$category" params={{ category: program.slug }}>
      <Card tone="white" hover className="flex h-full flex-col gap-3">
        <IconTile icon={<Icon className="size-5" />} tone="teal" />
        <h3 className="text-lg font-bold text-navy-900">{program.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{program.shortDescription}</p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800">
          Explore program <ArrowRight className="size-4" />
        </span>
      </Card>
    </Link>
  );
}
