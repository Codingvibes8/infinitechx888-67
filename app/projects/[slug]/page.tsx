import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects | Scriptorcode`,
    description: project.description,
  };
}

export default async function ProjectPage(props: { params: Params }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative border-b border-border/40 bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="mb-10">
            <Button asChild variant="ghost" className="group -ml-4 gap-2 text-muted-foreground hover:bg-transparent hover:text-foreground">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-6 rounded-full border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                {project.industry}
              </Badge>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {project.liveURL && project.liveURL !== "#" && project.liveURL !== "https://your-saas-demo-url.com/" && (
                <div className="mt-10 flex items-center gap-x-6">
                  <Button asChild size="lg" className="rounded-full gap-2 px-8 shadow-xl shadow-primary/20 transition-all hover:scale-105">
                    <Link href={project.liveURL} target="_blank" rel="noopener noreferrer">
                      Visit Live Project
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
            
            <div className="relative lg:ml-auto">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/50 bg-muted/50 shadow-2xl lg:w-[36rem]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Services Provided */}
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Services Provided
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.name}
                    className="group relative flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-foreground">{service.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Results */}
          <div>
             <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8 flex items-center gap-3">
               <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Key Results
            </h2>
            <ul className="space-y-6">
              {project.results.map((result, index) => (
                <li
                  key={index}
                  className="flex gap-4 rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-lg text-muted-foreground">{result}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Embedded CTA */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="relative isolate overflow-hidden rounded-3xl bg-secondary/30 px-6 py-24 text-center shadow-2xl sm:px-16 border border-border/50">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Want similar results for your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground text-balance">
             Let's discuss how we can help you achieve your goals and scale your digital presence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg transition-transform hover:scale-105">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild variant="link" size="lg" className="text-foreground transition-colors hover:text-primary">
               <Link href="/projects">
                 View more projects <span aria-hidden="true" className="ml-1">→</span>
               </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
