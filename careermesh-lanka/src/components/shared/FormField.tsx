import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

/**
 * FormField — visible label (never placeholder-only), helper text,
 * inline error with icon, success state. 48px height inputs.
 */
export function FormField({
  label,
  htmlFor,
  error,
  success,
  helper,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  success?: string | undefined;
  helper?: string | undefined;
  required?: boolean | undefined;
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-navy-900">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      {children}
      {helper && !error && !success && <p className="text-xs text-muted-foreground">{helper}</p>}
      {error && (
        <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
          <AlertCircle className="size-3.5" /> {error}
        </p>
      )}
      {success && !error && (
        <p className="flex items-center gap-1.5 text-xs font-medium text-success">
          <CheckCircle2 className="size-3.5" /> {success}
        </p>
      )}
    </div>
  );
}
