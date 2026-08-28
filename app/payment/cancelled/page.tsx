import type { Metadata } from "next";
import Link from "next/link";
import { XCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Payment Cancelled — Scriptorcode",
  description: "Your payment was cancelled. No charges were made.",
};

export default async function PaymentCancelledPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const isSubscription = params.type === "subscription";

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-background py-24">
      <div className="mx-auto max-w-lg px-6 text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted ring-8 ring-muted/30">
          <XCircle className="h-10 w-10 text-muted-foreground" />
        </div>

        {/* Heading */}
        <h1 className="mt-8 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Payment cancelled
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          No worries — no charge was made.{" "}
          {isSubscription
            ? "You can subscribe whenever you're ready."
            : "You can pay your deposit whenever you're ready to book."}
        </p>

        {/* Info box */}
        <div className="mt-8 rounded-xl border border-border/40 bg-card p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <MessageCircle className="h-4 w-4" />
            </div>
            <p className="text-left text-sm leading-relaxed text-muted-foreground">
              If you had trouble or have a question about pricing, feel free to{" "}
              <Link
                href="/contact"
                className="text-primary underline-offset-4 hover:underline"
              >
                get in touch
              </Link>{" "}
              and I&apos;ll be happy to help.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/pricing">
              <ArrowLeft className="h-4 w-4" />
              Back to Pricing
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
