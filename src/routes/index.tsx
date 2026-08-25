import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";

import heroPortrait from "@/assets/hero-portrait.jpg";
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

const projects = [
  { image: projectSocial, title: "Social Media Campaign" },
  { image: projectAds, title: "Paid Ad Campaign" },
  { image: projectEmail, title: "Email Marketing" },
];

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

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
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
            className="shrink-0 rounded-md border border-border p-2 text-forest md:hidden"
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
                className="block py-2 text-sm font-semibold uppercase tracking-wide text-foreground/80"
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
              href="mailto:joyleencithegudyang@gmail.com"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3 text-sm font-semibold uppercase tracking-wide text-forest-foreground shadow-card transition-transform hover:-translate-y-0.5"
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
                  className="grid h-11 w-11 place-items-center rounded-full bg-forest text-forest-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-secondary">
            <img
              src={heroPortrait}
              alt="Illustrated silhouette portrait of Joy Cithelo Gudyanga"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
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
              className="rounded-2xl bg-card p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-forest">
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
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ image, title }) => (
              <article
                key={title}
                className="overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="h-52 w-full object-cover"
                />
                <div className="border-t-4 border-forest px-5 py-4">
                  <h3 className="text-base font-bold text-foreground">{title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 flex justify-end">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-forest hover:underline"
            >
              View all <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

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
                  <div key={name} className="text-center">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary text-forest">
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
                    className="break-all text-foreground/85 hover:text-forest"
                  >
                    joyleencithegudyang@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-forest" />
                  <a href="tel:+263779326031" className="text-foreground/85 hover:text-forest">
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
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Joy Cithelo Gudyanga · Digital Marketer
        </p>
      </footer>
    </div>
  );
}
