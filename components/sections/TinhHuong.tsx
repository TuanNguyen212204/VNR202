import Image from "next/image";
import { tinhHuongContent } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { QuestionCard } from "@/components/ui/QuestionCard";

export function TinhHuong() {
  return (
    <section id="tinh-huong" className="overflow-hidden py-24">
      <Container className="relative">
        <FadeIn>
          <span className="relative z-[1] mb-6 inline-block rounded-full bg-purple-light px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-purple">
            TÌNH HUỐNG ĐỀ BÀI
          </span>
        </FadeIn>

        <div className="relative z-[1] grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] lg:h-[400px]">
              <Image
                src={images.tinhHuong.src}
                alt={images.tinhHuong.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <p>{tinhHuongContent.intro}</p>
              <h3 className="mb-2 mt-8 text-[1.25rem] font-bold">
                {tinhHuongContent.subheading}
              </h3>
              <ul className="mt-4 list-none">
                {tinhHuongContent.problems.map((item, i) => (
                  <li
                    key={i}
                    className="relative mb-3.5 pl-[26px] text-text-muted before:absolute before:left-1 before:top-[9px] before:h-2 before:w-2 before:rounded-full before:bg-coral"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="relative z-[1] mt-12 grid gap-6 md:grid-cols-3">
          {tinhHuongContent.questions.map((q) => (
            <QuestionCard
              key={q.label}
              label={q.label}
              text={q.text}
              accent={q.accent}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
