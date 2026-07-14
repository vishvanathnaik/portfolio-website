import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vishvanathnaik.com";
  return ["", "/about", "/projects", "/resume", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}
