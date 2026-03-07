export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryAlbum = {
  slug: string;
  title: string;
  description?: string;
  items: GalleryItem[];
};

export const gallerySection = {
  kicker: "Gallery",
  headline: "Moments at Lesa House",
  description: "A curated selection of gatherings hosted at Lesa House.",
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    slug: "birthday-celebrations",
    title: "Birthday Celebrations",
    description: "Curated birthday celebrations hosted at Lesa House.",
    items: [
      {
        src: "/images/gallery/birthday-celebrations/160A1854.jpg",
        alt: "Birthday celebration at Lesa House",
        caption: "Leo’s First Birthday",
      },
    ],
  },
  {
    slug: "engagement-traditions",
    title: "Engagement Traditions",
    description: "Elegant family gatherings and engagement traditions.",
    items: [],
  },
  {
    slug: "bridal-showers",
    title: "Bridal Showers",
    description: "Intimate bridal celebrations with thoughtful styling.",
    items: [],
  },
  {
    slug: "baby-showers",
    title: "Baby Showers",
    description: "Soft, joyful celebrations welcoming new beginnings.",
    items: [],
  },
  {
    slug: "corporate-gatherings",
    title: "Corporate Gatherings",
    description: "Boutique corporate events and brand gatherings.",
    items: [],
  },
];
