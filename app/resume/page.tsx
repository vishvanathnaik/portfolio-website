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
  ["Research", "Customer interviews · Market research · Competitor analysis"],
  ["Growth & marketing", "Positioning · Funnel analysis · Campaign strategy"],
  ["Operations", "Process improvement · Coordination · Customer experience"],
  ["Analytics & AI", "Dashboards · Automation · AI-assisted research · Insight synthesis"],
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        label="Résumé"
        title="Experience across programs, customer insight and operations."
        intro="This page is a concise overview. Dates, role titles and detailed achievements remain intentionally blank until verified source information is supplied."
      >
        <div className="mt-8">
          <ButtonLink href="/resume.pdf" download>Download résumé</ButtonLink>
          <p className="mt-3 font-mono text-xs text-muted">PDF placeholder path: /resume.pdf · File not added yet</p>
        </div>
      </PageHeader>

      <section className="bg-night py-20 text-paper md:py-28" aria-labelledby="resume-experience">
        <div className="container-shell grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <SectionHeading id="resume-experience" label="Experience" title="Roles to complete with verified details." inverse />
          </Reveal>
          <ExperienceTimeline />
        </div>
      </section>

      <section className="container-shell grid gap-14 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <SectionHeading label="Education" title="Chemical Engineering" />
          <div className="mt-8 border-t border-line pt-6">
            <p className="font-mono font-medium">Degree and institution</p>
            <p className="mt-2 text-muted">Content needed: institution, degree title, location and dates.</p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading label="Certifications" title="Additional learning" />
          <div className="mt-8 border-t border-line pt-6">
            <p className="font-mono font-medium">Certifications placeholder</p>
            <p className="mt-2 text-muted">Content needed: verified certification names, issuers and dates.</p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-[#efede7] py-20 md:py-28" aria-labelledby="resume-skills">
        <div className="container-shell">
          <Reveal>
            <SectionHeading id="resume-skills" label="Skills" title="A cross-functional toolkit." />
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
