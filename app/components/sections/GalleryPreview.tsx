import Image from "next/image";
import { ui } from "@/app/ui";
import { galleryAlbums } from "@/app/content/gallery";

export function GalleryPreview() {
  const visibleAlbums = galleryAlbums.filter((album) => album.items.length > 0);

  if (visibleAlbums.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="scroll-mt-24 py-20 lg:py-28">
      <div className={ui.container}>
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--forest)]">
            Gallery
          </p>

          <h2 className="mt-4 font-serif text-[36px] leading-[1.02] tracking-[-0.03em] text-[var(--black)] sm:text-[44px]">
            Moments at Lesa House
          </h2>

          <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed text-muted">
            A curated selection of gatherings hosted at Lesa House.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {visibleAlbums.map((album) => {
            const cover = album.items[0];

            return (
              <a
                key={album.slug}
                href={`#gallery-${album.slug}`}
                className="group block"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-serif text-[24px] leading-tight tracking-[-0.02em] text-[var(--black)]">
                    {album.title}
                  </h3>

                  {album.description ? (
                    <p className="mt-2 max-w-[28ch] text-[14px] leading-relaxed text-muted">
                      {album.description}
                    </p>
                  ) : null}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
