import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume overview for Vishvanath Naik.",
  alternates: { canonical: "/resume" },
};

const skills = [
  ["Market research", "Competitive analysis · Consumer behaviour analysis · Customer segmentation"],
  ["Marketing strategy", "SWOT · PESTLE · Porter&apos;s Five Forces · Brand awareness campaigns"],
  ["Research & analytics", "Survey design · Statistical analysis · Data-driven insights"],
  ["Collaboration", "Cross-functional programs · Stakeholder communication · Customer-facing operations"],
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        label="Résumé"
        title="Experience across market research, programs and operations."
        intro="Chemical engineering graduate with experience generating customer and market insights across fintech, an early-stage water technology startup and frontline retail operations."
      >
        <div className="mt-8">
          <ButtonLink href="/resume.pdf" download>Download résumé</ButtonLink>
        </div>
      </PageHeader>

      <section className="bg-night py-20 text-paper md:py-28" aria-labelledby="resume-experience">
        <div className="container-shell grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <SectionHeading id="resume-experience" label="Experience" title="Research, programs and frontline execution." inverse />
          </Reveal>
          <ExperienceTimeline />
        </div>
      </section>

      <section className="container-shell grid gap-14 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <SectionHeading label="Education" title="Chemical Engineering" />
          <div className="mt-8 border-t border-line pt-6">
            <p className="font-mono font-medium">Bachelor of Technology, Chemical Engineering</p>
            <p className="mt-2 text-muted">National Institute of Technology Karnataka, Surathkal</p>
            <p className="mt-2 font-mono text-sm text-muted">2018 - 2022</p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading label="Selected research" title="Consumer buying behaviour" />
          <div className="mt-8 border-t border-line pt-6">
            <p className="font-mono font-medium">Celebrity Endorsements &amp; Consumer Buying Behavior</p>
            <p className="mt-2 leading-7 text-muted">
              Designed a survey-based study and used Pearson correlation and Cronbach&apos;s Alpha to examine how celebrity endorsements influence consumer purchase confidence.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-[#efede7] py-20 md:py-28" aria-labelledby="resume-skills">
        <div className="container-shell">
          <Reveal>
            <SectionHeading id="resume-skills" label="Skills" title="A research-led commercial toolkit." />
          </Reveal>
          <dl className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {skills.map(([term, detail]) => (
              <div key={term} className="bg-paper p-7">
                <dt className="font-mono font-medium">{term}</dt>
                <dd className="mt-3 leading-7 text-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
