import Image from "next/image";
import { site } from "@/app/content/site";
import { ui } from "@/app/ui";

export function About() {
  return (
    <section id="about" className="scroll-mt-24" aria-label="About section">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Text */}
        <div>
          <h2 className={ui.h2}>{site.about.title}</h2>

          <div className="mt-5 space-y-4">
            {site.about.body.map((p) => (
              <p key={p} className={`text-muted leading-relaxed`}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <a href={site.about.cta.href} className={ui.btnSecondary}>
              {site.about.cta.label}
            </a>
          </div>
        </div>

        {/* Stacked images */}

        <div className="grid gap-4">
          <div className="relative h-[260px] overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-[0_18px_60px_rgba(28,28,28,0.08)] sm:h-[300px]">
            <Image
              src={site.about.images[0].src}
              alt={site.about.images[0].alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="relative h-52.5 overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-[0_18px_60px_rgba(28,28,28,0.08)] sm:h-60">
            <Image
              src={site.about.images[1].src}
              alt={site.about.images[1].alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* tiny gold accent line */}
        <div className="pointer-events-none absolute -right-2 top-6 hidden h-24 w-0.5 bg-[#C6A65B] md:block" />
      </div>
    </section>
  );
}
