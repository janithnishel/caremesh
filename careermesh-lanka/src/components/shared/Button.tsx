import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * CareerMesh Button — premium corporate variants.
 * Heights 44px min touch, radius md, 200ms transitions, cyan-500 focus ring.
 */
const cmButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold cursor-pointer transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary action — teal-700 bg, white text, hover teal-800
        primary:
          "bg-primary text-primary-foreground shadow-[var(--shadow-e1)] hover:bg-teal-800 hover:shadow-[var(--shadow-e2)]",
        // Secondary — navy-900 outline, hover navy-50
        secondary: "border-2 border-secondary bg-transparent text-secondary hover:bg-navy-50",
        // Ghost
        ghost: "text-navy-900 hover:bg-navy-50 hover:text-navy-800",
        // On-dark — white bg, navy text
        onDark: "bg-white text-navy-900 hover:bg-navy-50 shadow-[var(--shadow-e1)]",
        // On-dark outline — white border, white text
        onDarkOutline: "border-2 border-white/80 bg-transparent text-white hover:bg-white/10",
        // Cyan — tech/ClientFlow CTA
        cyan: "bg-cyan-800 text-white hover:bg-cyan-600 shadow-[var(--shadow-e1)]",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface CMButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof cmButtonVariants> {
  asChild?: boolean;
}

const CMButton = React.forwardRef<HTMLButtonElement, CMButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(cmButtonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
CMButton.displayName = "CMButton";

export { CMButton, cmButtonVariants };
