export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

// Replace these placeholders once the verified contact details are available.
export const siteLinks: SiteLink[] = [
  { label: "Email", href: "mailto:hello@vishvanathnaik.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile", external: true },
  { label: "GitHub", href: "https://github.com/your-username", external: true },
];
