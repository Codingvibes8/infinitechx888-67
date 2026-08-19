import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonConfig {
  label: string;
  href: string;
  variant?: "default" | "outline" | "link";
}

interface CTASectionProps {
  title: string;
  description: string;
  primary: CTAButtonConfig;
  secondary?: CTAButtonConfig;
  variant?: "full" | "card";
  background?: "background" | "card";
}

export function CTASection({
  title,
  description,
  primary,
  secondary,
  variant = "full",
  background = "background",
}: CTASectionProps) {
  const actions = (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button asChild size="lg" className="gap-2">
        <Link href={primary.href}>
          {primary.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
      {secondary && (
        <Button
          asChild
          variant={secondary.variant === "link" ? "link" : "outline"}
          size="lg"
          className={cn(
            secondary.variant === "outline" && "bg-transparent",
            secondary.variant === "link" && "text-foreground hover:text-primary"
          )}
        >
          <Link href={secondary.href}>{secondary.label}</Link>
        </Button>
      )}
    </div>
  );

  if (variant === "card") {
    return (
      <div className="relative isolate overflow-hidden rounded-3xl border border-border/50 bg-secondary/30 px-6 py-24 text-center shadow-2xl sm:px-16">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground text-balance">
          {description}
        </p>
        {actions}
      </div>
    );
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden border-t border-border/40 py-24 sm:py-32",
        background === "card" ? "bg-card" : "bg-background"
      )}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-20"
        aria-hidden="true"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-accent/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
          {actions}
        </div>
      </div>
    </section>
  );
}
