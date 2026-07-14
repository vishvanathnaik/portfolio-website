import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const description =
  "Portfolio of Vishvanath Naik, featuring work across marketing, operations, growth strategy, analytics and AI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vishvanathnaik.com"),
  title: {
    default: "Vishvanath Naik — Marketing, Operations & Growth",
    template: "%s — Vishvanath Naik",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://vishvanathnaik.com",
    title: "Vishvanath Naik — Marketing, Operations & Growth",
    description,
    siteName: "Vishvanath Naik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishvanath Naik — Marketing, Operations & Growth",
    description,
  },
  icons: { icon: "/icon.svg" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vishvanath Naik",
  url: "https://vishvanathnaik.com",
  homeLocation: { "@type": "Place", name: "Berlin, Germany" },
  knowsAbout: [
    "Marketing",
    "Growth strategy",
    "Operations",
    "Customer research",
    "Analytics",
    "Artificial intelligence",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-night px-4 py-2 font-mono text-sm text-paper transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
