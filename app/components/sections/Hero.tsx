import Image from "next/image";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";
export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 py-10 sm:py-14 lg:py-16">
      <div className={ui.container}>
        {/* Mobile layout */}
        <div className="relative -mx-4 min-h-[78vh] overflow-hidden sm:-mx-6 lg:hidden">
          <Image
            src={site.hero.image.src}
            alt={site.hero.image.alt}
            fill
            priority
            className="object-cover"
          />

          {/* Soft overlay for readability */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,241,236,0.88)_0%,rgba(244,241,236,0.62)_20%,rgba(244,241,236,0.18)_42%,rgba(244,241,236,0.08)_100%)]" />

          {/* Content */}
          <div className="relative z-10 px-6 pt-25 pb-8">
            <div className="max-w-[320px]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-(--forest)">
                {site.hero.kicker}
              </p>

              <h1 className="mt-3 max-w-[10ch] font-serif text-[34px] leading-[1.02] tracking-[-0.02em] text-(--black)">
                {site.hero.headline}
              </h1>

              <p className="mt-4 max-w-[28ch] text-[14px] leading-relaxed text-muted">
                {site.hero.subheadline}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a href={site.hero.primaryCta.href} className={ui.btnPrimary}>
                  {site.hero.primaryCta.label}
                </a>

                <a
                  href={site.hero.secondaryCta.href}
                  className={ui.btnSecondary}
                >
                  {site.hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop layout */}
        <div className="hidden items-center gap-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Text */}
          <div className="z-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--forest)]">
              {site.hero.kicker}
            </p>

            <h1 className="mt-4 max-w-[11ch] font-serif text-[40px] leading-[1.02] tracking-[-0.02em] text-[var(--black)] sm:text-[52px] lg:text-[64px]">
              {site.hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {site.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.hero.primaryCta.href} className={ui.btnPrimary}>
                {site.hero.primaryCta.label}
              </a>

              <a href={site.hero.secondaryCta.href} className={ui.btnSecondary}>
                {site.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[540px]">
            <Image
              src={site.hero.image.src}
              alt={site.hero.image.alt}
              fill
              priority
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--cream)_0%,rgba(244,241,236,0.88)_10%,rgba(244,241,236,0.35)_24%,rgba(244,241,236,0)_42%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
