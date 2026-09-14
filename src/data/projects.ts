import newsdayCover from "@/assets/project-newsday.webp.asset.json";
import leenCleaningProsCover from "@/assets/leen-cleaning-pros-brand-book.webp.asset.json";

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
    image: newsdayCover.url,
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
];

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
