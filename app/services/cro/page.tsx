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
  title: "Conversion Rate Optimisation — find and fix the leaks · Scriptorcode",
  description:
    "A CRO review for sites with traffic that aren&apos;t converting. Funnel analysis, form friction, CTA placement, trust signals — and practical, tested recommendations. From £500.",
};

const features = [
  "Analytics & funnel review — where visitors enter, where they leave, where the drop-off is",
  "Form & CTA friction analysis — field count, copy, placement, and likely abandonment points",
  "Heatmap or session-recording review — where people click, scroll, and stop (where data is available)",
  "Trust-signal & social-proof audit — reviews, testimonials, badges, guarantees, and whether they&apos;re doing their job",
  "Prioritised CRO recommendations — ranked by effort vs impact, with clear rationale",
  "Handoff call & Q&A (45 min) — walk through the findings and plan the next moves",
];

const whatWeLookAt = [
  "Page flow — does the journey from entry to action make sense?",
  "Headline and value proposition — is it clear within the first few seconds?",
  "CTA clarity and placement — visible, compelling, the right number?",
  "Form design — too many fields, unclear privacy, weak submit experience?",
  "Trust and friction — social proof present and credible, objections addressed?",
  "Mobile experience — does the path to conversion hold up on phone?",
];

const ongoingOption = `For sites ready to move from recommendations to running experiments, there&apos;s
an ongoing CRO & A/B test partnership (from £500/month). We design tests,
implement variations, and analyse results — so you&apos;re improving conversion
continuously rather than once.`;

const deliverables = `A written CRO report with findings, evidence, and a prioritised action list —
quick wins first, then the higher-effort recommendations. A 45-minute handoff call to
walk through everything and agree on the first moves. You take it from there, or we can
implement.`;

export default function CroPage() {
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
            Conversion Rate Optimisation
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-heading text-5xl font-bold text-primary inline-block origin-left transition-transform duration-300 group-hover:scale-105">
              From £500
            </span>
            <span className="text-sm text-muted-foreground">One-time review · ongoing option available</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            A CRO review for sites that already have traffic but aren&apos;t turning it into
            leads or sales. We analyse your funnel, forms, CTAs, trust signals, and page
            flow, then deliver a set of tested, practical recommendations. Optional ongoing
            A/B test partnership for sites ready to run experiments.
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

      {/* What we look at */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            What We Look At
          </h2>
          <ul className="mt-6 space-y-3">
            {whatWeLookAt.map((f) => (
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

      {/* Ongoing option */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Ongoing A/B Testing Option
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {ongoingOption}
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/services/retainers">
                View Retainer Options
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Deliverables
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {deliverables}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Ready to Start?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Send me the site URL and what conversion means for you (leads, sales, sign-ups).
              If you have GA4 access or any session-recording tools, mention it — it helps
              the review.
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
        title="Traffic but No Conversions?"
        description="If your site gets visitors but not customers, a CRO review is the fastest way to find out why — and what to do about it."
        primary={{ label: "Book a CRO Review", href: "/contact" }}
        secondary={{ label: "Back to Services", href: "/services" }}
      />
    </>
  );
}
