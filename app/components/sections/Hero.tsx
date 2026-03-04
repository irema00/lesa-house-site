import { site } from "@/app/content/site";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6">
        <p className="text-sm tracking-wide text-black/60">
          {site.brand.tagline} • {site.brand.city}
        </p>

        <h1 className="mt-3 font-serif text-4xl tracking-tight text-[#1A1A1A] sm:text-6xl">
          {site.hero.headline}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-black/70">
          {site.hero.subheadline}
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href={site.hero.primaryCta.href}
            className="rounded-xl bg-black px-5 py-3 text-sm text-white"
          >
            {site.hero.primaryCta.label}
          </a>

          <a
            href={site.hero.secondaryCta.href}
            className="rounded-xl border border-black/20 px-5 py-3 text-sm"
          >
            {site.hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
