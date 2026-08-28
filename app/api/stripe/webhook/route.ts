import { NextResponse } from "next/server";
import { headers } from "next/headers";
import stripe from "@/lib/stripe";
import type Stripe from "stripe";

// POST /api/stripe/webhook
// Receives signed Stripe webhook events.
// To test locally: stripe listen --forward-to localhost:3000/api/stripe/webhook
export async function POST(request: Request) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret || webhookSecret.startsWith("whsec_REPLACE")) {
    console.warn("[Stripe webhook] STRIPE_WEBHOOK_SECRET not configured — skipping verification.");
    return NextResponse.json({ received: true });
  }

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("[Stripe webhook] Signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Handle relevant events
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const type = session.metadata?.type;
      console.log(`[Stripe] Checkout completed — type: ${type}`, {
        sessionId: session.id,
        customer: session.customer_email,
        amount: session.amount_total,
        metadata: session.metadata,
      });
      // TODO: Send confirmation email via Resend
      break;
    }

    case "customer.subscription.created": {
      const sub = event.data.object as Stripe.Subscription;
      console.log("[Stripe] Subscription created:", sub.id, sub.metadata);
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      console.log("[Stripe] Subscription cancelled:", sub.id, sub.metadata);
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.warn("[Stripe] Payment failed for invoice:", invoice.id);
      break;
    }

    default:
      // Unhandled event — ignore
      break;
  }

  return NextResponse.json({ received: true });
}
