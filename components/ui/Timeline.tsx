import { FadeIn } from "./FadeIn";

type TimelineItem = {
  date: string;
  text: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <FadeIn>
      <div className="relative z-[1] mt-8 border-l-2 border-border pl-7">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative pb-8 last:pb-0 before:absolute before:-left-[35px] before:top-1.5 before:h-3 before:w-3 before:rounded-full before:border-[3px] before:border-purple-light before:bg-purple`}
          >
            <p className="mb-1.5 font-bold">{item.date}</p>
            <p className="text-[0.95rem] text-text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
