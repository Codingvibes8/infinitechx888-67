"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CreditCard } from "lucide-react";

interface DepositButtonProps {
  packageName: string;
  packagePrice: number; // full price in £ e.g. 950
  className?: string;
}

export function DepositButton({ packageName, packagePrice, className }: DepositButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const depositAmount = Math.round(packagePrice * 0.3);

  async function handleClick() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageName, packagePrice }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Could not create checkout session.");
      }

      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="space-y-1">
      <Button
        onClick={handleClick}
        disabled={loading}
        variant="outline"
        size="lg"
        className={`w-full gap-2 transition-all duration-300 ${className ?? ""}`}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <CreditCard className="h-4 w-4" />
        )}
        {loading ? "Redirecting…" : `Pay £${depositAmount} Deposit (30%)`}
      </Button>
      {error && (
        <p className="text-xs text-destructive text-center">{error}</p>
      )}
    </div>
  );
}
