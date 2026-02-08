import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Infinitechx. Book a free website audit, request a proposal, or start your Next.js rebuild today.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@infinitechx.com",
    href: "mailto:hello@infinitechx.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "London, UK",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri, 9am - 6pm",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Let&apos;s Build Something Great
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Whether you want a full website rebuild or just a performance
              audit, we are here to help. Fill in the form below and we will be
              in touch within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Details */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Direct Contact
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Prefer to reach out directly? Use the details below.
              </p>

              <div className="mt-8 space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-xl border border-border/40 bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Free Website Audit
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Not sure where to start? We will review your current website
                  and provide a detailed report on speed, SEO, security, and
                  design — completely free.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-border/40 bg-background p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
