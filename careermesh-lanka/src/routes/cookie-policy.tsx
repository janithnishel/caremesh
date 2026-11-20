import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — CareerMesh Lanka" },
      {
        name: "description",
        content: "Cookie policy draft for professional legal review before publication.",
      },
      { property: "og:title", content: "Cookie Policy — CareerMesh Lanka" },
      {
        property: "og:description",
        content: "Cookie policy draft for professional legal review before publication.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CookiePolicyPage,
});

const sections = [
  { id: "what", title: "1. What Are Cookies" },
  { id: "how", title: "2. How We Use Cookies" },
  { id: "types", title: "3. Types of Cookies" },
  { id: "analytics", title: "4. Analytics" },
  { id: "manage", title: "5. Managing Cookies" },
  { id: "changes", title: "6. Changes" },
  { id: "contact", title: "7. Contact" },
];

function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Cookie Policy" }]} />
      <Section bg="cloud">
        <Container>
          <div className="mb-8 flex items-start gap-3 rounded-lg border border-amber-400/40 bg-amber-50 px-5 py-4">
            <AlertTriangle className="size-5 shrink-0 text-amber-700" />
            <p className="text-sm leading-relaxed text-amber-700">
              <span className="font-bold">Draft for legal review.</span>{" "}
              {siteConfig.legalDraftNotice}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <p className="text-sm font-bold text-navy-900">Contents</p>
                <ol className="mt-3 space-y-1.5">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-muted-foreground hover:text-teal-700"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <h1 className="text-display text-navy-900">Cookie Policy</h1>
              <p className="mt-4 text-sm text-muted-foreground">Last updated: to be confirmed</p>

              <div className="mt-8 space-y-8">
                <section id="what">
                  <h2 className="text-h3 text-navy-900">1. What Are Cookies</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Cookies are small text files stored on your device when you visit a website.
                    They help the site remember your preferences and understand how it is used.
                  </p>
                </section>

                <section id="how">
                  <h2 className="text-h3 text-navy-900">2. How We Use Cookies</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {siteConfig.name} uses cookies to operate the website, remember your consent
                    choices, and — only with your consent — measure usage through analytics.
                  </p>
                </section>

                <section id="types">
                  <h2 className="text-h3 text-navy-900">3. Types of Cookies</h2>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-muted-foreground">
                    <li>
                      <span className="font-semibold text-navy-900">Essential cookies:</span>{" "}
                      required for the website to function. These do not require consent.
                    </li>
                    <li>
                      <span className="font-semibold text-navy-900">Preference cookies:</span>{" "}
                      remember your choices, such as cookie consent.
                    </li>
                    <li>
                      <span className="font-semibold text-navy-900">Analytics cookies:</span> help
                      us understand how the site is used. These run only after you give consent.
                    </li>
                  </ul>
                </section>

                <section id="analytics">
                  <h2 className="text-h3 text-navy-900">4. Analytics</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We do not run analytics tracking before you consent. When enabled, analytics
                    helps us improve the website. No tracking occurs without consent.
                  </p>
                </section>

                <section id="manage">
                  <h2 className="text-h3 text-navy-900">5. Managing Cookies</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    You can manage or delete cookies through your browser settings. Disabling
                    cookies may affect some features of the website. You can also change your
                    consent choices using the cookie banner.
                  </p>
                </section>

                <section id="changes">
                  <h2 className="text-h3 text-navy-900">6. Changes</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We may update this policy from time to time. The effective date will be updated
                    upon publication.
                  </p>
                </section>

                <section id="contact">
                  <h2 className="text-h3 text-navy-900">7. Contact</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Contact details will be displayed here once supplied in configuration.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
