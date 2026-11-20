import { cn } from "@/lib/utils";
import { SampleBadge } from "./Badge";

/**
 * ImageSlot — fixed aspect ratio, alt brief, tinted placeholder.
 * Every photo location is an ImageSlot so the owner/photographer can
 * supply real assets later. Placeholder shows the shot description.
 */
export function ImageSlot({
  ratio = "4/3",
  brief,
  label,
  tone = "teal",
  className,
  src,
  alt,
}: {
  ratio?: string;
  brief?: string;
  label?: string;
  tone?: "teal" | "cyan" | "navy" | "amber";
  className?: string;
  src?: string;
  alt?: string;
}) {
  const toneMap: Record<string, string> = {
    teal: "from-teal-50 to-mint text-teal-800",
    cyan: "from-cyan-50 to-cyan-100 text-cyan-800",
    navy: "from-navy-50 to-ice text-navy-700",
    amber: "from-amber-50 to-amber-100 text-amber-700",
  };

  return (
    <div
      className={cn("relative overflow-hidden rounded-xl border border-border bg-muted", className)}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? brief ?? "CareerMesh image"}
          loading="lazy"
          className="size-full object-cover"
        />
      ) : (
        <div
          className={cn(
            "flex size-full flex-col items-center justify-center gap-2 bg-linear-to-br p-6 text-center",
            toneMap[tone],
          )}
        >
          <svg viewBox="0 0 48 48" fill="none" className="size-8 opacity-40" aria-hidden="true">
            <rect
              x="6"
              y="10"
              width="36"
              height="28"
              rx="4"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="18" cy="22" r="3.5" fill="currentColor" opacity="0.6" />
            <path
              d="M10 34l9-9 6 6 8-8 5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {brief && <p className="text-xs font-medium leading-snug opacity-70">{brief}</p>}
          {label && <SampleBadge className="absolute left-3 top-3" label={label} />}
        </div>
      )}
    </div>
  );
}
