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
  title: "Email Template Design — responsive HTML for any ESP · Scriptorcode",
  description:
    "Custom, responsive email templates built to render cleanly across Gmail, Outlook, Apple Mail, and mobile. Newsletters, transactional emails, onboarding sequences — from £150 per template.",
};

const features = [
  "Custom branded template design — built around your brand, not a generic block",
  "Responsive HTML — renders correctly across major email clients and mobile",
  "Cross-client rendering check — Gmail, Outlook, Apple Mail, mobile preview",
  "Editable copy blocks — update text and images without touching code",
  "Testing across major clients — we catch the rendering issues before you send",
];

const templateTypes = [
  "Newsletter templates — regular updates, blog roundups, announcements",
  "Promotional / campaign templates — offers, launches, seasonal pushes",
  "Transactional templates — order confirmations, password resets, account alerts",
  "Onboarding sequence templates — welcome emails, step-by-step introductions",
  "Event / webinar templates — reminders, follow-ups, recap emails",
];

const pricingNotes = `£150 is the starting point for a single newsletter template. Complex
templates with multiple sections, dynamic content blocks, or specific ESP
requirements (Mailchimp, HubSpot, Klaviyo, Campaign Monitor, etc.) are scoped
individually. A set of templates for a sequence is priced as a small project.`;

export default function EmailTemplatesPage() {
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
            Email Template Design
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-heading text-5xl font-bold text-primary inline-block origin-left transition-transform duration-300 group-hover:scale-105">
              From £150
            </span>
            <span className="text-sm text-muted-foreground">per template · responsive HTML · ESP-ready</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Custom, responsive email templates that render cleanly across Gmail, Outlook,
            Apple Mail, and mobile. Newsletters, transactional emails, onboarding sequences —
            whatever your email service provider needs, matched to your brand.
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

      {/* Template types */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Template Types
          </h2>
          <ul className="mt-6 space-y-3">
            {templateTypes.map((f) => (
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

      {/* Pricing notes */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Pricing Notes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {pricingNotes}
          </p>
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
              Tell me what kind of emails you send, which ESP you use, and whether you have
              existing brand assets. I&apos;ll confirm scope and turn the template around.
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
        title="Sending Regular Emails?"
        description="If you&apos;re already sending newsletters or campaigns, a custom template makes them look like they come from your brand — not a generic ESP."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Back to Services", href: "/services" }}
      />
    </>
  );
}
