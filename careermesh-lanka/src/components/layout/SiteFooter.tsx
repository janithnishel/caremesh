import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "../shared/Container";
import { Logo } from "../shared/Logo";
import { siteConfig } from "@/config/site";
import { footerNav, legalNav } from "@/data/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  ].filter((s) => s.href);

  return (
    <footer className="bg-navy-950 text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Logo onDark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Connecting students, educational institutions, employers and graduate recruiters
              through meaningful career services and technology-enabled partnerships.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.length > 0 ? (
                socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href as string}
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <s.icon className="size-4" aria-hidden="true" />
                  </a>
                ))
              ) : (
                <p className="text-xs text-white/40">
                  Social links will appear here once configured.
                </p>
              )}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 text-eyebrow text-teal-400">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to as never}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          {siteConfig.contact.email && (
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <Mail className="size-4 text-teal-400" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
          )}
          {siteConfig.contact.phone && (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <Phone className="size-4 text-teal-400" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
          )}
          {siteConfig.contact.address && (
            <p className="flex items-center gap-2 text-sm text-white/70">
              <MapPin className="size-4 text-teal-400" aria-hidden="true" />
              {siteConfig.contact.address}
            </p>
          )}
          {!siteConfig.contact.email &&
            !siteConfig.contact.phone &&
            !siteConfig.contact.address && (
              <p className="text-sm text-white/40">
                Contact details will appear here once supplied.
              </p>
            )}
        </div>

        {/* Legal bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {legalNav.map((item) => (
              <Link
                key={item.label}
                to={item.to as never}
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/70">
              <span className="size-1.5 rounded-full bg-teal-500" aria-hidden="true" />
              {siteConfig.technologyBadge}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
