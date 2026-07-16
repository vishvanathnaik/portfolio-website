export type BlogPost = {
  slug: string;
  title: string;
  theme: string;
  excerpt: string;
  status: "planned" | "published";
};

export const blogPosts: BlogPost[] = [
  {
    slug: "chemical-engineering-marketing-systems",
    title: "What chemical engineering taught me about marketing systems",
    theme: "Engineering × Marketing",
    excerpt:
      "A practical look at feedback loops, constraints and trade-offs—and why they matter when designing customer acquisition and growth strategies.",
    status: "planned",
  },
  {
    slug: "customer-insight-frontline-operations",
    title: "Customer insight meets frontline operations",
    theme: "Operations × Growth",
    excerpt:
      "Lessons from connecting customer research and program work with the daily realities of service quality, speed and execution.",
    status: "planned",
  },
  {
    slug: "researching-energy-transitions-as-systems",
    title: "How to research an energy transition without losing the system",
    theme: "Energy × Strategy",
    excerpt:
      "A framework for examining commercial opportunity, public value and long-term risk in resource-led economic transitions.",
    status: "planned",
  },
];
