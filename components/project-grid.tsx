"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";

const filters: Array<"All" | ProjectCategory> = ["All", "Marketing", "Growth", "Operations", "Strategy", "Analytics", "AI"];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visibleProjects = active === "All" ? projects : projects.filter((project) => project.tags.includes(active));

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`min-h-11 border px-4 font-mono text-xs transition-colors ${active === filter ? "border-night bg-night text-paper" : "border-line text-muted hover:border-ink hover:text-ink"}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="mt-5 font-mono text-xs text-muted" aria-live="polite">Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}</p>
      <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.04}><ProjectCard project={project} /></Reveal>
        ))}
      </div>
    </div>
  );
}
