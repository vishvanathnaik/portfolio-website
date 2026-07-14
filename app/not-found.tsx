import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-[70svh] flex-col justify-center py-24">
      <p className="eyebrow text-olive">404 · Not found</p>
      <h1 className="mt-5 max-w-3xl text-5xl font-medium tracking-[-0.04em] md:text-7xl">This page is still taking shape.</h1>
      <p className="mt-6 max-w-lg text-lg leading-8 text-muted">The project case study or file you requested has not been published yet.</p>
      <Link href="/" className="editorial-link mt-8 w-fit font-mono text-sm font-medium">Return home</Link>
    </section>
  );
}
