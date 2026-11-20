import { Link } from "@tanstack/react-router";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaLinkVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold cursor-pointer transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[var(--shadow-e1)] hover:bg-teal-800 hover:shadow-[var(--shadow-e2)]",
        secondary: "border-2 border-secondary bg-transparent text-secondary hover:bg-navy-50",
        ghost: "text-navy-900 hover:bg-navy-50 hover:text-navy-800",
        onDark: "bg-white text-navy-900 hover:bg-navy-50 shadow-[var(--shadow-e1)]",
        onDarkOutline: "border-2 border-white/80 bg-transparent text-white hover:bg-white/10",
        cyan: "bg-cyan-800 text-white hover:bg-cyan-600 shadow-[var(--shadow-e1)]",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type CTAVariant = VariantProps<typeof ctaLinkVariants>["variant"];
export type CTASize = VariantProps<typeof ctaLinkVariants>["size"];

type CTAButtonProps = {
  to: string;
  params?: Record<string, string>;
  variant?: CTAVariant;
  size?: CTASize;
  className?: string;
  children: React.ReactNode;
};

export function CTAButton({ to, params, variant, size, className, children }: CTAButtonProps) {
  return (
    <Link
      to={to as never}
      params={params as never}
      className={cn(ctaLinkVariants({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}

/** Group of CTAs with consistent gap. */
export function CTAGroup({
  children,
  className,
  align = "start",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

export const ctaRaw = ctaLinkVariants;

export function CTARaw({
  asChild,
  variant,
  size,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: CTAVariant;
  size?: CTASize;
}) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(ctaLinkVariants({ variant, size }), className)} {...props} />;
}
