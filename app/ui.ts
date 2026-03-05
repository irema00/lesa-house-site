export const ui = {
  container: "mx-auto max-w-6xl px-4 sm:px-6",
  card: "rounded-3xl border border-[var(--border)] bg-white/40",
  h2: "font-serif text-3xl tracking-tight text-[var(--black)] sm:text-4xl",
  p: "text-[color:var(--muted)] leading-relaxed",
  btnPrimary:
    "inline-flex h-11 items-center justify-center rounded-xl bg-[var(--black)] px-5 text-sm font-medium text-[var(--cream)] transition hover:opacity-90",
  btnSecondary:
    "inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] px-5 text-sm font-medium text-[var(--black)] transition hover:bg-black/5",

  // Header
  headerWrap:
    "sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--cream)]/80 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--cream)]/70",
  navLink:
    "relative text-sm text-[color:var(--muted)] transition hover:text-[var(--black)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
  navLinkUnderline:
    "after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[var(--gold)] after:transition-all hover:after:w-full",
};
