import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Globe,
  FileText,
  Layers,
  BarChart3,
  Shield,
  Zap,
  Sparkles,
  Clock,
  MousePointer,
  TrendingUp,
  CreditCard,
  Mail,
  Puzzle,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "From website rebuilds to SEO audits, CRO, landing pages, and ongoing retainers. Transparent pricing in GBP. Based in London, working with businesses across the UK.",
};

// ---------------------------------------------------------------------------
// Packages
// ---------------------------------------------------------------------------
const packages = [
  {
    name: "Essential",
    price: "950",
    description:
      "Perfect for small businesses needing a clean, modern upgrade.",
    popular: false,
    tag: "5-page site",
    href: "/services/essential",
    features: [
      "Up to 5 pages",
      "Custom responsive design",
      "Next.js build",
      "SEO-ready structure",
      "Contact form",
      "Vercel hosting setup",
      "Mobile-first layout",
      "1 round of revisions",
    ],
  },
  {
    name: "Growth",
    price: "1,950",
    description:
      "For businesses that rely on their website for leads and want a premium, conversion-focused experience.",
    popular: true,
    tag: "Most popular",
    href: "/services/growth",
    features: [
      "Up to 10 pages",
      "Premium custom design",
      "Next.js build",
      "Advanced SEO optimisation",
      "Contact form + integrations",
      "Vercel hosting setup",
      "CMS integration",
      "Performance optimisation",
      "Analytics setup",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Premium",
    price: "3,500",
    description:
      "A fully bespoke, high-end brand experience with animations, advanced CMS, and custom components.",
    popular: false,
    tag: "Bespoke",
    href: "/services/premium",
    features: [
      "Unlimited pages",
      "Bespoke brand design",
      "Next.js build",
      "Advanced SEO + structured data",
      "Custom forms + integrations",
      "Vercel hosting setup",
      "Advanced CMS",
      "Custom animations",
      "Custom components",
      "E-commerce ready",
      "Priority support",
      "Unlimited revisions",
    ],
  },
];

// ---------------------------------------------------------------------------
// Add-ons
// ---------------------------------------------------------------------------
const addOns = [
  {
    name: "SEO Content & Meta Setup",
    description:
      "Full on-page SEO treatment: keyword research, meta tags, Open Graph, XML sitemap, robots.txt, and schema markup tailored to your business.",
    price: "From £300",
    icon: Globe,
  },
  {
    name: "CMS Content Migration",
    description:
      "We migrate your existing blog posts, service pages, and key content into your new site&apos;s CMS — you keep your content, we handle the move.",
    price: "From £400",
    icon: FileText,
  },
  {
    name: "Third-Party Integrations",
    description:
      "Stripe checkout, Calendly booking, HubSpot or Mailchimp forms, Zapier webhooks, Google Business Profile sync — whatever your stack needs.",
    price: "From £200 each",
    icon: Layers,
  },
  {
    name: "Analytics Dashboard",
    description:
      "A live, custom Looker Studio dashboard wired to your GA4 data — acquisition, conversions, page performance, and goal tracking in one view.",
    price: "From £250",
    icon: BarChart3,
  },
  {
    name: "Accessibility Audit & Fixes",
    description:
      "WCAG 2.1 AA compliance review with a prioritised fix list, plus implementation of the high-impact issues. Good for users, good for business.",
    price: "From £300",
    icon: Shield,
  },
  {
    name: "Speed Optimisation Pass",
    description:
      "Lighthouse-led performance tuning: image optimisation, font loading, code splitting, caching headers. We target a measurable Core Web Vitals improvement.",
    price: "From £250",
    icon: Zap,
  },
  {
    name: "Custom Animations & Micro-Interactions",
    description:
      "Polished, purposeful motion — scroll reveals, hover states, page transitions — that reinforces your brand without slowing the site down.",
    price: "From £400",
    icon: Sparkles,
  },
  {
    name: "Launch Support",
    description:
      "A dedicated post-launch window — we&apos;re on hand to fix issues, answer questions, and make sure the site performs as expected in the first weeks live.",
    price: "Included in Growth & Premium",
    icon: Clock,
  },
];

// ---------------------------------------------------------------------------
// Standalone services
// ---------------------------------------------------------------------------
const standaloneServices = [
  {
    name: "Landing Pages",
    oneLine: "Fast-turn, high-converting one-pagers for ads, launches, and sign-ups.",
    description:
      "A focused, conversion-first landing page built in 2–3 days. Clear headline, strong call-to-action, form or booking embed, and mobile-perfect layout. Ideal for paid campaigns, product launches, event sign-ups, or testing a new offer before committing to a full site.",
    price: "From £450",
    href: "/services/landing-pages",
    icon: MousePointer,
  },
  {
    name: "Technical SEO Audit",
    oneLine: "A full crawl, CWV analysis, and a prioritised fix list for any existing site.",
    description:
      "We crawl your site, surface the issues that are costing you rankings and traffic, and hand you a clear, prioritised report. Broken links, missing schema, slow pages, indexation gaps — all of it, with recommended fixes ranked by impact.",
    price: "From £350",
    href: "/services/seo-audit",
    icon: TrendingUp,
  },
  {
    name: "Conversion Rate Optimisation",
    oneLine: "Find out why visitors aren&apos;t converting — and fix it.",
    description:
      "A CRO review for sites that already have traffic but aren&apos;t turning it into leads or sales. We analyse your funnel, forms, CTAs, trust signals, and page flow, then deliver a set of tested, practical recommendations.",
    price: "From £500",
    href: "/services/cro",
    icon: CreditCard,
  },
  {
    name: "Email Template Design",
    oneLine: "Responsive HTML email templates for newsletters, campaigns, and automations.",
    description:
      "Custom, responsive email templates built to render cleanly across Gmail, Outlook, Apple Mail, and mobile. Newsletters, transactional emails, onboarding sequences — whatever your ESP needs, matched to your brand.",
    price: "From £150 per template",
    href: "/services/email-templates",
    icon: Mail,
  },
  {
    name: "UX Heuristic Review",
    oneLine: "A lightweight review of an existing site — friction points, quick wins, and a clear path forward.",
    description:
      "Not ready for a full redesign? A heuristic review walks through your current site against established UX principles, documents where users are likely to stumble, and proposes practical, low-risk fixes.",
    price: "From £250",
    href: "/services/ux-review",
    icon: Puzzle,
  },
];

// ---------------------------------------------------------------------------
// Retainers
// ---------------------------------------------------------------------------
const retainers = [
  {
    name: "Content & Care Taker",
    price: "From £150/month",
    description:
      "A predictable monthly bucket for small updates — new pages, image swaps, copy tweaks, form adjustments. No surprises, no hourly invoice anxiety.",
  },
  {
    name: "SEO Monitoring & Reporting",
    price: "From £125/month",
    description:
      "Monthly rank tracking, GA4 summary, indexation check, broken-link scan, and a short recommendations memo. Keeps your SEO footing visible and proactive.",
  },
  {
    name: "Performance & Uptime Watch",
    price: "From £95/month",
    description:
      "Lighthouse regression checks, Vercel config review, uptime monitoring, and a monthly summary. Catch regressions before your customers do.",
  },
  {
    name: "CRO & A/B Test Partnership",
    price: "From £500/month",
    description:
      "An ongoing partnership to design, run, and analyse conversion experiments. For sites that have traffic and want to turn more of it into customers.",
  },
  {
    name: "Content Retainer — Blog / Newsletter",
    price: "From £350/month",
    description:
      "Write and publish blog posts or a monthly newsletter on your CMS. Choose your cadence — we handle the writing, formatting, and publishing.",
  },
];

const delays = [
  "animate-card-enter",
  "animate-card-enter-d1",
  "animate-card-enter-d2",
  "animate-card-enter-d3",
  "animate-card-enter-d4",
  "animate-card-enter-d5",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Web Services for Businesses That Need More Than a Template
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Scriptorcode is a London-based Next.js studio. We build fast, responsive,
              SEO-optimised websites for businesses that want a real online presence — one
              that loads quickly, ranks well, and turns visitors into contacts.
            </p>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Build Packages
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty max-w-xl mx-auto">
              Three tiers covering most small-to-medium business needs. Every package
              includes a custom Next.js build, mobile-first responsive design, and
              Vercel hosting setup.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <Link
                key={pkg.name}
                href={pkg.href}
                className={cn(
                  "group card-shine card-glow card-animate-init flex flex-col rounded-xl border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
                  pkg.popular
                    ? "border-primary shadow-lg shadow-primary/10 animate-border-glow"
                    : "border-border/40 hover:border-primary/40",
                  delays[i] || delays[2]
                )}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-8 bg-primary text-primary-foreground animate-glow">
                    {pkg.tag}
                  </Badge>
                )}
                <h3 className="font-heading text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {pkg.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-foreground transition-transform duration-300 group-hover:scale-105 inline-block origin-left">
                    £{pkg.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{pkg.tag}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-primary/20">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    asChild
                    className={cn(
                      "w-full gap-2 transition-all duration-300",
                      pkg.popular
                        ? "group-hover:shadow-lg group-hover:shadow-primary/20"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                    size="lg"
                  >
                    <Link href={pkg.href}>
                      View Details
                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Add-ons
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty max-w-xl mx-auto">
              Attach any of these to a build package to extend the scope. Each is scoped
              separately so you only pay for what you need.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {addOns.map((a, i) => (
              <div
                key={a.name}
                className={cn(
                  "group card-shine card-glow card-animate-init rounded-xl border border-border/40 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
                  delays[i] || delays[5]
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {a.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {a.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{a.price}</span>
                  <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    Add to build
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standalone Services ── */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Standalone Services
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty max-w-xl mx-auto">
              Separate from a full build — useful as a first step, a fast fix, or a
              targeted project on its own.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {standaloneServices.map((s, i) => (
              <Link
                key={s.name}
                href={s.href}
                className={cn(
                  "group card-shine card-glow card-animate-init rounded-xl border border-border/40 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
                  delays[i] || delays[5]
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors">
                      {s.oneLine}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {s.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="text-sm font-medium text-primary">{s.price}</span>
                  <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 flex items-center gap-1">
                    View details
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Retainers ── */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Recurring Retainers
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty max-w-xl mx-auto">
              Ongoing work that keeps your site healthy and improving after launch. Pick
              one or stack a few.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {retainers.map((r, i) => (
              <div
                key={r.name}
                className={cn(
                  "group card-shine card-glow card-animate-init rounded-xl border border-border/40 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
                  delays[i] || delays[5]
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {r.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="text-sm font-medium text-primary">{r.price}</span>
                  <span className="text-sm text-muted-foreground">Per month</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/retainers"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline"
            >
              View all retainers
              <ChevronRight className="h-4 w-4 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Not Sure Which Fits?"
        description="Tell me a bit about your business and what you&apos;re trying to achieve. I&apos;ll suggest a package, flag useful add-ons, and give you a firm quote — no obligation."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  );
}
