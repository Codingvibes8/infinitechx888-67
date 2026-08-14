import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectGrid } from "@/components/project-grid";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of high-performance websites and applications. From local businesses to SaaS platforms, see how Scriptorcode delivers results.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent animate-glow" />
              {projects.length} Projects Delivered
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Our Work Speaks{" "}
              <span className="text-primary">For Itself</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              From local service businesses to cutting-edge SaaS applications,
              every project is custom-built to perform, convert, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="border-t border-border/40 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProjectGrid />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Be Our Next Success Story?"
        description="Let us build something extraordinary for your business. Start with a free audit."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  );
}
