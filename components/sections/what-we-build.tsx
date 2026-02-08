import { Globe, Briefcase, Layout, FileText, Layers, Monitor } from "lucide-react";

const items = [
  { icon: Globe, label: "Business Websites" },
  { icon: Briefcase, label: "Service Company Websites" },
  { icon: Layout, label: "Portfolio & Showcase Sites" },
  { icon: FileText, label: "Landing Pages" },
  { icon: Layers, label: "Multi-Page Marketing Sites" },
  { icon: Monitor, label: "CMS-Powered Content Sites" },
];

export function WhatWeBuild() {
  return (
    <section className="border-t border-border/40 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What We Build
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            All built with Next.js, Tailwind, Vercel, and modern best practices.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-lg border border-border/40 bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
