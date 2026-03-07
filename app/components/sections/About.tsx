import Image from "next/image";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className={ui.container}>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Text */}
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--forest)]">
              {site.about.kicker}
            </p>

            <h2 className="mt-4 font-serif text-[36px] leading-[1.02] tracking-[-0.03em] text-[var(--black)] sm:text-[44px]">
              {site.about.headline}
            </h2>

            <p className="mt-6 max-w-[34ch] text-[15px] leading-relaxed text-muted">
              {site.about.text}
            </p>

            <div className="mt-8">
              <a href={site.about.cta.href} className={ui.btnSecondary}>
                {site.about.cta.label}
              </a>
            </div>
          </div>

          {/* Images */}
          <div className="relative h-[420px] overflow-hidden sm:h-[520px]">
            <Image
              src={site.about.image.src}
              alt={site.about.image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
