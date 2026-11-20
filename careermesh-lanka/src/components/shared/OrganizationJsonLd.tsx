import { siteConfig } from "@/config/site";

/**
 * OrganizationJsonLd — Organization structured data for the homepage.
 * Contact fields are omitted until supplied (never invented).
 */
export function OrganizationJsonLd() {
  const json: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "Sri Lanka",
  };
  if (siteConfig.contact.email) json["email"] = siteConfig.contact.email;
  if (siteConfig.contact.phone) json["telephone"] = siteConfig.contact.phone;
  if (siteConfig.social.linkedin) json["sameAs"] = [siteConfig.social.linkedin];

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
