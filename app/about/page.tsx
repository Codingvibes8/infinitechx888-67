import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Target, Palette, BarChart3, Settings, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Infinitechx is a modern web development studio specialising in Next.js websites that are fast, secure, beautifully designed, and built to convert.",
};

const approach = [
  {
    icon: Target,
    title: "Strategy First",
    description:
      "We learn your business, audience, and goals before writing a single line of code.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Every layout, section, and component is crafted specifically for your brand.",
  },
  {
    icon: Code2,
    title: "Modern Development",
    description:
      "We use Next.js, Tailwind, and Vercel to deliver enterprise-level performance.",
  },
  {
    icon: BarChart3,
    title: "Conversion Focused",
    description:
      "Your website becomes a sales engine, not just a digital brochure.",
  },
  {
    icon: Settings,
    title: "Long-Term Reliability",
    description:
      "No plugin bloat. No theme conflicts. No maintenance nightmares.",
  },
];

const whyUs = [
  "Full-stack expertise",
  "Business-minded approach",
  "Clean, scalable code",
  "Transparent pricing",
  "Fast turnaround",
  "Ongoing support available",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Who We Are
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Infinitechx is a modern web development studio specialising in
              Next.js websites that are fast, secure, beautifully designed, and
              built to convert.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              We help businesses move away from slow, outdated WordPress sites
              and into a new era of performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Mission
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              To build websites that don&apos;t just look good — but drive real
              business results.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Approach
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/40 bg-card p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Infinitechx */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Why Infinitechx?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Built by a full-stack developer with real business experience.
                Modern tech stack: Next.js, Tailwind, Supabase, Vercel.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border/40 bg-background p-4"
                >
                  <HeartHandshake className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Work With Us?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Let us turn your website into a high-performance business asset.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Get in Touch
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
