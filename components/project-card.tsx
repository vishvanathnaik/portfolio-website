import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article id={project.slug} className="group flex h-full min-h-[28rem] flex-col bg-paper p-7 transition-colors duration-200 hover:bg-[#e9e7e0] md:p-8">
      <div className="flex items-start justify-between gap-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <p className="mt-12 font-mono text-xs text-olive">Portfolio concept</p>
      <h3 className="mt-4 text-balance text-2xl font-medium leading-tight tracking-[-0.025em]">{project.title}</h3>
      <p className="mt-5 leading-7 text-muted">{project.problem}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Methods and tools">
        {project.methods.map((method) => (
          <li key={method} className="border border-line px-2.5 py-1 font-mono text-[0.68rem] text-muted">{method}</li>
        ))}
      </ul>
      <Link href={`/projects#${project.slug}`} className="editorial-link mt-auto w-fit pt-10 font-mono text-sm font-medium" aria-label={`View future case study: ${project.title}`}>
        Case study coming soon <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}
