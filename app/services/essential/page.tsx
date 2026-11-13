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
import { reveal, revealAlternating } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Essential — 5-page website · Scriptorcode",
  description:
    "A clean, modern 5-page Next.js website for small businesses. Custom responsive design, SEO-ready structure, contact form, and Vercel hosting — from £950.",
};

const features = [
  "Up to 5 pages (home, about, services, contact, location — or your own structure)",
  "Custom responsive design — no template theme, no cookie-cutter look",
  "Next.js build — fast, modern, and easy to maintain",
  "SEO-ready structure — semantic HTML, meta tags, OG tags, sitemap",
  "Contact form — wired and tested before handoff",
  "Vercel hosting setup — deployed, custom domain connected",
  "Mobile-first layout — looks right on phone, tablet, and desktop",
  "1 round of revisions — we tweak until it&apos;s right",
];

const goodFit = [
  "Trades and local services (plumbers, electricians, landscapers, cleaners)",
  "Small retail and hospitality — cafes, shops, studios",
  "Freelancers and consultants with a simple service offering",
  "New businesses launching their first proper website",
];

const notIncluded = `CMS integration, advanced SEO work, analytics dashboards, and third-party
integrations are available as add-ons — or as part of the Growth package.
If you anticipate needing more than 5 pages, Growth is the better starting point.`;

export default function EssentialPage() {
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
            Essential
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-heading text-5xl font-bold text-primary inline-block origin-left transition-transform duration-300 group-hover:scale-105">
              £950
            </span>
            <span className="text-sm text-muted-foreground">5-page site · from £950</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            A clean, modern website upgrade for small businesses that need a professional
            online presence without the bespoke price tag. Five pages, fully responsive,
            built on Next.js and deployed on Vercel — ready to rank and ready to use.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 {...reveal("up")} className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            What&apos;s Included
          </h2>
          <ul className="mt-8 space-y-3">
            {features.map((f, i) => (
              <li
                key={f}
                {...revealAlternating(i, 60)}
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
          <h2 {...reveal("up")} className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Good Fit For
          </h2>
          <ul className="mt-6 space-y-3">
            {goodFit.map((f, i) => (
              <li
                key={f}
                {...revealAlternating(i, 60)}
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

      {/* What's not included */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 {...reveal("up")} className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            What&apos;s Not Included
          </h2>
          <p {...reveal("up")} className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {notIncluded}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div {...reveal("up")} className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Ready to Start?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Get in touch with a rough idea of your pages and what you want the site to
              do. I&apos;ll confirm whether Essential is the right fit and send you a firm quote.
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
        title="Not Sure Essential Is Right?"
        description="Tell me what you need and I&apos;ll suggest the best package — no pressure, no obligation."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Back to Services", href: "/services" }}
      />
    </>
  );
}
