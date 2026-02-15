import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of high-performance websites and applications. From local businesses to SaaS platforms, see how Infinitechx delivers results.",
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
          {/* Filter tags */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {Array.from(new Set(projects.map((p) => p.industry))).map(
              (industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-border/40 bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {industry}
                </span>
              )
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Let us build something extraordinary for your business. Start with
              a free audit.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
