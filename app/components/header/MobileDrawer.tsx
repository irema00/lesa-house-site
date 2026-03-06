"use client";

import Link from "next/link";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";
import { CloseIcon } from "./icons";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/25 backdrop-blur-sm transition-opacity duration-300 ease-out md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[82vw] max-w-[360px] flex-col bg-[#F4F1EC] shadow-[0_30px_80px_rgba(0,0,0,0.22)] transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
          <Link
            href="#home"
            className="font-serif text-xl tracking-tight text-[#1C1C1C]"
            onClick={onClose}
          >
            {site.brand.name}
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="text-[#1C1C1C]"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav
          className="flex flex-1 flex-col px-5 py-6"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-1">
            <Link
              href="#home"
              onClick={onClose}
              className="rounded-xl px-3 py-3 text-[15px] text-[#1C1C1C] transition hover:bg-black/5"
            >
              Home
            </Link>

            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-xl px-3 py-3 text-[15px] text-[#1C1C1C] transition hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <Link
              href={site.headerCta.href}
              onClick={onClose}
              className={`${ui.btnGold} w-full justify-center`}
            >
              {site.headerCta.label}
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
