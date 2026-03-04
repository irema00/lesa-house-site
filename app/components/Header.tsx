"use client";

import { site } from "../content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F4F1EC]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo area (SVG later) */}
        <a
          href="#home"
          className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        >
          <span className="font-serif text-xl tracking-tight text-[#1A1A1A]">
            {site.brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-black/80 transition hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile: compact nav */}
        <nav className="flex items-center gap-3 md:hidden">
          <a
            href="#gallery"
            className="rounded-md px-2 py-2 text-sm text-black/80 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="rounded-md px-2 py-2 text-sm text-black/80 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
