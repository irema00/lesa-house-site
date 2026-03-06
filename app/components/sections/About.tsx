import Image from "next/image";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 sm:py-20"
      aria-label="About section"
    >
      <div className={ui.container}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          {/* Text */}
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-forest">
              {site.about.kicker}
            </p>

            <h2 className={`${ui.h2} mt-3`}>{site.about.headline}</h2>

            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {site.about.text}
            </p>
            <div className="mt-8">
              <a href={site.about.cta.href} className={ui.btnSecondary}>
                {site.about.cta.label}
              </a>
            </div>
          </div>

          {/* Stacked images */}

          <div className="relative mx-auto w-full max-w-140">
            {/* Main image*/}
            <div className="relative h-80 overflow-hidden rounded-[28px] border border-brand bg-white/40 shadow-[0_18px_50px_rgba(28,28,28,0.08)] sm:h-95">
              <Image
                src={site.about.images[0].src}
                alt={site.about.images[0].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Small overlay image */}
            <div className="relative -mt-12 ml-auto h-45 w-[72%] overflow-hidden rounded-3xl border border-brand bg-white/40 shadow-[0_18px_50px_rgba(28,28,28,0.1)] sm:-mt-16 sm:h-55 sm:w-[68%]">
              <Image
                src={site.about.images[1].src}
                alt={site.about.images[1].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
