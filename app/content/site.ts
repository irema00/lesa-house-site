export const site = {
  brand: {
    name: "Lesa House",
    tagline: "Boutique event house",
    city: "İzmir",
  },
  nav: [
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  headerCta: { label: "Book an Event", href: "#contact" },
  hero: {
    image: {
      src: "/images/hero-placeholder.png",
      alt: "Lesa House interior",
    },
    headline: "Welcome to Lesa House",
    // buraya uygun yazı düşünülecek//
    kicker: "KICKER",
    subheadline:
      "A warm, premium event space designed for beautiful celebrations and gatherings.",
    primaryCta: { label: "Book an Event", href: "#contact" },
    secondaryCta: { label: "Explore Gallery", href: "#gallery" },
  },
  about: {
    title: "About Lesa House",
    body: [
      "Lesa House is a warm, premium event house designed for intimate celebrations, workshops and curated gatherings.",
      "A calm aesthetic, flexible layout and thoughtful details—so you can host beautifully, without stress.",
    ],
    cta: { label: "See the space", href: "#gallery" },
    images: [
      { src: "/images/about-1-placeholder.png", alt: "Lesa House detail view" },
      {
        src: "/images/about-2-placeholder.jpg",
        alt: "Lesa House seating area",
      },
    ],
  },
  contact: {
    phone: "+90 XXX XXX XX XX",
    email: "hello@lesahouse.com",
    addressLine: "Bostanlı, Karşıyaka / İzmir",
    mapQuery: "Lesa House Bostanlı İzmir",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Lesa House. All rights reserved.`,
  },
};
