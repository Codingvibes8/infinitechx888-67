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
  title: "UX Heuristic Review — friction points & quick wins · Scriptorcode",
  description:
    "A lightweight review of an existing site against established UX principles. Friction-point inventory, quick wins, and a clear improvement roadmap. From £250.",
};

const features = [
  "Heuristic evaluation of up to 5 key pages — assessed against recognised UX principles",
  "Friction-point inventory with severity ratings — what&apos;s blocking users and how bad it is",
  "Quick-win recommendations — low-effort, high-impact changes you can make immediately",
  "Longer-term improvement roadmap — the bigger moves worth planning for",
  "Handoff call (30 min) — walk through the findings and agree on priorities",
];

const whatWeReview = [
  "Navigation and information architecture — can people find what they need?",
  "Page layout and visual hierarchy — is the important stuff obvious?",
  "Call-to-action clarity and placement — is the next step clear and easy?",
  "Form and input experience — are fields clear, labels helpful, errors manageable?",
  "Readability and content structure — is the copy scannable and purposeful?",
  "Mobile experience — does the site hold up on smaller screens?",
  "Consistency — do pages feel like they belong to the same site?",
];

const deliverables = `A written review with a friction-point inventory (each issue rated by severity
and effort), a list of quick wins you can action immediately, and a roadmap of
longer-term improvements. A 30-minute handoff call to walk through the findings.
You take it from there — or we can implement the fixes.`;

export default function UxReviewPage() {
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
            UX Heuristic Review
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-heading text-5xl font-bold text-primary inline-block origin-left transition-transform duration-300 group-hover:scale-105">
              From £250
            </span>
            <span className="text-sm text-muted-foreground">One-time review · up to 5 key pages</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Not ready for a full redesign? A heuristic review walks through your current
            site against established UX principles, documents where users are likely to
            stumble, and proposes practical, low-risk fixes. A good first step for prospects
            on the fence — and a lower-cost way to demonstrate your value.
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

      {/* What we review */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 {...reveal("up")} className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            What We Review
          </h2>
          <ul className="mt-6 space-y-3">
            {whatWeReview.map((f, i) => (
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

      {/* Deliverables */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 {...reveal("up")} className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Deliverables
          </h2>
          <p {...reveal("up")} className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {deliverables}
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
              Send me the site URL and any specific pages or flows you&apos;re concerned about. I&apos;ll
              confirm scope and turn the review around within a few days.
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
        title="Site Works — But Not Great?"
        description="A UX review spots the friction that&apos;s costing you conversions and gives you a clear list of what to fix first."
        primary={{ label: "Book a UX Review", href: "/contact" }}
        secondary={{ label: "Back to Services", href: "/services" }}
      />
    </>
  );
}
