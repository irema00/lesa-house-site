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
      src: "/images/heroPlaceholder1.png",
      alt: "Lesa House interior",
    },
    headline: "Welcome to Lesa House",

    kicker: "BOUTIQUE EVENT HOUSE · İzmir",
    subheadline:
      "A warm, premium event space designed for beautiful celebrations and gatherings.",
    primaryCta: { label: "Book an Event", href: "#contact" },
    secondaryCta: { label: "Explore Gallery", href: "#gallery" },
    mobile: {
      kicker: "Welcome to",
      headline: "Lesa House",
    },
  },
  about: {
    kicker: "About Lesa House",
    headline: "A warm, premium event house for beautifully hosted gatherings.",
    text: "Lesa House is designed for intimate celebrations, workshops and curated events with a calm aesthetic, flexible layout and thoughtful details.",
    images: [
      { src: "/images/about-1-placeholder.png", alt: "Lesa House detail view" },
      {
        src: "/images/about-2-placeholder.jpg",
        alt: "Lesa House seating area",
      },
    ],
    cta: { label: "See the space", href: "#gallery" },
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
