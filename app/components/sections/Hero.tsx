import Image from "next/image";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";
export function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className={`${ui.container} pt-6 sm:pt-10`}>
        {/* Hero card/frame */}
        <div className={`${ui.card} overflow-hidden p-0`}>
          {/* Photo band */}
          <div className="relative h-65 w-full sm:h-80 md:h-95">
            <Image
              src={site.hero.image.src}
              alt={site.hero.image.alt}
              fill
              priority
              className="object-cover"
            />

            {/* Soft overlay (cream -> transparent) */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#F4F1EC]/60 via-transparent to-transparent" />
          </div>
          {/* Text area */}
          <div className="px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14">
            <p className="text-sm tracking-wide text-muted">
              {site.hero.kicker}
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[#1C1C1C] sm:text-5xl md:text-6xl">
              {site.hero.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {site.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
