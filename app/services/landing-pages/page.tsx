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
  title: "Landing Pages — fast-turn conversion pages · Scriptorcode",
  description:
    "Fast-turn, high-converting one-page sites for ads, launches, and sign-ups. Clear headline, strong CTA, form or booking embed, mobile-perfect. From £450.",
};

const features = [
  "Single page, conversion-optimised layout — headline, benefits, proof, CTA",
  "Mobile-first responsive design — looks right on any device",
  "Form or scheduling integration — your choice of tool, wired and tested",
  "SEO basics — meta tags and Open Graph so the link looks right when shared",
  "1 round of revisions — we get it right before launch",
  "Vercel deploy & handoff — live, custom domain connected, you&apos;re done",
];

const goodFit = [
  "Paid ad campaigns that need a dedicated, relevant destination page",
  "Product or service launches — a single, clear pitch page",
  "Event sign-ups, webinar registrations, waitlist captures",
  "Testing a new offer or message before investing in a full site",
  "Seasonal promotions or time-limited campaigns",
];

const pricingNotes = `£450 is the starting point for a straightforward landing page with a form and
basic integrations. Pages with animations, multiple integrations, or custom
components are scoped individually. If the landing page proves successful and
you want to expand into a fuller site, the work can transfer toward a build
package.`;

export default function LandingPagesPage() {
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
            Landing Pages
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-heading text-5xl font-bold text-primary inline-block origin-left transition-transform duration-300 group-hover:scale-105">
              From £450
            </span>
            <span className="text-sm text-muted-foreground">Fast turn · 2–3 days typical</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            A focused, conversion-first landing page built in days, not weeks. Clear
            headline, strong call-to-action, form or booking embed, and a mobile-perfect
            layout — ideal for paid campaigns, product launches, event sign-ups, or testing
            a new offer before committing to a full site.
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

      {/* Pricing notes */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 {...reveal("up")} className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Pricing Notes
          </h2>
          <p {...reveal("up")} className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {pricingNotes}
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
              Send me the goal of the page, who it&apos;s for, and any copy or assets you
              already have. I&apos;ll confirm scope and turn it around quickly.
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
                  Back to Services
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Something Faster or More Complex?"
        description="If you need it in under 48 hours or want animations and multiple integrations, tell me — I&apos;ll flag the right scope and price."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Back to Services", href: "/services" }}
      />
    </>
  );
}
