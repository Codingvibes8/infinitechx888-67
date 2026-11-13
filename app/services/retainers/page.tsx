import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { reveal, revealAlternating } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Retainers — ongoing care for your website · Scriptorcode",
  description:
    "Ongoing services to keep your site healthy, improving, and earning after launch. Content & care, SEO monitoring, performance watch, CRO partnership, content retainer — from £95/month.",
};

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

export default function RetainersPage() {
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
            Retainers
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Ongoing services to keep your site healthy, improving, and earning after
            launch. Pick one, stack a few, or start small and add later.
          </p>
        </div>
      </section>

      {/* Retainer list */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-6">
            {retainers.map((r, i) => (
              <div
                key={r.name}
                {...revealAlternating(i, 80)}
                className="group card-shine card-glow rounded-xl border border-border/40 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {r.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="font-heading text-2xl font-bold text-primary inline-block transition-transform duration-300 group-hover:scale-105 origin-left">
                      {r.price}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2 border-t border-border/40 pt-4">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href="/contact">
                      Get This Plan
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mix and match note */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div
            {...reveal("up")}
            className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8"
          >
            <h3 className="font-heading text-xl font-bold text-foreground">
              Mix and Match
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Most clients start with one retainer and add more as they see the value. The
              Content & Care Taker and SEO Monitoring & Reporting are the most common starting
              point. If you&apos;re not sure, tell me what you&apos;d like to keep running smoothly and
              I&apos;ll suggest a combination.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Talk Through Your Options
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want Ongoing Support?"
        description="Tell me what you&apos;d like to keep running smoothly after launch and I&apos;ll suggest a retainer — or a combination — that fits."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Back to Services", href: "/services" }}
      />
    </>
  );
}
