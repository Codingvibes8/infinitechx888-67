import { Zap, Shield, Paintbrush, TrendingUp, Smartphone, Puzzle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description:
      "Your new Next.js website loads in under a second. Faster sites rank higher, convert better, and build trust instantly.",
  },
  {
    icon: Shield,
    title: "Enterprise-Level Security",
    description:
      "No plugin vulnerabilities. No outdated themes. Just a clean, modern, secure build you can rely on.",
  },
  {
    icon: Paintbrush,
    title: "Premium Custom Design",
    description:
      "We don't use templates. Your website is designed from scratch to match your brand and impress your customers.",
  },
  {
    icon: TrendingUp,
    title: "SEO-Optimised Architecture",
    description:
      "Better Core Web Vitals. Cleaner code. Stronger search visibility. Built for Google from day one.",
  },
  {
    icon: Smartphone,
    title: "Perfect on Mobile",
    description:
      "Over 60% of visitors browse on their phone. Your site will look flawless on every device.",
  },
  {
    icon: Puzzle,
    title: "No Plugin Headaches",
    description:
      "No more plugin updates, conflicts, or breakages. Your site becomes lean, stable, and future-proof.",
  },
];

export function Features() {
  return (
    <section className="border-t border-border/40 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Upgrade With Infinitechx?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Everything your business needs to dominate online, built into every
            project.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/40 bg-background p-6 transition-all hover:border-primary/40"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
