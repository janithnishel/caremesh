import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; to?: string };

/**
 * Breadcrumbs — semantic nav with BreadcrumbList structured data.
 */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.to ? { item: item.to } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={cn("border-b border-border bg-card", className)}>
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-1.5">
                {item.to && !last ? (
                  <Link to={item.to as never} className="hover:text-teal-700">
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={cn(last && "font-medium text-navy-900")}
                    aria-current={last ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
                {!last && (
                  <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
