import projectSocial from "@/assets/project-social.jpg";
import projectAds from "@/assets/project-ads.jpg";
import projectEmail from "@/assets/project-email.jpg";

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
  testimonial: { quote: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    id: "social-media-growth",
    image: projectSocial,
    title: "Social Media Growth Campaign",
    category: "Social Media Management",
    description:
      "Developed targeted content calendars and high-converting visual assets to boost brand reach and engagement.",
    badges: ["High Engagement", "Organic Reach"],
    overview:
      "A local lifestyle brand needed a consistent presence across Instagram and Facebook. I rebuilt their content system from scratch, defining pillars, tone of voice and a monthly publishing rhythm the team could sustain.",
    strategies: [
      "Built a 90-day content calendar around four content pillars",
      "Designed reusable branded templates for reels, carousels and stories",
      "Introduced a weekly community-management routine for comments and DMs",
      "Tested posting times and formats, then doubled down on top performers",
    ],
    results: [
      { label: "Engagement rate", value: "+142%" },
      { label: "Organic reach", value: "3.1x" },
      { label: "Follower growth", value: "+4.8k" },
    ],
    testimonial: {
      quote:
        "Joy gave our socials a real voice. For the first time posting felt planned instead of panicked, and the engagement showed it.",
      author: "Tariro M.",
      role: "Founder, lifestyle brand",
    },
  },
  {
    id: "high-roi-paid-ads",
    image: projectAds,
    title: "High-ROI Paid Ad Campaign",
    category: "Paid Advertising",
    description:
      "Designed and optimized target audience segmentation and ad copy setup to lower CAC and maximize conversion rates.",
    badges: ["High CTR", "Optimized Budget"],
    overview:
      "A service business was spending steadily on ads with unpredictable returns. I restructured the account, tightened audience targeting and rebuilt the creative testing process around clear conversion goals.",
    strategies: [
      "Restructured campaigns by intent: cold, warm and retargeting",
      "Wrote and split-tested five ad angles per audience segment",
      "Added conversion tracking so spend could be judged on leads, not clicks",
      "Shifted budget weekly toward the lowest cost-per-lead ad sets",
    ],
    results: [
      { label: "Return on ad spend", value: "3.5x" },
      { label: "Cost per lead", value: "-38%" },
      { label: "Click-through rate", value: "+2.4%" },
    ],
    testimonial: {
      quote:
        "We finally know which adverts actually bring customers. The spend didn't go up — the results did.",
      author: "Kudzai N.",
      role: "Operations Manager",
    },
  },
  {
    id: "email-local-seo",
    image: projectEmail,
    title: "Email Marketing & Local SEO Optimization",
    category: "Email & SEO",
    description:
      "Executed localized SEO strategy and targeted email nurture sequences to drive consistent customer conversions.",
    badges: ["Local Visibility", "Higher Open Rates"],
    overview:
      "A Harare-based retailer wanted to be found locally and stay in touch with past customers. I combined on-page SEO and a Google Business profile refresh with a simple, automated email nurture flow.",
    strategies: [
      "Keyword-mapped every service page around local search intent",
      "Optimised the Google Business profile with photos, posts and reviews",
      "Built a five-email welcome sequence for new subscribers",
      "Segmented the list by interest so offers felt relevant, not generic",
    ],
    results: [
      { label: "Email open rate", value: "46%" },
      { label: "Local search views", value: "+87%" },
      { label: "Repeat purchases", value: "+29%" },
    ],
    testimonial: {
      quote:
        "People now find us on Google before they ask around. The emails bring old customers back without us lifting a finger.",
      author: "Rumbi C.",
      role: "Owner, retail store",
    },
  },
];



export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
