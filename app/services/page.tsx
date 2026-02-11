import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  RefreshCw,
  Paintbrush,
  Zap,
  TrendingUp,
  Puzzle,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From WordPress to Next.js rebuilds to custom design and SEO optimisation. Discover how Infinitechx can transform your online presence.",
};

const services = [
  {
    icon: RefreshCw,
    title: "WordPress to Next.js Rebuilds",
    description:
      "Our flagship service. We transform outdated WordPress sites into modern, high-performance Next.js websites.",
    features: [
      "Full redesign",
      "Next.js rebuild",
      "SEO-ready structure",
      "Mobile-first layout",
      "CMS (optional)",
      "Hosting setup",
    ],
  },
  {
    icon: Paintbrush,
    title: "Custom Website Design",
    description:
      "Beautiful, modern, conversion-focused designs tailored to your brand. No templates. No compromises.",
    features: [
      "Brand-first approach",
      "Custom UI components",
      "Responsive layouts",
      "Interactive prototypes",
      "Design system creation",
      "Revision rounds",
    ],
  },
  {
    icon: Zap,
    title: "High-Performance Development",
    description:
      "We build fast, secure, scalable websites using the most modern tools in the ecosystem.",
    features: [
      "Next.js & React",
      "Tailwind CSS",
      "Vercel hosting",
      "Supabase backend",
      "TypeScript",
      "API integrations",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance Optimisation",
    description:
      "Improve rankings, speed, and user experience with technical SEO best practices built into every project.",
    features: [
      "Core Web Vitals",
      "Structured data",
      "Meta optimisation",
      "Image optimisation",
      "Performance audits",
      "Analytics setup",
    ],
  },
  {
    icon: Puzzle,
    title: "CMS Integration",
    description:
      "Simple, modern content management so you can update your site without touching code.",
    features: [
      "Sanity",
      "Contentful",
      "Supabase",
      "Notion CMS",
      "Custom dashboards",
      "Content modelling",
    ],
  },
  {
    icon: Wrench,
    title: "Ongoing Support & Maintenance",
    description:
      "Optional monthly plans for updates, monitoring, and improvements to keep your site running perfectly.",
    features: [
      "Performance monitoring",
      "Security updates",
      "Content changes",
      "Bug fixes",
      "Quarterly reviews",
      "Priority support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Our Core Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              From complete WordPress-to-Next.js rebuilds to custom design,
              performance optimisation, and ongoing support. Everything you need
              to dominate online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, i) => {
              const delays = [
                "animate-card-enter",
                "animate-card-enter-d1",
                "animate-card-enter-d2",
                "animate-card-enter-d3",
                "animate-card-enter-d4",
                "animate-card-enter-d5",
              ];
              return (
                <div
                  key={service.title}
                  className={`group card-shine card-glow card-animate-init flex flex-col rounded-xl border border-border/40 bg-background p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl ${delays[i] || delays[5]}`}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:animate-icon-bounce">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Not Sure What You Need?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Book a free audit and we will recommend the best approach for your
              business.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Book a Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
