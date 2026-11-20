import { Card, IconTile } from "@/components/shared/Card";
import { CheckCircle2 } from "lucide-react";
import { getIcon } from "@/lib/icons";
import type { EntryRequirement } from "@/data/students";

/**
 * EligibilityCard — an entry requirement card for the requirements page.
 */
export function EligibilityCard({ requirement }: { requirement: EntryRequirement }) {
  const Icon = getIcon(requirement.icon);
  return (
    <Card tone="white" hover className="flex h-full flex-col gap-3">
      <div className="flex items-center gap-3">
        <IconTile icon={<Icon className="size-5" />} tone="teal" />
        <h3 className="text-base font-bold text-navy-900">{requirement.label}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{requirement.description}</p>
      <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-teal-700">
        <CheckCircle2 className="size-4" /> Required for assessment
      </div>
    </Card>
  );
}
