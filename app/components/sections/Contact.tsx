import { site } from "@/app/content/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24" aria-label="Contact section">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-serif text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl">
          Contact
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white/40 p-6">
            <p className="text-black/70">Phone</p>
            <p className="mt-1 text-[#1A1A1A]">{site.contact.phone}</p>

            <p className="mt-4 text-black/70">Email</p>
            <p className="mt-1 text-[#1A1A1A]">{site.contact.email}</p>

            <p className="mt-4 text-black/70">Address</p>
            <p className="mt-1 text-[#1A1A1A]">{site.contact.addressLine}</p>

            <a
              className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#1A1A1A] px-5 text-sm font-medium text-[#F4F1EC] transition hover:opacity-90"
              href={`mailto:${site.contact.email}`}
            >
              Send an Email
            </a>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/40 p-2">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <iframe
                title="Lesa House map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.contact.mapQuery,
                )}&output=embed`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
