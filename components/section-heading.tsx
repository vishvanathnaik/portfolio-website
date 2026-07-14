import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function SectionHeading({
  id,
  label,
  title,
  action,
  inverse = false,
}: {
  id?: string;
  label: string;
  title: string;
  action?: { label: string; href: string };
  inverse?: boolean;
}) {
  return (
    <div className={`grid gap-7 ${action ? "md:grid-cols-[1fr_auto] md:items-end" : ""}`}>
      <div>
        <p className={`eyebrow ${inverse ? "text-[#aeb6a8]" : "text-olive"}`}>{label}</p>
        <h2 id={id} className={`mt-4 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl ${inverse ? "text-paper" : "text-ink"}`}>
          {title}
        </h2>
      </div>
      {action && (
        <Link href={action.href} className="editorial-link w-fit font-mono text-sm font-medium">
          {action.label} <ArrowUpRight />
        </Link>
      )}
    </div>
  );
}
