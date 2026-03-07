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
    kicker: "BOUTIQUE EVENT HOUSE · İzmir",
    headline: "Lesa House",
    subheadline:
      "A warm, premium event space designed for beautiful celebrations and gatherings.",
    primaryCta: { label: "Book an Event", href: "#contact" },
    secondaryCta: { label: "Gallery", href: "#gallery" },
  },
  about: {
    kicker: "About",
    headline: "The Story of Lesa House",
    text: "Lesa House is a boutique event house created for beautifully hosted gatherings. A calm aesthetic, thoughtful details and a warm atmosphere shape every celebration here. Designed for intimate celebrations and curated moments, Lesa House offers a space where meaningful occasions unfold naturally.",
    image: {
      src: "/images/about-1-placeholder.png",
      alt: "Lesa House interior detail",
    },
    cta: { label: "Explore the Gallery", href: "#gallery" },
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
