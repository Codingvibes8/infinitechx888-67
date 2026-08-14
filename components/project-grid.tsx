"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | (typeof projects)[number]["industry"];

export function ProjectGrid() {
  const filters = useMemo<Filter[]>(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.industry)))],
    []
  );
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.industry === active),
    [active]
  );

  return (
    <>
      <div
        className="mb-12 flex flex-wrap items-center justify-center gap-2"
        role="group"
        aria-label="Filter projects by industry"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-300",
              active === filter
                ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "border-border/40 bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
