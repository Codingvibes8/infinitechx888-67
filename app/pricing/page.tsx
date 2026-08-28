import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageSquare, RefreshCw, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/cta-section";
import { DepositButton } from "@/components/deposit-button";
import { SubscribeButton } from "@/components/subscribe-button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing — Scriptorcode",
  description:
    "Transparent pricing for Scriptorcode website rebuild packages. Essential, Growth, and Premium plans to fit every budget. Pay a 30% deposit to book.",
};

const packages = [
  {
    name: "Essential",
    price: 950,
    description:
      "Perfect for small businesses needing a clean, modern upgrade.",
    popular: false,
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
    price: 1950,
    description:
      "For businesses that rely on their website for leads and want a premium, conversion-focused experience.",
    popular: true,
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
    price: 3500,
    description:
      "A fully bespoke, high-end brand experience with animations, advanced CMS, and custom components.",
    popular: false,
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

const supportPlans = [
  {
    name: "Care Plan",
    price: 49,
    description:
      "Hosting monitoring, backups, security checks, and minor updates.",
    features: [
      "Uptime monitoring",
      "Weekly backups",
      "Security scans",
      "Minor content updates",
    ],
  },
  {
    name: "Growth Plan",
    price: 99,
    description:
      "Everything in Care Plan plus content updates and quarterly SEO review.",
    features: [
      "Everything in Care Plan",
      "Monthly content updates",
      "Quarterly SEO review",
      "Priority response",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Website Rebuild Packages
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Transparent pricing. No hidden fees. Choose the package that fits
              your business, and let us build something exceptional.
            </p>

            {/* How it works callout */}
            <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 px-6 py-5 text-left">
              <p className="text-sm font-semibold text-foreground mb-3">How it works</p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-bold text-primary">1</span>
                  <span>Send an enquiry — tell me about your site and goals</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-bold text-primary">2</span>
                  <span>We speak, I scope the project and send a proposal</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-bold text-primary">3</span>
                  <span>Pay a 30% deposit below to secure your spot and we begin</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, i) => {
              const delays = [
                "animate-card-enter",
                "animate-card-enter-d1",
                "animate-card-enter-d2",
              ];
              const deposit = Math.round(pkg.price * 0.3);
              return (
                <div
                  key={pkg.name}
                  className={cn(
                    "group card-glow card-animate-init relative flex flex-col rounded-xl border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
                    pkg.popular
                      ? "border-primary shadow-lg shadow-primary/10 animate-border-glow"
                      : "border-border/40 hover:border-primary/40",
                    delays[i] || delays[2]
                  )}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-8 bg-primary text-primary-foreground animate-glow">
                      Most Popular
                    </Badge>
                  )}
                  <h2 className="font-heading text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {pkg.name}
                  </h2>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-foreground transition-transform duration-300 group-hover:scale-105 inline-block origin-left">
                      £{pkg.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    30% deposit (£{deposit}) to book · balance on completion
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA buttons */}
                  <div className="mt-8 flex flex-col gap-3">
                    {/* Primary: Enquire first */}
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
                      <Link href="/contact">
                        <MessageSquare className="h-4 w-4" />
                        Send Enquiry
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    {/* Secondary: Pay deposit (after speaking with client) */}
                    <DepositButton
                      packageName={pkg.name}
                      packagePrice={pkg.price}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deposit note */}
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border/40 bg-background px-6 py-4 flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Deposit policy: </span>
              A 30% deposit is required to book your project slot. The remaining 70%
              is invoiced upon completion. Deposits are non-refundable once work has begun.
              Payments are processed securely via Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ongoing Support Plans
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Keep your site running perfectly with optional monthly support.
              Subscribe and cancel anytime.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl gap-8 sm:grid-cols-2">
            {supportPlans.map((plan, i) => {
              const delays = ["animate-card-enter", "animate-card-enter-d1"];
              return (
                <div
                  key={plan.name}
                  className={`group card-glow card-shine card-animate-init rounded-xl border border-border/40 bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg ${delays[i] || delays[1]}`}
                >
                  <h3 className="font-heading text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-105 inline-block origin-left">
                      £{plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <RefreshCw className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Recurring · cancel anytime</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <SubscribeButton planName={plan.name} planPrice={plan.price} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subscription note */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-border/40 bg-card px-6 py-4 flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Auto-renewal: </span>
              Support plan subscriptions renew automatically each month. You can
              cancel at any time from your Stripe billing portal. Payments are
              processed securely via Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Not Sure Which Package?"
        description="Book a free call and we will recommend the perfect plan for your business."
        primary={{ label: "Book a Free Audit", href: "/contact" }}
        background="card"
      />
    </>
  );
}
