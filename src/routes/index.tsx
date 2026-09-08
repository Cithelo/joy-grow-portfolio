import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Linkedin,
  Instagram,
  MessageSquare,
  Pencil,
  Megaphone,
  Search,
  Target,
  QrCode,
  ArrowRight,
  Palette,
  Infinity as InfinityIcon,
  BarChart3,
  Scissors,
  Send,
  MousePointerClick,
  Quote,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

import { Toaster } from "@/components/ui/sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";

import joyPortrait from "@/assets/joy-portrait.jpg.asset.json";
import projectSocial from "@/assets/project-social.jpg";
import projectAds from "@/assets/project-ads.jpg";
import projectEmail from "@/assets/project-email.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joy Cithelo Gudyanga — Digital Marketer Portfolio" },
      {
        name: "description",
        content:
          "Digital marketer in Harare, Zimbabwe helping brands grow with social media management, content creation, paid ads, email marketing, SEO and brand strategy.",
      },
      { property: "og:title", content: "Joy Cithelo Gudyanga — Digital Marketer" },
      {
        property: "og:description",
        content:
          "Strategy, content and results. I help businesses grow online through smart marketing and engaging content.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "Social Media Management",
  "Content Creation",
  "Digital Strategy",
  "Email Marketing",
  "SEO",
  "Brand Strategy",
];

const services = [
  { icon: MessageSquare, title: "Social Media Management" },
  { icon: Pencil, title: "Content Creation" },
  { icon: Megaphone, title: "Paid Advertising" },
  { icon: Mail, title: "Email Marketing" },
  { icon: Search, title: "SEO" },
  { icon: Target, title: "Brand Strategy" },
];

type Project = {
  image: string;
  title: string;
  category: string;
  description: string;
  metrics: string[];
  overview: string;
  strategies: string[];
  results: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
};

