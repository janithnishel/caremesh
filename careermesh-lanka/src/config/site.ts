/**
 * CareerMesh Lanka — Site Configuration
 * Single source of truth for brand name, taglines, contact and social links.
 * Contact fields are null until supplied by the owner — never display invented ones.
 */
export const siteConfig = {
  name: "CareerMesh Lanka",
  legalName: "CareerMesh Lanka",
  // Working name — changeable globally from this file without editing components.
  tagline: "Connecting Talent, Education & Industry",
  secondaryTagline: "From Academic Potential to Professional Success",
  technologyBrand: "ClientFlow CRM",
  technologyBadge: "Powered by ClientFlow CRM",
  url: "https://careermesh.lk",
  locale: "en_LK",
  country: "Sri Lanka",
  description:
    "CareerMesh Lanka connects students, educational institutions, employers and graduate recruiters through professional career services, industry partnerships and ClientFlow-powered business technology.",
  // Contact details — null until supplied. Do not display invented values.
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
    whatsapp: null as string | null,
  },
  social: {
    linkedin: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
    x: null as string | null,
    youtube: null as string | null,
  },
  // Legal pages are drafts for professional legal review before publication.
  legalDraftNotice:
    "This document is a draft provided for professional legal review before publication. It is not certified legal advice and has not been verified for compliance.",
} as const;

export type SiteConfig = typeof siteConfig;
