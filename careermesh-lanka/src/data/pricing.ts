/**
 * Pricing — single source of truth. No invented final prices.
 * Student program fees and recruitment fees use "Request a Quote" or
 * configurable ranges. ClientFlow packages have feature lists but
 * prices come from config (null = not published).
 */

export type PricingItem = {
  label: string;
  description: string;
  priceNote: string; // e.g. "Request a Quote", "From LKR 25,000", or "Contact us"
  features: string[];
  ctaLabel: string;
  ctaTo: string;
  highlight?: boolean;
};

/** Student program fees. Do not invent final prices. */
export const studentProgramFees: PricingItem[] = [
  {
    label: "Internship Program",
    description:
      "Core program including consultation, preparation, placement coordination and progress support.",
    priceNote: "Request a Quote",
    features: [
      "Consultation and profile review",
      "CV preparation support",
      "Interview preparation",
      "Placement coordination",
      "Progress reviews",
      "Completion documentation",
    ],
    ctaLabel: "Register your interest",
    ctaTo: "/students/register",
    highlight: true,
  },
  {
    label: "Career Development Add-on",
    description: "Optional career development modules beyond the core program.",
    priceNote: "Request a Quote",
    features: [
      "Personal branding workshop",
      "Communication skills module",
      "Advanced interview preparation",
      "Workplace readiness session",
    ],
    ctaLabel: "Enquire about add-ons",
    ctaTo: "/contact",
  },
];

export const studentPaymentOptions = [
  "Bank transfer",
  "Card payment",
  "Installment plans (where available)",
];

/** Employer recruitment pricing. No invented public prices. */
export const employerPricing: PricingItem[] = [
  {
    label: "Placement Fee",
    description: "Fee per successful intern placement coordinated through CareerMesh.",
    priceNote: "Request a Quote",
    features: [
      "Candidate sourcing and screening",
      "Interview coordination",
      "Placement confirmation",
    ],
    ctaLabel: "Hire an intern",
    ctaTo: "/employers/hire-an-intern",
    highlight: true,
  },
  {
    label: "Recruitment Project Fee",
    description: "Project-based recruitment for defined hiring requirements.",
    priceNote: "Request a Quote",
    features: [
      "Dedicated recruitment support",
      "Shortlisting",
      "Interview scheduling",
      "Hiring coordination",
    ],
    ctaLabel: "Request a quote",
    ctaTo: "/employers/hire-an-intern",
  },
  {
    label: "Monthly Recruitment Support",
    description: "Ongoing recruitment support on a monthly engagement.",
    priceNote: "Request a Quote",
    features: ["Continuous candidate pipeline", "Regular shortlisting", "Ongoing coordination"],
    ctaLabel: "Discuss options",
    ctaTo: "/contact",
  },
  {
    label: "Custom Corporate Agreements",
    description: "Tailored agreements for larger or ongoing hiring needs.",
    priceNote: "Contact us",
    features: ["Customized scope", "Volume arrangements", "Dedicated account support"],
    ctaLabel: "Contact us",
    ctaTo: "/contact",
  },
];

/** ClientFlow CRM packages. Prices from config — null means not published. */
export type ClientFlowPackage = {
  name: string;
  tagline: string;
  priceNote: string;
  features: string[];
  userLimit: string;
  workspace: string;
  automation: string;
  integrations: string;
  support: string;
  implementation: string;
  ctaLabel: string;
  ctaTo: string;
  highlight?: boolean;
};

export const clientFlowPackages: ClientFlowPackage[] = [
  {
    name: "Starter",
    tagline: "For small teams getting started with CRM.",
    priceNote: "Request a Quote",
    features: ["Contact management", "Basic pipelines", "Email integration", "Standard reports"],
    userLimit: "Up to 5 users",
    workspace: "1 configured workspace",
    automation: "Basic workflows",
    integrations: "Standard integrations",
    support: "Email support",
    implementation: "Guided setup",
    ctaLabel: "Book a demo",
    ctaTo: "/platform/book-demo",
  },
  {
    name: "Professional",
    tagline: "For growing teams managing active pipelines.",
    priceNote: "Request a Quote",
    features: [
      "Everything in Starter",
      "Advanced pipelines",
      "Automation workflows",
      "Interview scheduling",
      "Custom reports",
    ],
    userLimit: "Up to 20 users",
    workspace: "1 configured workspace",
    automation: "Advanced workflows",
    integrations: "Extended integrations",
    support: "Priority email support",
    implementation: "Onboarding session",
    ctaTo: "/platform/book-demo",
    ctaLabel: "Book a demo",
    highlight: true,
  },
  {
    name: "Business",
    tagline: "For organizations running multiple talent programs.",
    priceNote: "Request a Quote",
    features: [
      "Everything in Professional",
      "Multiple pipelines",
      "Campaign management",
      "Configured AI assistance",
      "Advanced analytics",
    ],
    userLimit: "Up to 50 users",
    workspace: "Up to 3 configured workspaces",
    automation: "Full workflow automation",
    integrations: "Custom integrations",
    support: "Dedicated support channel",
    implementation: "Implementation support",
    ctaLabel: "Book a demo",
    ctaTo: "/platform/book-demo",
  },
  {
    name: "Enterprise",
    tagline: "For large organizations with custom requirements.",
    priceNote: "Contact us",
    features: [
      "Everything in Business",
      "Unlimited workspaces",
      "Custom AI development",
      "Dedicated account management",
      "SLA support",
    ],
    userLimit: "Custom",
    workspace: "Custom workspace configuration",
    automation: "Custom automation",
    integrations: "Bespoke integrations",
    support: "Dedicated account manager",
    implementation: "Full implementation program",
    ctaLabel: "Contact us",
    ctaTo: "/contact",
  },
];
