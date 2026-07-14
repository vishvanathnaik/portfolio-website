export type ProjectCategory = "Marketing" | "Growth" | "Operations" | "Strategy" | "Analytics" | "AI";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tags: ProjectCategory[];
  year: string;
  problem: string;
  methods: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "exxonmobil-guyana-economic-transformation",
    title: "ExxonMobil and Guyana’s Economic Transformation",
    category: "Strategy",
    tags: ["Strategy", "Analytics"],
    year: "2026",
    problem: "How can a resource-led economic transformation be evaluated across commercial opportunity, public value and long-term risk?",
    methods: ["Desk research", "Market analysis", "Scenario framing"],
    featured: true,
  },
  {
    slug: "wolt-customer-operations-growth-study",
    title: "Wolt Customer and Operations Growth Study",
    category: "Growth",
    tags: ["Growth", "Operations", "Marketing"],
    year: "2026",
    problem: "Where do customer expectations and operating realities create the clearest opportunities for sustainable growth?",
    methods: ["Customer journey", "Operations review", "Growth hypotheses"],
    featured: true,
  },
  {
    slug: "ai-assisted-marketing-research-system",
    title: "AI-Assisted Marketing Research System",
    category: "AI",
    tags: ["AI", "Marketing", "Analytics"],
    year: "2026",
    problem: "How can AI accelerate research synthesis while preserving source quality, human judgment and traceability?",
    methods: ["Workflow design", "Prompt systems", "Insight synthesis"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
