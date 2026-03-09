import Image from "next/image";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";
export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 py-6 lg:py-16">
      <div className={ui.container}>
        {/* Mobile */}
        <div className="relative lg:hidden h-[80vh] overflow-hidden">
          <img
            src="/images/heroPlaceholder1.png"
            alt="Lesa House hero"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.88]"
          />
          <div className="absolute inset-0 bg-black/28" />
          <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/18 to-black/28" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="rounded-[25px] bg-black/10 px-5 py-6 backdrop-blur-[2px]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/85">
                Welcome to
              </p>

              <h1 className="mt-3 font-serif text-[55px] leading-none tracking-[-0.02em] text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.28)]">
                {site.hero.headline}
              </h1>

              <div className="mt-6 flex w-full max-w-60 flex-col gap-3">
                <a
                  href={site.hero.primaryCta.href}
                  className={ui.btnPrimaryMobile}
                >
                  {site.hero.primaryCta.label}
                </a>

                <a
                  href={site.hero.secondaryCta.href}
                  className={ui.btnSecondaryMobile}
                >
                  {site.hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="z-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-(--forest)">
              {site.hero.kicker}
            </p>

            <h1 className="mt-4 max-w-[9ch] font-serif text-[44px] leading-[1.02] tracking-[-0.03em] text-(--black) xl:text-[64px]">
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

          <div className="relative min-h-130 overflow-hidden">
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
