import { experience } from "@/data/experience";
import { Reveal } from "./reveal";

export function ExperienceTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="border-l border-[#555d57]">
      {experience.map((item, index) => (
        <Reveal key={item.company} delay={index * 0.06}>
          <li className={`${compact ? "pb-9" : "pb-12"} relative pl-7 last:pb-0`}>
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-night bg-[#aeb6a8]" aria-hidden="true" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-mono text-lg font-medium text-paper">{item.company}</h3>
              <span className="font-mono text-xs text-[#aeb6a8]">{item.period}</span>
            </div>
            <p className="mt-2 text-[#c6cbc7]">{item.role}</p>
            {!compact && <p className="mt-3 max-w-xl text-sm leading-6 text-[#9fa6a1]">{item.details}</p>}
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