const projects: Project[] = [
  {
    image: projectSocial,
    title: "Social Media Growth Campaign",
    category: "Social Media Management",
    description:
      "Developed targeted content calendars and high-converting visual assets to boost brand reach and engagement.",
    metrics: ["High Engagement", "Organic Reach"],
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
    image: projectAds,
    title: "High-ROI Paid Ad Campaign",
    category: "Paid Advertising",
    description:
      "Designed and optimized target audience segmentation and ad copy setup to lower CAC and maximize conversion rates.",
    metrics: ["High CTR", "Optimized Budget"],
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
    image: projectEmail,
    title: "Email Marketing & Local SEO Optimization",
    category: "Email & SEO",
    description:
      "Executed localized SEO strategy and targeted email nurture sequences to drive consistent customer conversions.",
    metrics: ["Local Visibility", "Higher Open Rates"],
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

const categories = ["All", "Social Media Management", "Paid Advertising", "Email & SEO"];

const tools = [
  { icon: Palette, name: "Canva" },
  { icon: InfinityIcon, name: "Meta Business Suite" },
  { icon: MousePointerClick, name: "Google Ads" },
  { icon: Send, name: "MailerLite" },
  { icon: Scissors, name: "CapCut" },
  { icon: BarChart3, name: "Google Analytics" },
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="relative inline-block text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
      {children}
      <span className="mt-2 block h-[3px] w-16 rounded-full bg-forest" />
    </h2>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || name.length > 100) return toast.error("Please enter your name (max 100 characters).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast.error("Please enter a valid email address.");
    if (!message || message.length > 1500)
      return toast.error("Please enter a message (max 1500 characters).");
    if (form.subject.trim().length > 150) return toast.error("Subject is too long.");

    setSending(true);
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      subject: form.subject.trim() || null,
      message,
    });
    setSending(false);

    if (error) {
      toast.error("Message couldn't be sent. Please try again.");
      return;
    }
    toast.success("Thanks! Your message has been sent.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-forest";

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          className={inputClass}
          placeholder="Your name"
          value={form.name}
          onChange={update("name")}
          maxLength={100}
          required
          aria-label="Your name"
        />
        <input
          className={inputClass}
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={update("email")}
          maxLength={255}
          required
          aria-label="Your email"
        />
      </div>
      <input
        className={inputClass}
        placeholder="Subject (optional)"
        value={form.subject}
        onChange={update("subject")}
        maxLength={150}
        aria-label="Subject"
      />
      <textarea
        className={`${inputClass} min-h-32 resize-y`}
        placeholder="Tell me about your project..."
        value={form.message}
        onChange={update("message")}
        maxLength={1500}
        required
        aria-label="Your message"
      />
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold uppercase tracking-wide text-forest-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-70"
      >
        {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between">
          <a href="#home" className="min-w-0">
            <span className="block truncate font-display text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
              JOY CITHELO GUDYANGA
            </span>
            <span className="block font-display text-sm font-bold tracking-[0.18em] text-forest">
              DIGITAL MARKETER
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium uppercase tracking-wide text-foreground/80 transition-colors hover:text-forest"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-md border border-border p-2 text-forest transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-forest"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              I MARKET BRANDS
              <br />
              THAT <span className="text-forest">GROW.</span>
            </h1>
            <p className="mt-5 font-display text-xl font-bold text-foreground sm:text-2xl">
              Strategy • Content • Results
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              I help businesses grow online through smart marketing strategies and
              engaging content.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3 text-sm font-semibold uppercase tracking-wide text-forest-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Mail size={18} />
              Let&apos;s work together
            </a>

            <div className="mt-7 flex items-center gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Mail, href: "mailto:joyleencithegudyang@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-forest text-forest-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <span className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-sage" aria-hidden="true" />
            <span className="absolute -bottom-5 -right-4 h-28 w-28 rounded-3xl bg-forest/15" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[9999px_9999px_1.75rem_1.75rem] border-4 border-card bg-secondary shadow-lift">
              <img
                src={joyPortrait.url}
                alt="Portrait of Joy Cithelo Gudyanga, digital marketer"
                width={1456}
                height={1941}
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="bg-secondary/70 py-14 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">
              About me
            </p>
            <div className="mt-4">
              <SectionHeading>WHO I AM</SectionHeading>
            </div>
            <p className="mt-5 max-w-lg leading-relaxed text-foreground/80">
              I am Joy Cithelo Gudyanga, a passionate Digital Marketer who combines
              creativity and digital insights to connect brands with the right
              audience and achieve meaningful results.
            </p>
          </div>
          <div className="md:justify-self-end">
            <SectionHeading>MY SKILLS</SectionHeading>
            <ul className="mt-5 space-y-2.5">
              {skills.map((s) => (
                <li key={s} className="flex items-center gap-3 text-foreground/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionHeading>WHAT I OFFER</SectionHeading>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title }) => (
            <article
              key={title}
              className="group rounded-2xl bg-card p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-forest transition-all duration-300 group-hover:scale-110 group-hover:bg-forest group-hover:text-forest-foreground">
                <Icon size={24} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-foreground">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-secondary/70 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading>PROJECTS</SectionHeading>

          <div className="mt-7 flex flex-wrap gap-3">
            {categories.map((c) => {
              const active = c === activeCategory;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                    active
                      ? "bg-forest text-forest-foreground shadow-card"
                      : "bg-card text-foreground/75 shadow-card hover:text-forest"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                role="button"
                tabIndex={0}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
                className="group flex animate-fade-in cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={768}
                    height={432}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t-4 border-forest p-5">
                  <span className="w-fit rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-base font-bold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-semibold text-foreground/85"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-wide text-forest transition-all duration-300 group-hover:gap-3">
                    View Case Study <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3 text-sm font-semibold uppercase tracking-wide text-forest-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              View All Projects <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Case study modal */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-2xl">
          {selected && (
            <>
              <img
                src={selected.image}
                alt={selected.title}
                className="aspect-video w-full rounded-xl object-cover"
              />
              <DialogHeader>
                <span className="w-fit rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest">
                  {selected.category}
                </span>
                <DialogTitle className="text-left text-xl font-extrabold text-foreground">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-left leading-relaxed">
                  {selected.overview}
                </DialogDescription>
              </DialogHeader>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Key results
                </h4>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {selected.results.map((r) => (
                    <div key={r.label} className="rounded-xl bg-secondary p-3 text-center">
                      <p className="font-display text-lg font-extrabold text-forest">{r.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Strategy
                </h4>
                <ul className="mt-3 space-y-2">
                  {selected.strategies.map((s) => (
                    <li key={s} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <figure className="rounded-2xl bg-forest p-5 text-forest-foreground">
                <Quote size={22} className="opacity-70" />
                <blockquote className="mt-2 text-sm leading-relaxed">
                  {selected.testimonial.quote}
                </blockquote>
                <figcaption className="mt-3 text-xs font-semibold uppercase tracking-wide opacity-85">
                  {selected.testimonial.author} · {selected.testimonial.role}
                </figcaption>
              </figure>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Tools & Contact */}
      <footer id="contact" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="rounded-3xl bg-card p-7 shadow-card md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_auto]">
            <div id="tools">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">
                Tools I use
              </h2>
              <div className="mt-6 grid grid-cols-3 gap-5 sm:grid-cols-6 lg:grid-cols-3">
                {tools.map(({ icon: Icon, name }) => (
                  <div key={name} className="group text-center">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary text-forest transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-forest group-hover:text-forest-foreground">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <p className="mt-2 text-xs font-semibold text-foreground/80">{name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">
                Let&apos;s connect
              </h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-forest" />
                  <a
                    href="mailto:joyleencithegudyang@gmail.com"
                    className="break-all text-foreground/85 transition-colors hover:text-forest"
                  >
                    joyleencithegudyang@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-forest" />
                  <a
                    href="tel:+263779326031"
                    className="text-foreground/85 transition-colors hover:text-forest"
                  >
                    +263779326031
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="shrink-0 text-forest" />
                  <span className="text-foreground/85">Harare, Zimbabwe</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-forest p-6 text-forest-foreground">
              <span className="grid h-24 w-24 shrink-0 place-items-center rounded-xl bg-forest-foreground text-forest">
                <QrCode size={64} strokeWidth={1.25} />
              </span>
              <p className="font-script text-3xl leading-tight">
                Let&apos;s work
                <br />
                together
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">
              Send me a message
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              Tell me a little about your brand and what you&apos;d like to achieve — I&apos;ll
              get back to you shortly.
            </p>
            <div className="max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Joy Cithelo Gudyanga · Digital Marketer
        </p>
      </footer>
    </div>
  );
}
