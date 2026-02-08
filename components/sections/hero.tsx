import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarParticles } from "@/components/star-particles";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-36">
      {/* Animated star particles drifting right to left */}
      <StarParticles count={45} />

      {/* Subtle glow effect */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 -translate-x-1/2 opacity-30"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent animate-glow" />
              WordPress to Next.js Specialists
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Modern Websites That{" "}
              <span className="text-primary">Grow Your Business</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">
              Upgrade your outdated WordPress site to a lightning-fast, secure,
              high-converting Next.js experience. Custom design. Enterprise
              performance. Built to turn visitors into customers.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Get a Free Website Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-8 lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-heading font-semibold text-foreground">
                  {"< 1s"}
                </span>
                Average Load Time
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-heading font-semibold text-foreground">
                  100%
                </span>
                Custom Design
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-heading font-semibold text-foreground">
                  SEO
                </span>
                Optimised
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/40 shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero-dashboard.jpg"
                alt="Modern high-performance website dashboard built by Infinitechx"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient to blend edges */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            {/* Decorative glow behind image */}
            <div
              className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-accent/10 blur-[80px]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
