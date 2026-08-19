import { CTASection } from "@/components/cta-section";

export function CTA() {
  return (
    <CTASection
      title="Ready to Upgrade Your Website?"
      description="Your customers judge your business in the first 3 seconds. Let us make those 3 seconds count."
      primary={{ label: "Book a Free Audit", href: "/contact" }}
      secondary={{ label: "Request a Proposal", href: "/contact" }}
    />
  );
}
