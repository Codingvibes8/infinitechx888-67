import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 bg-background py-24 sm:py-32">
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
            Ready to Upgrade Your Website?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Your customers judge your business in the first 3 seconds. Let us
            make those 3 seconds count.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Book a Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Request a Proposal</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
