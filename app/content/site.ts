export const site = {
  brand: {
    name: "Lesa House",
    tagline: "Boutique event house",
    city: "İzmir",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  headerCta: { label: "Reservation", href: "#contact" },
  hero: {
    image: {
      src: "/hero-placeholder.png",
      alt: "Lesa House interior",
    },
    headline: "Welcome to Lesa House",
    subheadline:
      "A warm, premium event space designed for beautiful celebrations and gatherings.",
    primaryCta: { label: "Book an Event", href: "#contact" },
    secondaryCta: { label: "Explore Gallery", href: "#gallery" },
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
