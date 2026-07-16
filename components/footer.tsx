import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-shell flex flex-col gap-4 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Vishvanath Naik</p>
        <div className="flex gap-5">
          <Link href="/projects" className="hover:text-ink">Work</Link>
          <Link href="/blog" className="hover:text-ink">Blog</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
          <a href="#main-content" className="hover:text-ink">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
