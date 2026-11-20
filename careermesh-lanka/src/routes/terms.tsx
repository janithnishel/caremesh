import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — CareerMesh Lanka" },
      {
        name: "description",
        content: "Terms and conditions draft for professional legal review before publication.",
      },
      { property: "og:title", content: "Terms & Conditions — CareerMesh Lanka" },
      {
        property: "og:description",
        content: "Terms and conditions draft for professional legal review before publication.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Our Services" },
  { id: "no-guarantee", title: "3. No Placement Guarantee" },
  { id: "eligibility", title: "4. Eligibility" },
  { id: "accounts", title: "5. Accounts & Workspaces" },
  { id: "fees", title: "6. Fees & Payment" },
  { id: "conduct", title: "7. User Conduct" },
  { id: "ip", title: "8. Intellectual Property" },
  { id: "liability", title: "9. Limitation of Liability" },
  { id: "termination", title: "10. Termination" },
  { id: "law", title: "11. Governing Law" },
  { id: "contact", title: "12. Contact" },
];

function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]} />
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
              <h1 className="text-display text-navy-900">Terms & Conditions</h1>
              <p className="mt-4 text-sm text-muted-foreground">Last updated: to be confirmed</p>

              <div className="mt-8 space-y-8">
                <section id="acceptance">
                  <h2 className="text-h3 text-navy-900">1. Acceptance of Terms</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    By accessing or using the {siteConfig.name} website and services, you agree to
                    these Terms & Conditions. This is a draft provided for professional legal
                    review.
                  </p>
                </section>

                <section id="services">
                  <h2 className="text-h3 text-navy-900">2. Our Services</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {siteConfig.name} provides managed employability and talent services, including
                    internship programs, career development, university partnerships, recruitment
                    services and graduate talent management. Participating organizations may receive
                    access to ClientFlow CRM workspaces.
                  </p>
                </section>

                <section id="no-guarantee">
                  <h2 className="text-h3 text-navy-900">3. No Placement Guarantee</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {siteConfig.name} does not guarantee placements, internships or employment
                    outcomes. We provide preparation, coordination and opportunity matching where
                    available. Outcomes depend on many factors including candidate readiness and
                    host organization requirements. Paying for a program does not guarantee a
                    placement.
                  </p>
                </section>

                <section id="eligibility">
                  <h2 className="text-h3 text-navy-900">4. Eligibility</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Eligibility for programs depends on academic background, study status and
                    availability, subject to management approval. Specific eligibility criteria are
                    outlined on the Entry Requirements page.
                  </p>
                </section>

                <section id="accounts">
                  <h2 className="text-h3 text-navy-900">5. Accounts & Workspaces</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Participating organizations may receive dedicated ClientFlow workspaces. Access
                    permissions are managed by agreement. Workspaces do not share unrestricted data
                    between organizations. Student information shared with employers follows agreed
                    consent and access policies.
                  </p>
                </section>

                <section id="fees">
                  <h2 className="text-h3 text-navy-900">6. Fees & Payment</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Program and service fees are configurable and depend on scope. Final fees are
                    confirmed during consultation. We do not publish invented prices. Payment terms
                    are agreed before services commence.
                  </p>
                </section>

                <section id="conduct">
                  <h2 className="text-h3 text-navy-900">7. User Conduct</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    You agree to use our services lawfully and honestly, to provide accurate
                    information, and not to misuse or disrupt our services or platform.
                  </p>
                </section>

                <section id="ip">
                  <h2 className="text-h3 text-navy-900">8. Intellectual Property</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Website content, branding and the CareerMesh and ClientFlow marks are protected.
                    ClientFlow is presented as a separate technology brand. We do not alter or
                    imitate the official ClientFlow logo.
                  </p>
                </section>

                <section id="liability">
                  <h2 className="text-h3 text-navy-900">9. Limitation of Liability</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    To the extent permitted by law, {siteConfig.name} is not liable for indirect or
                    consequential losses. Specific liability limitations should be confirmed during
                    legal review.
                  </p>
                </section>

                <section id="termination">
                  <h2 className="text-h3 text-navy-900">10. Termination</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We may suspend or terminate access for breach of these terms. Specific
                    termination provisions for partnerships and workspace agreements are documented
                    in individual contracts.
                  </p>
                </section>

                <section id="law">
                  <h2 className="text-h3 text-navy-900">11. Governing Law</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    These terms are intended to be governed by the laws of Sri Lanka. Specific
                    governing law and dispute resolution provisions should be confirmed during legal
                    review.
                  </p>
                </section>

                <section id="contact">
                  <h2 className="text-h3 text-navy-900">12. Contact</h2>
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
