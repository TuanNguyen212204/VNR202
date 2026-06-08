import { FadeIn } from "./FadeIn";

type InfoCardProps = {
  icon: string;
  title: string;
  text: string;
};

export function InfoCard({ icon, title, text }: InfoCardProps) {
  return (
    <FadeIn>
      <div className="rounded-[14px] border border-border bg-white p-6">
        <span className="mb-3 block text-[1.6rem]">{icon}</span>
        <h4 className="mb-2.5 text-[1.05rem] font-semibold">{title}</h4>
        <p className="text-[0.93rem] text-text-muted">{text}</p>
      </div>
    </FadeIn>
  );
}
