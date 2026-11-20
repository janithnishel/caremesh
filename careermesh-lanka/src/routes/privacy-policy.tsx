import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CareerMesh Lanka" },
      {
        name: "description",
        content: "Privacy policy draft for professional legal review before publication.",
      },
      { property: "og:title", content: "Privacy Policy — CareerMesh Lanka" },
      {
        property: "og:description",
        content: "Privacy policy draft for professional legal review before publication.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  { id: "overview", title: "1. Overview" },
  { id: "information", title: "2. Information We Collect" },
  { id: "use", title: "3. How We Use Information" },
  { id: "legal-basis", title: "4. Legal Basis" },
  { id: "sharing", title: "5. Sharing & Disclosure" },
  { id: "storage", title: "6. Data Storage & Retention" },
  { id: "security", title: "7. Data Security" },
  { id: "rights", title: "8. Your Rights" },
  { id: "cookies", title: "9. Cookies" },
  { id: "children", title: "10. Children's Privacy" },
  { id: "changes", title: "11. Changes to This Policy" },
  { id: "contact", title: "12. Contact" },
];

function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      <Section bg="cloud">
        <Container>
          {/* Draft banner */}
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
              <h1 className="text-display text-navy-900">Privacy Policy</h1>
              <p className="mt-4 text-sm text-muted-foreground">Last updated: to be confirmed</p>

              <div className="mt-8 space-y-8">
                <section id="overview">
                  <h2 className="text-h3 text-navy-900">1. Overview</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {siteConfig.name} ("we", "us") respects your privacy. This policy explains how
                    we collect, use and protect personal information when you use our website and
                    services. This is a draft provided for professional legal review and should be
                    reviewed against applicable Sri Lankan data protection requirements before
                    publication.
                  </p>
                </section>

                <section id="information">
                  <h2 className="text-h3 text-navy-900">2. Information We Collect</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We may collect: contact details (name, email, phone), organization details,
                    student academic information, inquiry messages, and CV documents where
                    submitted. We collect only what is necessary to provide our services.
                  </p>
                </section>

                <section id="use">
                  <h2 className="text-h3 text-navy-900">3. How We Use Information</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We use your information to: respond to inquiries, manage applications and
                    partnerships, coordinate internships and placements, provide ClientFlow services
                    to participating organizations, and communicate with you about our services.
                  </p>
                </section>

                <section id="legal-basis">
                  <h2 className="text-h3 text-navy-900">4. Legal Basis</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We process personal information based on your consent, to fulfill our services,
                    and to comply with legal obligations. The specific legal basis under applicable
                    Sri Lankan law should be confirmed during legal review.
                  </p>
                </section>

                <section id="sharing">
                  <h2 className="text-h3 text-navy-900">5. Sharing & Disclosure</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We do not sell personal information. Student information shared with employers
                    follows agreed consent and access policies. We may share information with
                    service providers who act on our behalf under appropriate agreements. Workspaces
                    do not share unrestricted data between organizations.
                  </p>
                </section>

                <section id="storage">
                  <h2 className="text-h3 text-navy-900">6. Data Storage & Retention</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We retain personal information only as long as necessary to provide our services
                    and meet legal obligations. Specific retention periods for CVs, applications and
                    inquiry data will be documented and confirmed during legal review.
                  </p>
                </section>

                <section id="security">
                  <h2 className="text-h3 text-navy-900">7. Data Security</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect
                    personal information. CV uploads use private storage with signed URLs. Access to
                    personal data is restricted by agreement between organizations.
                  </p>
                </section>

                <section id="rights">
                  <h2 className="text-h3 text-navy-900">8. Your Rights</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    You may have rights to access, correct or delete your personal information, and
                    to withdraw consent. Specific rights under applicable Sri Lankan law should be
                    confirmed during legal review. To exercise your rights, contact us.
                  </p>
                </section>

                <section id="cookies">
                  <h2 className="text-h3 text-navy-900">9. Cookies</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We use cookies and similar technologies. See our Cookie Policy for details.
                    Analytics tracking operates only after you give consent.
                  </p>
                </section>

                <section id="children">
                  <h2 className="text-h3 text-navy-900">10. Children's Privacy</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Our services are intended for students and graduates, typically aged 18 and
                    above. We do not knowingly collect personal information from children. This
                    should be confirmed during legal review.
                  </p>
                </section>

                <section id="changes">
                  <h2 className="text-h3 text-navy-900">11. Changes to This Policy</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We may update this policy from time to time. We will notify users of significant
                    changes. The effective date will be updated upon publication.
                  </p>
                </section>

                <section id="contact">
                  <h2 className="text-h3 text-navy-900">12. Contact</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Contact details will be displayed here once supplied in configuration. We never
                    publish invented contact information.
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
