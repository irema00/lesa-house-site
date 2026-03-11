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
  if (!open) return null;
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
        <div className="relative border-b border-black/10 px-6 py-5">
          <Link
            href="#home"
            className="block text-center font-serif text-[24px] tracking-[-0.02em] text-[#1C1C1C]"
            onClick={onClose}
          >
            {site.brand.name}
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1C1C1C] transition active:scale-90 active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav
          className="flex  flex-col items-center px-6 py-8 text-center"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex w-full flex-col items-center justify-center rounded-xl px-4 py-3 text-center font-serif text-[18px] tracking-[0.02em] text-[#1C1C1C] transition-all duration-300 hover:scale-[1.03] hover:tracking-[0.05em]"
              >
                <span>{item.label}</span>
                <span className="mt-2 block h-[1px] w-12 bg-[#C6A65B] transition-all duration-300 group-hover:w-16" />
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
