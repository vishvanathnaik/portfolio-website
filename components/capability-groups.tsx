import { Reveal } from "./reveal";

const capabilities = [
  { title: "Research", items: ["Customer interviews", "Market research", "Competitor analysis"] },
  { title: "Growth", items: ["Positioning", "Funnel analysis", "Campaign strategy"] },
  { title: "Operations", items: ["Process improvement", "Coordination", "Customer experience"] },
  { title: "Analytics and AI", items: ["Dashboards", "Automation", "AI-assisted research", "Insight synthesis"] },
];

export function CapabilityGroups() {
  return (
    <div className="mt-12 grid border-t border-line md:grid-cols-2">
      {capabilities.map((capability, index) => (
        <Reveal key={capability.title} delay={index * 0.05}>
          <article className="border-b border-line py-8 md:min-h-52 md:p-9 md:odd:border-r md:odd:pl-0 md:even:pr-0">
            <p className="font-mono text-xs text-olive">0{index + 1}</p>
            <h3 className="mt-6 font-mono text-xl font-medium">{capability.title}</h3>
            <p className="mt-4 max-w-md leading-7 text-muted">{capability.items.join(" · ")}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
