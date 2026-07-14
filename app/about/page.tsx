import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "About Vishvanath Naik and his approach to customer, operational and growth problems.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["Start with the question", "Define the decision, audience and constraint before reaching for a method or tool."],
  ["Look across the system", "Connect customer behaviour, operational reality and commercial context—not just one metric."],
  ["Make insight usable", "Translate research and analysis into a clear recommendation, owner and next step."],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="An engineering foundation, applied to customers and business systems."
        intro="My path spans chemical engineering, program management, customer research and operations in Germany. The common thread is a practical interest in how complex systems work—and how they can work better for people."
      />

      <section className="container-shell grid gap-12 border-t border-line py-20 md:grid-cols-[0.75fr_1.25fr] md:py-28">
        <Reveal>
          <SectionHeading label="The story" title="From technical systems to commercial questions." />
        </Reveal>
        <Reveal delay={0.06}>
          <div className="max-w-2xl space-y-7 text-lg leading-8 text-muted">
            <p>
              Chemical engineering trained me to break complicated problems into components, work with imperfect information and balance performance against real constraints.
            </p>
            <p>
              I then moved closer to customer and business questions through program management and customer research. That shift sharpened my interest in why people choose, where processes fail and how teams turn evidence into action.
            </p>
            <p>
              Working in operations in Germany added a frontline perspective: good strategy only matters when it can survive the details of execution. Today, I am especially interested in roles where marketing, growth, operations, analytics and AI reinforce one another.
            </p>
            <aside className="border-l-2 border-olive bg-[#efede7] p-5 font-mono text-sm leading-6 text-ink">
              Content needed: add the specific turning points, responsibilities and examples that make this narrative distinctly yours.
            </aside>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-[#efede7] py-20 md:py-28" aria-labelledby="approach">
        <div className="container-shell">
          <Reveal>
            <SectionHeading id="approach" label="How I work" title="A simple approach to ambiguous business problems." />
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {principles.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="h-full bg-paper p-7 md:p-9">
                  <p className="font-mono text-xs text-olive">0{index + 1}</p>
                  <h3 className="mt-8 font-mono text-lg font-medium">{title}</h3>
                  <p className="mt-4 leading-7 text-muted">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
