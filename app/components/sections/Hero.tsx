import Image from "next/image";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";
export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 py-0 lg:py-16">
      <div className={ui.container}>
        {/* Mobile layout */}
        <div className="lg:hidden">
          <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden">
            {/* Background image under content */}
            <div className="absolute inset-x-0 bottom-0 h-[60%]">
              <Image
                src={site.hero.image.src}
                alt={site.hero.image.alt}
                fill
                priority
                className="object-cover object-center"
              />

              {/* Strong top fade for readability */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,var(--cream)_0%,rgba(244,241,236,0.92)_14%,rgba(244,241,236,0.72)_28%,rgba(244,241,236,0.38)_46%,rgba(244,241,236,0.12)_64%,rgba(244,241,236,0)_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 pt-20 pb-10">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--forest)]">
                {site.hero.kicker}
              </p>

              <h1 className="mt-8 max-w-[11ch] font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[var(--black)]">
                {site.hero.headline}
              </h1>

              <p className="mt-4 max-w-[32ch] text-[14px] leading-relaxed text-muted">
                {site.hero.subheadline}
              </p>

              <div className="mt-7 flex flex-row items-start gap-3">
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
            <p className="text-[11px] uppercase tracking-[0.24em] text-(--forest)">
              {site.hero.kicker}
            </p>

            <h1 className="mt-4 max-w-[11ch] font-serif text-[40px] leading-[1.02] tracking-[-0.02em] text-(--black) sm:text-[52px] lg:text-[64px]">
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
          <div className="relative min-h-80 sm:min-h-105 lg:min-h-135">
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
