import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";

// POST /api/stripe/checkout
// Creates a Stripe Checkout session for a 30% deposit on a project package.
// Rule: enquiry first — this endpoint is only called when the client explicitly
// wants to pay a deposit after having spoken with you.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { packageName, packagePrice, customerEmail, customerName } = body as {
      packageName: string;
      packagePrice: number; // e.g. 950, 1950, 3500
      customerEmail?: string;
      customerName?: string;
    };

    if (!packageName || !packagePrice || packagePrice <= 0) {
      return NextResponse.json(
        { error: "Missing or invalid package details." },
        { status: 400 }
      );
    }

    // 30% deposit — rounded to nearest penny
    const depositAmount = Math.round(packagePrice * 0.3 * 100); // in pence

    const origin = request.headers.get("origin") ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "gbp",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: depositAmount,
            product_data: {
              name: `30% Booking Deposit — ${packageName} Package`,
              description: `Deposit to secure your project. The remaining 70% (£${(packagePrice * 0.7).toFixed(2)}) is due upon completion.`,
              metadata: {
                packageName,
                fullPrice: packagePrice.toString(),
              },
            },
          },
        },
      ],
      customer_email: customerEmail,
      metadata: {
        type: "deposit",
        packageName,
        fullPrice: packagePrice.toString(),
        customerName: customerName ?? "",
      },
      payment_intent_data: {
        description: `30% deposit for ${packageName} website package`,
        metadata: {
          type: "deposit",
          packageName,
          customerName: customerName ?? "",
        },
      },
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}&type=deposit&package=${encodeURIComponent(packageName)}`,
      cancel_url: `${origin}/payment/cancelled?type=deposit`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session. Please try again." },
      { status: 500 }
    );
  }
}
