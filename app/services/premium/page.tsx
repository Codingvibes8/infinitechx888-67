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
  title: "Premium — bespoke brand experience · Scriptorcode",
  description:
    "A fully bespoke, high-end Next.js brand experience with custom animations, advanced CMS, and custom components. Unlimited pages, e-commerce ready, priority support — from £3,500.",
};

const features = [
  "Unlimited pages — no artificial cap on the scope you need",
  "Bespoke brand design — visual identity shaped around your business, not a template",
  "Next.js build — fast, modern, SEO-friendly foundation",
  "Advanced SEO + structured data — schema markup, rich-result opportunities, site architecture built for rankings",
  "Custom forms + integrations — tailored to your workflow, wired to your stack",
  "Vercel hosting setup — deployed, custom domain connected, performance tuned",
  "Advanced CMS — a content model that fits how you actually work",
  "Custom animations — purposeful motion that reinforces the brand",
  "Custom components — made for your content and your user flows, not generic blocks",
  "E-commerce ready — product structure, cart, checkout wiring (Stripe or your preference)",
  "Priority support — faster responses during the build and a longer post-launch window",
  "Unlimited revisions — we iterate until it&apos;s exactly right",
  "Launch support (2 weeks) — extended hand-holding through and after go-live",
];

const goodFit = [
  "Established brands and businesses with a clear visual identity they want to express online",
  "Companies with a product or service catalog that needs a real e-commerce foundation",
  "Businesses replacing a site that no longer reflects their maturity or ambition",
  "Projects where custom components and interactions are core to the experience, not an afterthought",
];

const addOns = [
  "SEO Content & Meta Setup — from £300",
  "CMS Content Migration — from £400",
  "Third-Party Integrations — from £200 each",
  "Analytics Dashboard (Looker Studio) — from £250",
  "Accessibility Audit & Fixes — from £300",
  "Speed Optimisation Pass — from £250",
  "Custom Animations & Micro-Interactions — from £400",
];

export default function PremiumPage() {
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
            Premium
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-heading text-5xl font-bold text-primary inline-block origin-left transition-transform duration-300 group-hover:scale-105">
              £3,500
            </span>
            <span className="text-sm text-muted-foreground">Bespoke · from £3,500</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            A fully bespoke, high-end brand experience for businesses that want their
            website to feel like a proper extension of the brand — not a template with the
            logo swapped out. Custom animations, an advanced CMS, custom components, and
            the freedom to grow without hitting a page limit.
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

      {/* Typical add-ons */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 {...reveal("up")} className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Typical Add-ons
          </h2>
          <p {...reveal("up")} className="mt-3 text-sm text-muted-foreground">
            Premium projects often include several of these. Each is scoped and priced
            separately.
          </p>
          <ul className="mt-5 space-y-2">
            {addOns.map((a, i) => (
              <li
                key={a}
                {...revealAlternating(i, 60)}
                className="flex gap-3 rounded-lg border border-border/40 bg-background px-4 py-3 transition-all duration-300 hover:border-primary/30"
              >
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/10 text-primary">
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>
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
              Premium projects start with a conversation, not a form. Tell me about your
              brand, your audience, and what you want the site to do — I&apos;ll come back with
              a proposed scope, a rough structure, and a firm quote.
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
        title="Not Sure Premium Is the Right Call?"
        description="Tell me what you&apos;re trying to achieve and I&apos;ll be honest about whether Premium is the right fit — or whether Growth gets you there."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Back to Services", href: "/services" }}
      />
    </>
  );
}
