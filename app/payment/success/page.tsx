import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Payment Successful — Scriptorcode",
  description: "Your payment was successful. We will be in touch shortly.",
};

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; package?: string; plan?: string }>;
}) {
  const params = await searchParams;
  const isDeposit = params.type === "deposit";
  const isSubscription = params.type === "subscription";
  const packageName = params.package ?? "";
  const planName = params.plan ?? "";

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-background py-24">
      <div className="mx-auto max-w-lg px-6 text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>

        {/* Heading */}
        <h1 className="mt-8 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {isSubscription ? "You're subscribed!" : "Deposit received!"}
        </h1>

        {/* Sub-copy */}
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {isDeposit && packageName ? (
            <>
              Your 30% deposit for the{" "}
              <span className="font-medium text-foreground">{decodeURIComponent(packageName)} Package</span>{" "}
              has been received. I&apos;ll be in touch within 24 hours to kick things off.
            </>
          ) : isSubscription && planName ? (
            <>
              You&apos;re now on the{" "}
              <span className="font-medium text-foreground">{decodeURIComponent(planName)}</span>.
              Your first payment has been taken and you&apos;ll be billed automatically each month.
              I&apos;ll be in touch to confirm the details.
            </>
          ) : (
            "Your payment was successful. I\u2019ll be in touch shortly."
          )}
        </p>

        {/* Receipt note */}
        <div className="mt-8 rounded-xl border border-border/40 bg-card p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-4 w-4" />
            </div>
            <p className="text-left text-sm leading-relaxed text-muted-foreground">
              A receipt has been sent to your email by Stripe. If you have any
              questions, email{" "}
              <a
                href="mailto:hello@scriptorcode.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                hello@scriptorcode.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
