import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing by Vishvanath Naik on marketing, operations, engineering, growth strategy, startups and energy.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Blog"
        title="Notes on customers, systems and markets."
        intro="A growing collection of essays connecting my engineering foundation with marketing, operations, growth, startups and energy. The first pieces are currently in development."
      />
      <section className="container-shell border-t border-line py-16 md:py-24" aria-label="Planned articles">
        <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
