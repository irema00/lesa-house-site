import Image from "next/image";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";
export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 py-6 lg:py-16">
      <div className={ui.container}>
        {/* Mobile */}
        <div className="lg:hidden">
          <div className="pt-4">
            <div className="px-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--forest)]">
                {site.hero.kicker}
              </p>

              <h1 className="mt-4 max-w-[9ch] font-serif text-[42px] leading-[0.96] tracking-[-0.03em] text-[var(--black)]">
                {site.hero.headline}
              </h1>

              <p className="mt-5 max-w-[30ch] text-[14px] leading-relaxed text-muted">
                {site.hero.subheadline}
              </p>

              <div className="mt-7 grid max-w-[320px] grid-cols-2 gap-3">
                <a
                  href={site.hero.primaryCta.href}
                  className={`${ui.btnPrimary} w-full`}
                >
                  {site.hero.primaryCta.label}
                </a>

                <a
                  href={site.hero.secondaryCta.href}
                  className={`${ui.btnSecondary} w-full`}
                >
                  {site.hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="relative mt-8 px-0  h-[320px] overflow-hidden">
              <Image
                src={site.hero.image.src}
                alt={site.hero.image.alt}
                fill
                priority
                className="object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,var(--cream)_0%,rgba(244,241,236,0.72)_14%,rgba(244,241,236,0.22)_34%,rgba(244,241,236,0)_58%)]" />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="z-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--forest)]">
              {site.hero.kicker}
            </p>

            <h1 className="mt-4 max-w-[9ch] font-serif text-[44px] leading-[1.02] tracking-[-0.03em] text-[var(--black)] xl:text-[64px]">
              {site.hero.headline}
            </h1>

            <p className="mt-6 max-w-[34ch] text-[15px] leading-relaxed text-muted xl:text-[16px]">
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

          <div className="relative min-h-[520px] overflow-hidden">
            <Image
              src={site.hero.image.src}
              alt={site.hero.image.alt}
              fill
              priority
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--cream)_0%,rgba(244,241,236,0.9)_10%,rgba(244,241,236,0.38)_24%,rgba(244,241,236,0)_42%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
