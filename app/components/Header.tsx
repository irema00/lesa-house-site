"use client";
import { useEffect, useState } from "react";
import { site } from "../content/site";
import { ui } from "../ui";
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={`absolute left-0 top-0 block h-0.5 w-5 bg-black transition ${
          open ? "translate-y-1.75 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1.75 block h-0.5 w-5 bg-black transition ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-3.5 block h-0.5 w-5 bg-black transition ${
          open ? "translate-y-1.75 -rotate-45" : ""
        }`}
      />
    </span>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header className={ui.headerWrap}>
      <div className={`${ui.container} flex h-16 items-center justify-between`}>
        {/* Logo */}
        <a
          href="#home"
          className="flex items-baseline gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          aria-label="Go to top"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-2xl tracking-tight text-[#1C1C1C] whitespace-nowrap">
            {site.brand.name}
          </span>

          {/* Tablet+ (>=768): tagline yan yana */}
          <span className="hidden md:inline text-[10px] tracking-[0.14em] text-muted translate-y-px whitespace-nowrap">
            {site.brand.tagline}
          </span>
        </a>

        {/* Desktop nav + CTA (>=1024) */}
        <nav
          className="hidden items-center gap-5 sm:flSex"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${ui.navLink} ${ui.navLinkUnderline} text-xs`}
            >
              {item.label}
            </a>
          ))}
          <a href={site.headerCta.href} className={ui.btnGold}>
            {site.headerCta.label}
          </a>
        </nav>

        {/* Mobile/Tablet hamburger (<1024) */}
        <div className="only-phone">
          <button
            type="button"
            className={ui.iconBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet dropdown panel */}
      {open && (
        <div className="only-phone">
          <div className={ui.mobilePanel}>
            <div className={`${ui.container} py-3`}>
              <div className="grid gap-2">
                {site.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={ui.mobileLink}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={site.headerCta.href}
                  className={`${ui.btnGold} w-full`}
                  onClick={() => setOpen(false)}
                >
                  {site.headerCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
