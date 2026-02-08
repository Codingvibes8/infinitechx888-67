import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border/40 bg-card transition-all hover:border-primary/40">
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} project screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
          aria-hidden="true"
        />
        <Badge
          variant="secondary"
          className="absolute left-4 top-4 border-border/60 bg-background/80 text-foreground backdrop-blur-sm"
        >
          {project.industry}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-wrap gap-2">
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

        {/* Results */}
        <ul className="flex flex-col gap-2">
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

        {/* CTA */}
        {project.liveURL !== "#" && (
          <Button
            asChild
            variant="outline"
            className="mt-auto gap-2 self-start bg-transparent"
          >
            <Link href={project.liveURL} target="_blank" rel="noopener noreferrer">
              View Live Site
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
}
