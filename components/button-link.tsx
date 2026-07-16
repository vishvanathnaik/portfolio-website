import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
}) {
  const className = `inline-flex min-h-12 items-center justify-center gap-3 border px-5 font-mono text-sm font-medium transition-colors ${
    variant === "primary"
      ? "border-olive bg-[#dfe5d9] text-ink hover:bg-[#cfd8c7]"
      : "border-line bg-transparent text-ink hover:border-ink"
  }`;

  if (download) {
    return <a href={href} download className={className}>{children}<ArrowUpRight /></a>;
  }

  return <Link href={href} className={className}>{children}<ArrowUpRight /></Link>;
}
