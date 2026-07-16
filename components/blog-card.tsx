import type { BlogPost } from "@/data/blog-posts";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col bg-paper p-7 md:p-9">
      <div className="flex items-center justify-between gap-4 font-mono text-xs">
        <span className="text-olive">{post.theme}</span>
        <span className="text-muted">{post.status === "planned" ? "Planned essay" : "Published"}</span>
      </div>
      <h2 className="mt-10 text-2xl font-medium leading-tight tracking-[-0.025em]">{post.title}</h2>
      <p className="mt-5 flex-1 leading-7 text-muted">{post.excerpt}</p>
      <p className="mt-8 border-t border-line pt-5 font-mono text-xs text-muted">
        {post.status === "planned" ? "Writing in progress" : "Read article"}
      </p>
    </article>
  );
}
