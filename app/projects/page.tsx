import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectGrid } from "@/components/project-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects across marketing, growth, operations, strategy, analytics and AI.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Work"
        title="Projects that turn open questions into structured decisions."
        intro="A growing collection of research, strategy and operating work. The current entries are clearly marked portfolio concepts and will become full case studies as source material is added."
      />
      <section className="container-shell border-t border-line py-16 md:py-24" aria-label="Project collection">
        <ProjectGrid projects={projects} />
      </section>
    </>
  );
}
