import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";

// POST /api/stripe/subscribe
// Creates a Stripe Checkout session for a recurring monthly support plan.
// Rule: support plans (£49/£99/month) auto-renew — customers pay automatically.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planName, planPrice, customerEmail } = body as {
      planName: string; // "Care Plan" | "Growth Plan"
      planPrice: number; // 49 | 99
      customerEmail?: string;
    };

    if (!planName || !planPrice || planPrice <= 0) {
      return NextResponse.json(
        { error: "Missing or invalid plan details." },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      currency: "gbp",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: planPrice * 100, // in pence
            recurring: {
              interval: "month",
            },
            product_data: {
              name: `Scriptorcode ${planName}`,
              description:
                planPrice === 49
                  ? "Hosting monitoring, backups, security checks, and minor updates."
                  : "Everything in Care Plan plus content updates and quarterly SEO review.",
              metadata: {
                planName,
              },
            },
          },
        },
      ],
      customer_email: customerEmail,
      metadata: {
        type: "subscription",
        planName,
        planPrice: planPrice.toString(),
      },
      subscription_data: {
        description: `Scriptorcode ${planName} — monthly support`,
        metadata: {
          planName,
          planPrice: planPrice.toString(),
        },
      },
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}&type=subscription&plan=${encodeURIComponent(planName)}`,
      cancel_url: `${origin}/payment/cancelled?type=subscription`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to create subscription session. Please try again." },
      { status: 500 }
    );
  }
}
