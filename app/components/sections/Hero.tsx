import { site } from "@/app/content/site";
import { ui } from "@/app/ui";
export function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className={`${ui.container} pt-10 pb-12 sm:pt-14`}>
        <div
          className={`${ui.card} p-8 sm:p-12`}
          style={{
            background:
              "linear-gradient(135deg, var(--sand), color-mix(in oklab, var(--cream) 60%, white 40%))",
          }}
        >
          <p className="text-sm tracking-wide text-[--(--muted)]">
            {site.brand.tagline} • {site.brand.city}
          </p>

          <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-(--black)] sm:text-6xl">
            {site.hero.headline}
          </h1>

          <p className="mt-4 max-w-2xl text-base text(--muted)] sm:text-lg">
            {site.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.hero.primaryCta.href} className={ui.btnPrimary}>
              {site.hero.primaryCta.label}
            </a>
            <a
              href={site.hero.secondaryCta.href}
              className="rounded-xl border border-black/20 px-5 py-3 text-sm"
            >
              {" "}
              {site.hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
