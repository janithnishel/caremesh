import { cn } from "@/lib/utils";

/**
 * Container — max 1280px, responsive horizontal padding.
 * px: 20 mobile, 32 tablet, 40 desktop.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[80rem] px-5 md:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}

/**
 * Section — section rhythm with alternating background surfaces.
 */
export function Section({
  className,
  children,
  bg = "cloud",
  id,
}: {
  className?: string;
  children: React.ReactNode;
  bg?: "cloud" | "white" | "ice" | "mint" | "cyan" | "dark" | "transparent";
  id?: string;
}) {
  const bgMap: Record<string, string> = {
    cloud: "bg-background",
    white: "bg-card",
    ice: "bg-ice",
    mint: "bg-mint",
    cyan: "bg-cyan-50",
    dark: "bg-navy-950 text-white",
    transparent: "",
  };
  return (
    <section id={id} className={cn("py-14 md:py-[4.5rem] lg:py-24", bgMap[bg], className)}>
      {children}
    </section>
  );
}
