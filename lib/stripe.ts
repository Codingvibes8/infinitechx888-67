import Stripe from "stripe";

let client: Stripe | null = null;

// Created lazily so the build doesn't require STRIPE_SECRET_KEY;
// the key is only checked when a Stripe route actually runs.
function getStripe(): Stripe {
  if (!client) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY environment variable is not set.");
    }
    client = new Stripe(key, {
      apiVersion: "2026-08-26.dahlia",
      typescript: true,
    });
  }
  return client;
}

const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    const instance = getStripe() as unknown as Record<string | symbol, unknown>;
    const value = instance[prop];
    return typeof value === "function" ? value.bind(instance) : value;
  },
});

export default stripe;
