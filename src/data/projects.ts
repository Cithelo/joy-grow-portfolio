// Images are imported directly so they are bundled with the site and work on any host.
import newsdayCover from "@/assets/project-newsday.webp";
import leenCleaningProsCover from "@/assets/leen-cleaning-pros-brand-book.webp";
import leenHomesEmailCover from "@/assets/leen-homes-email-marketing.webp";

export type Project = {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  badges: string[];
  overview: string;
  strategies: string[];
  results: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  /** External link to the full project (e.g. Canva). When set, the card opens this in a new tab. */
  link?: string;
};

export const projects: Project[] = [
  {
    id: "newsday-seo-audit",
    image: newsdayCover,
    title: "Newsday SEO & Performance Audit",
    category: "Email & SEO",
    description:
      "Comprehensive SEO and performance audit for Newsday covering performance, accessibility, best practices and search insights across mobile and desktop.",
    badges: ["SEO Audit", "Performance", "Accessibility"],
    overview:
      "A full SEO and performance audit of the Newsday website, analysing how the site performs on mobile and desktop and where search visibility, accessibility and best practices could be improved.",
    strategies: [
      "Ran comprehensive mobile and desktop performance analysis",
      "Audited on-page SEO, metadata and search visibility",
      "Reviewed accessibility and web best-practice compliance",
      "Compiled actionable insights and prioritized recommendations",
    ],
    results: [
      { label: "Areas analysed", value: "4" },
      { label: "Devices covered", value: "2" },
      { label: "Report type", value: "Full audit" },
    ],
    link: "https://canva.link/s28uuqyjeulkf38",
  },
  {
    id: "leen-cleaning-pros-brand-book",
    image: leenCleaningProsCover,
    title: "Leen Cleaning Pros Brand Book",
    category: "Brand Strategy",
    description:
      "A complete brand identity guide for Leen Cleaning Pros, covering logo usage, color palette, typography and tone of voice to keep every touchpoint consistent and professional.",
    badges: ["Brand Identity", "Visual Design", "Brand Guidelines"],
    overview:
      "A full brand book created for Leen Cleaning Pros to define how the cleaning business looks, sounds, and feels across digital and print touchpoints. The guide locks in logo rules, color values, font pairings, imagery style and messaging tone so the brand stays polished and recognizable.",
    strategies: [
      "Developed a clean, trustworthy visual identity for a service brand",
      "Defined logo usage, spacing and clear-space rules",
      "Selected a cohesive color palette and typography system",
      "Documented brand voice and customer-facing messaging guidelines",
    ],
    results: [
      { label: "Brand assets", value: "Complete kit" },
      { label: "Guidelines covered", value: "6" },
      { label: "Format", value: "Brand book" },
    ],
    testimonial: {
      quote:
        "The brand book gave our cleaning business a professional look we can use everywhere — from social media to uniforms.",
      author: "Leen Cleaning Pros Team",
      role: "Client",
    },
    link: "https://canva.link/unsm943imbgkc06",
  },
  {
    id: "leen-homes-email-marketing",
    image: leenHomesEmailCover,
    title: "Leen Homes Technology Email Marketing",
    category: "Email & SEO",
    description:
      "An email marketing overview for Leen Homes Technology, focused on building customer relationships and driving growth through modern home technology solutions.",
    badges: ["Email Marketing", "Campaign Strategy", "Customer Engagement"],
    overview:
      "A focused email marketing project for Leen Homes Technology, created to communicate innovative home technology solutions clearly, strengthen customer relationships and support sustainable business growth.",
    strategies: [
      "Developed campaign messaging around smarter modern living",
      "Structured content to connect technology benefits with customer needs",
      "Created a clear visual direction aligned with the technology brand",
      "Focused calls to action on relationship building and business growth",
    ],
    results: [
      { label: "Channel", value: "Email" },
      { label: "Focus", value: "Engagement" },
      { label: "Format", value: "Overview" },
    ],
    link: "https://canva.link/hlztfeml81izeaw",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
