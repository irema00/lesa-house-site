export function GalleryPreview() {
  return (
    <section id="gallery" className="scroll-mt-24" aria-label="Gallery section">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-serif text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl">
          Gallery
        </h2>
        <p className="mt-2 text-black/70">
          A quick preview — we’ll replace these with real photos later.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl border border-black/10 bg-white/40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
