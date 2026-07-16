export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const siteLinks: SiteLink[] = [
  { label: "Email", href: "mailto:naik.vishvanath.17@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishvanath-naik-083140197", external: true },
  { label: "GitHub", href: "https://github.com/vishvanathnaik", external: true },
];
