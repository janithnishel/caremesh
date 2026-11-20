import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const STORAGE_KEY = "cm-cookie-consent";

/**
 * CookieConsent — bottom banner shown until the user accepts or declines.
 * Stores the choice in localStorage. No analytics or tracking scripts load
 * until consent is given (and none ship with this build — the analytics
 * placeholder is documented in docs/content-inputs-needed.md).
 */
export function CookieConsent() {
  const [choice, setChoice] = useState<"accepted" | "declined" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined") {
        setChoice(stored);
      }
    } catch {
      // localStorage unavailable — leave banner visible.
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    setChoice(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
  };

  if (!mounted || choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-navy-950 text-white shadow-[var(--shadow-e3)]"
    >
      <div className="mx-auto flex max-w-[80rem] flex-col items-start gap-4 px-5 py-5 md:flex-row md:items-center md:gap-6 md:px-10">
        <div className="flex flex-1 items-start gap-3">
          <Cookie className="mt-0.5 size-5 shrink-0 text-teal-400" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-white/80">
            We use cookies to improve your experience and understand how the site is used. Analytics
            cookies run only after you give consent. See our{" "}
            <Link to="/cookie-policy" className="font-semibold text-teal-400 hover:text-teal-300">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="inline-flex h-10 items-center justify-center rounded-md border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="inline-flex h-10 items-center justify-center rounded-md bg-teal-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
          >
            Accept
          </button>
          <button
            type="button"
            aria-label="Dismiss cookie banner"
            onClick={() => decide("declined")}
            className="ml-1 inline-flex size-10 items-center justify-center rounded-md text-white/60 hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
      <span className="sr-only">{siteConfig.name} cookie consent</span>
    </div>
  );
}
