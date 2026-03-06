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
        <div className="grid md:items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-forest">
              {site.about.kicker}
            </p>

            <h2 className={`${ui.h2} mt-3`}>{site.about.headline}</h2>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              {site.about.text}
            </p>
          </div>

          {/* Stacked images */}

          <div className="grid gap-4">
            <div className="relative h-65 overflow-hidden rounded-3xl border border-brand">
              <Image
                src={site.about.images[0].src}
                alt={site.about.images[0].alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="relative h-50 overflow-hidden rounded-3xl border border-brand">
              <Image
                src={site.about.images[1].src}
                alt={site.about.images[1].alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
