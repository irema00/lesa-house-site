export const ui = {
  container: "mx-auto max-w-6xl px-4 sm:px-6",
  card: "rounded-3xl border border-[var(--border)] bg-white/40",
  h2: "font-serif text-3xl tracking-tight text-[var(--black)] sm:text-4xl",
  p: "text-[color:var(--muted)] leading-relaxed",
  btnPrimary:
    "inline-flex h-11 items-center justify-center rounded-md border border-[var(--black)] bg-[var(--black)] px-7 text-[13px] font-medium tracking-[0.06em] text-[var(--cream)] transition-all duration-200 h hover:tracking-[0.12em] hover:scale-[1.02] hover:bg-transparent hover:text-[var(--black)] active:scale-[0.97]",
  btnSecondary:
    "inline-flex h-11 items-center justify-center rounded-md border border-[var(--border)] bg-transparent px-6 text-[13px] font-medium tracking-[0.06em] text-[var(--black)] transition-all duration-200 hover:tracking-[0.12em] hover:scale-[1.02] hover:bg-black/5 active:scale-[0.97]",

  // Header
  headerWrap:
    "sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--cream)]/88 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--cream)]/75 shadow-[0_6px_20px_rgba(28,28,28,0.06)]",
  navLink:
    "relative text-sm text-[color:var(--muted)] transition hover:text-[var(--black)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
  navLinkUnderline:
    "after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[var(--gold)] after:transition-all hover:after:w-full",

  btnGold:
    "inline-flex h-10 items-center justify-center rounded-full bg-[var(--gold)] px-5 text-sm font-semibold text-[var(--black)] shadow-[0_8px_20px_rgba(198,166,91,0.22)] transition hover:brightness-95 active:scale-[0.98]",
  btnGoldOutline:
    "inline-flex h-10 items-center justify-center rounded-xl border border-[var(--gold)] px-4 text-sm font-medium text-[var(--black)] transition hover:bg-[color:var(--gold)]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
  iconBtn:
    "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/40 transition hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",

  mobilePanel:
    "md:hidden border-b border-[var(--border)] bg-[color:var(--cream)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--cream)]/80",

  mobileLink:
    "block rounded-xl px-4 py-3 text-sm text-[var(--black)] transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
};
