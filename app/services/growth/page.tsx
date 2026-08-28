import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Growth — 10-page conversion website · Scriptorcode",
  description:
    "A premium, conversion-focused Next.js website for businesses that rely on their site for leads. Up to 10 pages, advanced SEO, CMS, analytics, and integrations — from £1,950.",
};

const features = [
  "Up to 10 pages — room for services, case studies, team, testimonials, blog",
  "Premium custom design — built around your brand, not a theme",
  "Next.js build — fast, modern, SEO-friendly foundation",
  "Advanced SEO optimisation — keyword-informed structure, on-page SEO, clear content hierarchy",
  "Contact form + integrations — connect your email marketing, CRM, or booking tool",
  "Vercel hosting setup — deployed and custom domain connected",
  "CMS integration — editable pages and content without touching code",
  "Performance optimisation — tuned for Core Web Vitals and fast load times",
  "Analytics setup — GA4 wired up with your key events and goals",
  "3 rounds of revisions — more room to refine and get it right",
  "Launch support (1 week) — we&apos;re on hand for the first week after go-live",
];

const goodFit = [
  "B2B service businesses that need a steady lead flow from their site",
  "Professional services — consultants, agencies, coaches, therapists",
  "Businesses with a blog or content strategy they want to maintain",
  "Companies replacing an underperforming site and want stronger conversion",
];

const addOns = [
  "SEO Content & Meta Setup — from £300",
  "CMS Content Migration — from £400",
  "Analytics Dashboard (Looker Studio) — from £250",
  "Accessibility Audit & Fixes — from £300",
  "Speed Optimisation Pass — from £250",
];

export default function GrowthPage() {
  return (
    <>
      {/* Back link */}
      <div className="border-b border-border/40 bg-card/50 px-6 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowRight className="h-4 w-4 -rotate-90" />
            Back to services
          </Link>
          <span className="text-sm text-muted-foreground">Scriptorcode</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Growth
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-heading text-5xl font-bold text-primary inline-block origin-left transition-transform duration-300 group-hover:scale-105">
              £1,950
            </span>
            <span className="text-sm text-muted-foreground">Most popular · from £1,950</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            For businesses that rely on their website to generate leads and want a
            premium, conversion-focused experience. Up to 10 pages, advanced SEO
            optimisation, CMS integration, analytics, and the integrations you need to
            turn visits into conversations.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            What&apos;s Included
          </h2>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li
                key={f}
                className="flex gap-4 rounded-lg border border-border/40 bg-background p-4 transition-all duration-300 hover:border-primary/30"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Good fit */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Good Fit For
          </h2>
          <ul className="mt-6 space-y-3">
            {goodFit.map((f) => (
              <li
                key={f}
                className="flex gap-3 rounded-lg border border-border/40 bg-card p-4 transition-all duration-300 hover:border-primary/30"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Popular add-ons */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Popular Add-ons
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Most Growth projects also include one or more of these — scoped and priced
            separately so you only pay for what you need.
          </p>
          <ul className="mt-5 space-y-2">
            {addOns.map((a) => (
              <li
                key={a}
                className="flex gap-3 rounded-lg border border-border/40 bg-background px-4 py-3 transition-all duration-300 hover:border-primary/30"
              >
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/10 text-primary">
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/services">
                View All Add-ons
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Ready to Start?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tell me about your business, your current site (if you have one), and what
              you want the new site to achieve. I&apos;ll suggest a page structure, flag useful
              add-ons, and send you a firm quote.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/services">
                  Compare Packages
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Still on the Fence?"
        description="Book a free 30-minute call and I&apos;ll walk through your goals, flag the right package, and answer any questions."
        primary={{ label: "Book a Free Call", href: "/contact" }}
        secondary={{ label: "Back to Services", href: "/services" }}
      />
    </>
  );
}
