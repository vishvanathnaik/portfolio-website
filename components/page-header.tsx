import { Reveal } from "./reveal";

export function PageHeader({ label, title, intro, children }: { label: string; title: string; intro: string; children?: React.ReactNode }) {
  return (
    <header className="container-shell py-20 md:py-28 lg:py-36">
      <Reveal>
        <p className="eyebrow text-olive">{label}</p>
        <h1 className="mt-6 max-w-5xl text-balance text-[clamp(2.7rem,7vw,6rem)] font-medium leading-[1.02] tracking-[-0.055em]">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">{intro}</p>
        {children}
      </Reveal>
    </header>
  );
}
