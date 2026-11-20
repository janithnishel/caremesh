import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "../shared/Container";
import { Logo } from "../shared/Logo";
import { CTAButton } from "../shared/CTAButton";
import { cn } from "@/lib/utils";
import { primaryNav, headerCtas, type MegaMenu, type TopNavItem } from "@/data/navigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeMegaItem = primaryNav.find((item) => item.mega && activeMega === item.label);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMega = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMega(null), 180);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-transparent bg-card/95 backdrop-blur transition-all duration-200",
          scrolled && "border-border shadow-[var(--shadow-e1)]",
        )}
      >
        <Container className="relative flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <Link to="/" aria-label="CareerMesh Lanka home" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => item.mega && openMega(item.label)}
                onMouseLeave={scheduleClose}
                onFocus={() => item.mega && openMega(item.label)}
              >
                <Link
                  to={item.to as never}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    activeMega === item.label
                      ? "bg-navy-50 text-teal-700"
                      : "text-navy-900 hover:bg-navy-50 hover:text-teal-700",
                  )}
                  aria-expanded={item.mega ? activeMega === item.label : undefined}
                  aria-haspopup={item.mega ? "true" : undefined}
                >
                  {item.label}
                  {item.mega && <ChevronDown className="size-3.5 opacity-60" aria-hidden="true" />}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <CTAButton to={headerCtas.secondary.to} variant="ghost" size="sm">
              {headerCtas.secondary.label}
            </CTAButton>
            <CTAButton to={headerCtas.primary.to} variant="primary" size="sm">
              {headerCtas.primary.label}
            </CTAButton>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-navy-900 hover:bg-navy-50 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          {/* Desktop full-width mega menu pinned to header container */}
          {activeMegaItem?.mega && (
            <MegaMenuPanel
              mega={activeMegaItem.mega}
              item={activeMegaItem}
              onClose={() => setActiveMega(null)}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            />
          )}
        </Container>
      </header>

      {/* Mobile drawer — rendered outside the header so position:fixed resolves to
        the viewport, not the containing block created by the header's backdrop-blur. */}
      {mobileOpen && <MobileDrawer />}
    </>
  );
}

function MegaMenuPanel({
  mega,
  item,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  mega: MegaMenu;
  item: TopNavItem;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const toneBg: Record<string, string> = {
    students: "bg-mint",
    education: "bg-ice",
    employers: "bg-cloud",
    recruiters: "bg-navy-50",
    platform: "bg-cyan-50",
  };
  return (
    <div
      className="absolute inset-x-5 md:inset-x-8 lg:inset-x-10 top-full z-50 pt-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-e3)]"
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
        }}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-9 p-5 lg:p-6">
            <p className="mb-4 text-sm text-muted-foreground">{mega.intro}</p>
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-6">
              {mega.columns.map((col) => (
                <div key={col.heading}>
                  <p className="mb-3 text-eyebrow text-teal-700">{col.heading}</p>
                  <ul className="space-y-2.5">
                    {col.items.map((leaf) => (
                      <li key={leaf.label}>
                        <Link
                          to={leaf.to as never}
                          className="group block rounded-md p-1.5 -m-1.5 hover:bg-muted"
                        >
                          <span className="block text-sm font-semibold text-navy-900 group-hover:text-teal-700">
                            {leaf.label}
                          </span>
                          {leaf.description && (
                            <span className="block text-xs text-muted-foreground">
                              {leaf.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={cn("col-span-3 p-6", toneBg[mega.featured.tone])}>
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-h4 text-navy-900">{mega.featured.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{mega.featured.description}</p>
              </div>
              <Link
                to={mega.featured.to as never}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                {mega.featured.cta}
                <ChevronDown className="size-3.5 -rotate-90" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDrawer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  return (
    <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-card pb-20 lg:hidden">
      <nav className="px-5 py-6" aria-label="Mobile">
        <ul className="space-y-1">
          {primaryNav.map((item) => (
            <li key={item.label} className="border-b border-border">
              {item.mega ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-navy-900"
                    onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                    aria-expanded={openSection === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 transition-transform",
                        openSection === item.label && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {openSection === item.label && (
                    <ul className="space-y-0.5 pb-4">
                      <li className="mb-1">
                        <Link
                          to={item.to as never}
                          className="block rounded-md bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-700"
                        >
                          {item.label} overview
                        </Link>
                      </li>
                      {item.mega.columns.map((col) =>
                        col.items.map((leaf) => (
                          <li key={leaf.label}>
                            <Link
                              to={leaf.to as never}
                              className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-teal-700"
                            >
                              {leaf.label}
                            </Link>
                          </li>
                        )),
                      )}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.to as never}
                  className="block py-4 text-base font-semibold text-navy-900"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-border bg-card p-4">
        <CTAButton to={headerCtas.secondary.to} variant="secondary" size="md" className="flex-1">
          {headerCtas.secondary.label}
        </CTAButton>
        <CTAButton to={headerCtas.primary.to} variant="primary" size="md" className="flex-1">
          {headerCtas.primary.label}
        </CTAButton>
      </div>
    </div>
  );
}
