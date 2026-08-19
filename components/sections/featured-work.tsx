import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const featured = projects.filter((p) => p.featured);

export function FeaturedWork() {
  if (featured.length === 0) return null;

  return (
    <section className="border-t border-border/40 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Featured Work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            A closer look at builds we&apos;re especially proud of — custom,
            high-performing, and engineered to convert.
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {featured.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <div
                key={project.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={cn(
                    "group card-shine card-glow relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border/40 shadow-2xl shadow-primary/10 transition-shadow duration-500 hover:border-primary/40 hover:shadow-primary/20",
                    flipped && "lg:order-2"
                  )}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Badge className="absolute left-4 top-4 border-border/60 bg-background/80 text-foreground backdrop-blur-sm">
                    {project.industry}
                  </Badge>
                </Link>

                <div className={cn(flipped && "lg:order-1")}>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        <service.icon className="h-3.5 w-3.5 text-primary" />
                        {service.name}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {result}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button asChild size="lg" className="gap-2">
                      <Link href={`/projects/${project.slug}`}>
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    {project.liveURL !== "#" && (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="gap-2 bg-transparent"
                      >
                        <Link
                          href={project.liveURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Site
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
