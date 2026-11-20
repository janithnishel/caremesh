import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

/**
 * FAQAccordion — searchable accordion grouped by category.
 * Renders FAQPage structured data only when `structuredData` is true
 * and the FAQs are real (not demo).
 */
export type FAQItem = { question: string; answer: string };
export type FAQGroup = { category: string; items: FAQItem[] };

export function FAQAccordion({
  groups,
  searchable = true,
  structuredData = false,
  className,
}: {
  groups: FAQGroup[];
  searchable?: boolean;
  structuredData?: boolean;
  className?: string;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return groups;
    const q = query.toLowerCase();
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (i) => i.question.toLowerCase().includes(q) || i.answer.toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, query]);

  return (
    <div className={className}>
      {searchable && (
        <div className="relative mb-8 max-w-md">
          <Search
            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search questions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 pl-10"
            aria-label="Search frequently asked questions"
          />
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border-strong bg-card px-6 py-10 text-center text-muted-foreground">
          No questions match your search.
        </p>
      ) : (
        <div className="space-y-8">
          {filtered.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-h3 text-navy-900">{group.category}</h3>
              <Accordion
                type="single"
                collapsible
                className="rounded-lg border border-border bg-card"
              >
                {group.items.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${group.category}-${idx}`}
                    className="border-b border-border last:border-b-0"
                  >
                    <AccordionTrigger className="px-5 text-left text-base font-semibold text-navy-900 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      )}

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: groups.flatMap((g) =>
                g.items.map((i) => ({
                  "@type": "Question",
                  name: i.question,
                  acceptedAnswer: { "@type": "Answer", text: i.answer },
                })),
              ),
            }),
          }}
        />
      )}
    </div>
  );
}
