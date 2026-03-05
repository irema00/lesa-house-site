"use client";

import { site } from "../content/site";
import { ui } from "../ui";

export function Header() {
  return (
    <header className={ui.headerWrap}>
      <div className={`${ui.container} flex h-16 items-center justify-between`}>
        {/* Logo area (SVG later) */}
        <a
          href="#home"
          className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          aria-label="Go to top"
        >
          <span className="font-serif text-2xl tracking-tight text(--black)]">
            {site.brand.name}
          </span>

          <span className="ml-8 hidden text-[10px] tracking-[0.14em] text-(--muted)] sm:block translate-y-0.5">
            {site.brand.tagline}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${ui.navLink} ${ui.navLinkUnderline}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile nav (simple + clean) */}
        <nav className="flex items-center gap-3 md:hidden" aria-label="Mobile">
          <a href="#gallery" className={`${ui.navLink} ${ui.navLinkUnderline}`}>
            Gallery
          </a>
          <a href="#contact" className={`${ui.navLink} ${ui.navLinkUnderline}`}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
