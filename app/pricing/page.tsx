import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Infinitechx website rebuild packages. Essential, Growth, and Premium plans to fit every budget.",
};

const packages = [
  {
    name: "Essential",
    price: "950",
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
    price: "1,950",
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
    price: "3,500",
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
    price: "49",
    description:
      "Hosting monitoring, backups, security checks, and minor updates.",
  },
  {
    name: "Growth Plan",
    price: "99",
    description:
      "Everything in Care Plan plus content updates and quarterly SEO review.",
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
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  "relative flex flex-col rounded-xl border bg-background p-8",
                  pkg.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border/40"
                )}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-8 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {pkg.name}
                </h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-foreground">
                    {"£"}{pkg.price}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    asChild
                    className={cn(
                      "w-full gap-2",
                      pkg.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                    size="lg"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
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
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl gap-8 sm:grid-cols-2">
            {supportPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-xl border border-border/40 bg-card p-8"
              >
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-bold text-primary">
                    {"£"}{plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Not Sure Which Package?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Book a free call and we will recommend the perfect plan for your business.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Book a Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
