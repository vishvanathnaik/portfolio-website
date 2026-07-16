import type { Metadata } from "next";
import Image from "next/image";
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
        intro="I am a chemical engineering graduate from NITK Surathkal with experience spanning market research, program management, customer insight and frontline operations. I am now based in Berlin and focused on research-led marketing and growth opportunities."
      />

      <section className="container-shell grid gap-12 border-t border-line py-20 md:grid-cols-[0.75fr_1.25fr] md:py-28">
        <Reveal>
          <div>
            <SectionHeading label="The story" title="From technical systems to commercial questions." />
            <Image
              src="/profile-photo.png"
              alt="Portrait of Vishvanath Naik in Berlin"
              width={284}
              height={284}
              className="mt-10 aspect-square w-full max-w-64 rounded-full object-cover ring-1 ring-line"
            />
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="max-w-2xl space-y-7 text-lg leading-8 text-muted">
            <p>
              Studying chemical engineering at the National Institute of Technology Karnataka taught me to break complex problems into components, work with imperfect information and balance performance against real constraints.
            </p>
            <p>
              At Dime Klear, an early-stage water filtration startup, I applied SWOT, PESTLE and Porter&apos;s Five Forces to assess industry dynamics, identify target customer segments and support marketing outreach. That experience moved me closer to the customer and commercial questions behind technical products.
            </p>
            <p>
              As a Junior Program Manager at Rupeek, I conducted customer research, tracked performance metrics and worked with cross-functional teams on customer-facing programs. My current role at Wolt in Berlin adds a frontline operating perspective: strategy and customer promises only matter when they hold up in daily execution.
            </p>
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
