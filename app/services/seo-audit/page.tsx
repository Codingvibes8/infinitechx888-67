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
  title: "Technical SEO Audit — full crawl & fix list · Scriptorcode",
  description:
    "A full site crawl, Core Web Vitals assessment, and prioritised fix list for any existing site. Broken links, missing schema, slow pages, indexation gaps — all of it. From £350.",
};

const features = [
  "Full site crawl & issue inventory — every error, warning, and opportunity surfaced",
  "Core Web Vitals assessment — real performance read on the pages that matter",
  "Schema & structured data review — what&apos;s present, what&apos;s missing, what&apos;s wrong",
  "Indexation & sitemap check — what Google can and can&apos;t see",
  "Prioritised fix recommendations — ranked by likely impact, not just severity",
  "Handoff call (30 min) — walk through the findings and the recommended next steps",
];

const whatWeCover = [
  "404s, broken internal links, redirect chains",
  "Missing or malformed meta titles and descriptions",
  "Missing or incorrect structured data (schema)",
  "Slow pages and opportunities to improve Core Web Vitals",
  "Indexation issues — noindex clutter, sitemap gaps, canonical problems",
  "Content gaps and thin pages that are underperforming",
];

const whoItsFor = [
  "Business owners with an existing site who suspect it&apos;s underperforming",
  "Companies preparing for a rebuild who want a clear list of what to fix",
  "Teams who&apos;ve launched a site and want an honest read on how it&apos;s doing",
  "Anyone who wants the rationale for an SEO investment before committing",
];

const deliverables = `A written audit report with issue counts, example URLs, and a prioritised
action list. A 30-minute handoff call to walk through the findings and answer
questions. You get the report regardless, and you decide what to do with it —
fix it yourself, bring in someone else, or come to us for the work.`;

export default function SeoAuditPage() {
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
            Technical SEO Audit
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-heading text-5xl font-bold text-primary inline-block origin-left transition-transform duration-300 group-hover:scale-105">
              From £350
            </span>
            <span className="text-sm text-muted-foreground">One-time audit · any site</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            We crawl your site, surface the issues that are costing you rankings and
            traffic, and hand you a clear, prioritised report. Broken links, missing schema,
            slow pages, indexation gaps — all of it, with recommended fixes ranked by
            impact. You implement, or we can.
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

      {/* What we cover */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 {...reveal("up")} className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            What the Report Covers
          </h2>
          <ul className="mt-6 space-y-3">
            {whatWeCover.map((f, i) => (
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

      {/* Who it's for */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 {...reveal("up")} className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Who It&apos;s For
          </h2>
          <ul className="mt-6 space-y-3">
            {whoItsFor.map((f, i) => (
              <li
                key={f}
                {...revealAlternating(i, 60)}
                className="flex gap-3 rounded-lg border border-border/40 bg-background p-4 transition-all duration-300 hover:border-primary/30"
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
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
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
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div {...reveal("up")} className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Ready to Start?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Send me the site URL and any specific concerns you have. I&apos;ll confirm scope
              and turn the audit around within a few days.
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
        title="Want the Audit and the Fixes?"
        description="The audit is standalone, but if the findings point to a rebuild or a round of fixes, I can scope that too — no extra charge to talk it through."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Back to Services", href: "/services" }}
      />
    </>
  );
}
