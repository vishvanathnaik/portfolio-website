import type { Metadata } from "next";
import { ContactLinks } from "@/components/contact-links";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Vishvanath Naik in Berlin for roles, projects and thoughtful business problems.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let’s explore a useful question together."
        intro="I’m open to full-time opportunities and thoughtful conversations across marketing, growth, operations, strategy, analytics and AI. The most reliable way to reach me is by email or LinkedIn."
      />
      <section className="container-shell border-t border-line py-16 md:py-24">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow text-olive">Location</p>
              <p className="mt-3 font-mono text-lg">Berlin, Germany</p>
            </div>
            <div>
              <p className="eyebrow mb-6 text-olive">Direct links</p>
              <ContactLinks stacked />
              <p className="mt-8 max-w-xl border-l-2 border-olive pl-4 text-sm leading-6 text-muted">
                For roles, research collaborations or project conversations, email and LinkedIn are the best ways to reach me.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
