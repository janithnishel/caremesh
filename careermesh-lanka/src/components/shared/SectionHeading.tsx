import { cn } from "@/lib/utils";

/**
 * SectionHeading — eyebrow, H2, supporting paragraph (max 60ch), optional CTA row.
 * The standard section pattern across the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
}) {
  const eyebrowColor = tone === "dark" ? "text-teal-400" : "text-teal-700";
  const titleColor = tone === "dark" ? "text-white" : "text-navy-900";
  const descColor = tone === "dark" ? "text-white/70" : "text-muted-foreground";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <p className={cn("text-eyebrow", eyebrowColor)}>{eyebrow}</p>}
      <h2 className={cn("text-h2 max-w-3xl", titleColor, align === "center" && "mx-auto")}>
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-[60ch] text-base leading-relaxed md:text-lg", descColor)}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
