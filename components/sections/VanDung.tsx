import { vanDungContent } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BannerImage } from "@/components/ui/BannerImage";
import { AnswerBlock } from "@/components/ui/AnswerBlock";
import { SolutionCard } from "@/components/ui/SolutionCard";

export function VanDung() {
  return (
    <section id="van-dung" className="overflow-hidden py-24">
      <Container className="relative">
        <span className="pointer-events-none absolute -left-4 -top-10 select-none text-[10rem] font-bold leading-none text-text opacity-[0.05]">
          {vanDungContent.watermark}
        </span>

        <SectionHeading accent="blue">
          IV. Vận dụng thực tiễn — Trả lời đề bài
        </SectionHeading>
        <BannerImage
          src={images.vanDung.src}
          alt={images.vanDung.alt}
          height="sm"
        />

        {vanDungContent.answers.map((answer) => (
          <div key={answer.title}>
            <FadeIn>
              <h3 className="relative z-[1] mb-5 text-[1.25rem] font-bold">
                {answer.title}
              </h3>
            </FadeIn>
            <AnswerBlock
              verdict={answer.verdict}
              paragraphs={answer.paragraphs}
              conclusion={answer.conclusion}
              accent={answer.accent}
            />
          </div>
        ))}

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            Trả lời câu hỏi 3 — 3 giải pháp theo tư tưởng Hồ Chí Minh
          </h3>
        </FadeIn>
        <div className="relative z-[1] mt-6 grid gap-6 lg:grid-cols-3">
          {vanDungContent.solutions.map((sol) => (
            <SolutionCard key={sol.title} {...sol} />
          ))}
        </div>
      </Container>
    </section>
  );
}
