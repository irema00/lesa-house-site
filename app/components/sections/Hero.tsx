import Image from "next/image";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";
export function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className={`${ui.container} pt-6 sm:pt-10`}>
        {/* Hero card/frame */}
        <div
          className={`${ui.card} overflow-hidden p-0 shadow-[0_18px_50px_rgba(28,28,28,0.08)]`}
        >
          {/* Photo band */}
          <div className="relative h-62.5 w-full sm:h-80 md:h-100">
            <Image
              src={site.hero.image.src}
              alt={site.hero.image.alt}
              fill
              priority
              className="object-cover scale-[1.01]"
            />

            {/* Soft overlay (cream -> transparent) */}
            <div className="pointer-events-none absolute inset-0 bg-linear[linear-gradient(to_bottom,rgba(244,241,236,0.72),rgba(244,241,236,0.14),rgba(28,28,28,0.08))]" />
          </div>
          {/* Text area */}
          <div className="px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#3F5A4A]">
              {site.hero.kicker}
            </p>

            <h1 className="mt-3 font-serif text-[34px] leading-[1.1] tracking-tight text-[#1C1C1C]sm:text-[46px] md:text-[58px]">
              {site.hero.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5E5E5E] sm:text-[16px]">
              {site.hero.subheadline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={site.hero.primaryCta.href} className={ui.btnPrimary}>
                {site.hero.primaryCta.label}
              </a>

              <a href={site.hero.secondaryCta.href} className={ui.btnSecondary}>
                {site.hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
