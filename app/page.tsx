import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { BlogCard } from "@/components/blog-card";
import { ButtonLink } from "@/components/button-link";
import { CapabilityGroups } from "@/components/capability-groups";
import { ContactLinks } from "@/components/contact-links";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/blog-posts";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="container-shell flex min-h-[calc(100svh-5rem)] flex-col justify-center py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-7 text-olive">Vishvanath Naik · Portfolio</p>
          <h1 className="text-balance max-w-5xl text-[clamp(2.5rem,7vw,6.25rem)] font-medium leading-[0.98] tracking-[-0.055em]">
            I study customers, systems and markets—and turn those insights into practical growth strategies.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
            Chemical engineering graduate with experience across program management, customer research and operations. Currently building at the intersection of marketing, analytics and AI.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View selected work</ButtonLink>
            <ButtonLink href="/resume" variant="secondary">View résumé</ButtonLink>
          </div>
          <p className="mt-12 flex items-center gap-3 font-mono text-xs text-muted sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-olive" aria-hidden="true" />
            Based in Berlin · Open to full-time opportunities
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-[#efede7] py-24 md:py-32" aria-labelledby="selected-work">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              id="selected-work"
              label="01 · Selected work"
              title="Evidence-led thinking, applied to real questions."
              action={{ label: "View all projects", href: "/projects" }}
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-24 md:py-32" aria-labelledby="capabilities">
        <Reveal>
          <SectionHeading
            id="capabilities"
            label="02 · Capabilities"
            title="Connecting customer insight to commercial action."
          />
        </Reveal>
        <CapabilityGroups />
      </section>

      <section className="border-y border-line bg-[#efede7] py-24 md:py-32" aria-labelledby="writing">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              id="writing"
              label="03 · Writing"
              title="Ideas at the intersection of engineering and business."
              action={{ label: "Visit the blog", href: "/blog" }}
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-24 text-paper md:py-32" aria-labelledby="experience">
        <div className="container-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              id="experience"
              label="04 · Experience"
              title="Learning across research, programs and frontline operations."
              inverse
            />
          </Reveal>
          <ExperienceTimeline compact />
        </div>
      </section>

      <section className="container-shell py-24 md:py-36" aria-labelledby="contact-home">
        <Reveal>
          <p className="eyebrow text-olive">05 · Start a conversation</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 id="contact-home" className="text-balance max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl md:text-7xl">
              Have a role, project or problem worth exploring?
            </h2>
            <Link href="/contact" className="editorial-link w-fit font-mono text-sm font-medium">
              Get in touch <ArrowUpRight />
            </Link>
          </div>
          <div className="mt-16 border-t border-line pt-8">
            <ContactLinks />
          </div>
        </Reveal>
      </section>
    </>
  );
}
