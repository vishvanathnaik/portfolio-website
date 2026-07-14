import { siteLinks } from "@/data/site";
import { ArrowUpRight } from "./icons";

export function ContactLinks({ stacked = false }: { stacked?: boolean }) {
  return (
    <ul className={stacked ? "grid gap-0" : "flex flex-wrap gap-x-8 gap-y-4"}>
      {siteLinks.map((link) => (
        <li key={link.label} className={stacked ? "border-b border-line" : ""}>
          <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className={`editorial-link font-mono text-sm font-medium ${stacked ? "flex w-full justify-between py-5 text-lg" : ""}`}
          >
            {link.label} <ArrowUpRight />
          </a>
        </li>
      ))}
    </ul>
  );
}
