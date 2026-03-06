"use client";
import { MobileDrawer } from "./MobileDrawer";
import Link from "next/link";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";
import { HomeIcon, MenuIcon } from "./icons";
import { useState, useEffect } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);
  return (
    <header className={ui.headerWrap}>
      <div className={`${ui.container} h-16`}>
        {/* Mobile */}
        <div className="grid h-full grid-cols-3 items-center md:hidden">
          <Link
            href="#home"
            aria-label="Go to home"
            className="flex items-center justify-start text-[#1C1C1C]"
          >
            <HomeIcon className="h-5 w-5" />
          </Link>

          <Link
            href="#home"
            className="flex items-center justify-center text-center"
          >
            <span className="font-serif text-xl tracking-tight text-[#1C1C1C]">
              {site.brand.name}
            </span>
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex items-center justify-end text-[#1C1C1C]"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Tablet + Desktop */}
        <div className="hidden h-full items-center justify-between md:flex">
          <Link href="#home" className="flex items-center">
            <span className="font-serif text-2xl tracking-tight text-[#1C1C1C]">
              {site.brand.name}
            </span>
          </Link>

          <nav className="flex items-center gap-5" aria-label="Primary">
            <Link
              href="#home"
              aria-label="Go to home"
              className="text-[#1C1C1C] transition hover:text-[#3F5A4A]"
            >
              <HomeIcon className="h-4.5 w-4.5" />
            </Link>

            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${ui.navLink} text-xs tracking-[0.08em]`}
              >
                {item.label}
              </Link>
            ))}

            <Link href={site.headerCta.href} className={ui.btnGold}>
              {site.headerCta.label}
            </Link>
          </nav>
        </div>
      </div>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
