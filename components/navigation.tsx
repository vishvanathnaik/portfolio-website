"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "./icons";

const links = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="font-mono text-lg font-semibold tracking-[-0.04em]" aria-label="Vishvanath Naik, home">
          VN<span className="text-olive">.</span>
        </Link>
        <button
          className="grid h-11 w-11 place-items-center md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 font-mono text-xs font-medium uppercase tracking-[0.1em] transition-colors hover:text-olive ${active ? "text-ink" : "text-muted"}`}
                >
                  {link.label}
                  {active && <span className="absolute inset-x-0 -bottom-[1.42rem] h-px bg-olive" aria-hidden="true" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div id="mobile-navigation" hidden={!open} className="border-t border-line bg-paper md:hidden">
        <ul className="container-shell py-4">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className="flex items-center justify-between border-b border-line py-4 font-mono text-sm"
                >
                  {link.label}
                  {active && <span className="h-2 w-2 rounded-full bg-olive" aria-label="Current page" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
