import Image from "next/image";
import { conNguoiContent } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cardStyles = {
  coral: "border-coral bg-coral-light",
  blue: "border-blue bg-blue-light",
};

export function ConNguoi() {
  return (
    <section id="con-nguoi" className="overflow-hidden bg-white py-24">
      <Container className="relative">
        <span className="pointer-events-none absolute -left-4 -top-10 select-none text-[10rem] font-bold leading-none text-text opacity-[0.05]">
          {conNguoiContent.watermark}
        </span>

        <SectionHeading accent="coral">
          III. Tư tưởng Hồ Chí Minh về Con người
        </SectionHeading>

        <FadeIn>
          <h3 className="relative z-[1] mb-5 text-[1.25rem] font-bold">
            A. Quan niệm về con người
          </h3>
        </FadeIn>
        <div className="relative z-[1] grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] lg:h-[400px]">
              <Image
                src={images.conNguoi.src}
                alt={images.conNguoi.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <p className="text-text-muted">{conNguoiContent.conceptText}</p>
          </FadeIn>
        </div>

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            B. Con người là MỤC TIÊU — Con người là ĐỘNG LỰC
          </h3>
        </FadeIn>
        <div className="relative z-[1] mt-6 grid gap-6 lg:grid-cols-2">
          {conNguoiContent.targetMotive.map((card) => (
            <FadeIn key={card.title}>
              <div
                className={`rounded-[18px] border-2 p-8 ${cardStyles[card.type]}`}
              >
                <h4 className="mb-4 text-[1.2rem] font-bold tracking-wide">
                  {card.title}
                </h4>
                {"paragraphs" in card &&
                  card.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="mb-3.5 whitespace-pre-line text-[0.95rem] text-text-muted last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                {"leadQuotes" in card &&
                  card.leadQuotes?.map((q, i) => (
                    <p key={i} className="mb-3.5 font-bold text-text">
                      {q}
                    </p>
                  ))}
                {"text" in card && card.text && (
                  <p className="text-[0.95rem] text-text-muted">{card.text}</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            C. Xây dựng con người toàn diện
          </h3>
        </FadeIn>
        <div className="relative z-[1] my-8 grid gap-[18px] md:grid-cols-2">
          {conNguoiContent.qualities.map((q) => (
            <FadeIn key={q.icon}>
              <div className="flex items-start gap-3.5 rounded-xl border border-border bg-white p-[18px]">
                <span className="shrink-0 text-[1.4rem]">{q.icon}</span>
                <p className="text-[0.93rem] text-text-muted">{q.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <blockquote className="relative z-[1] mx-auto mt-12 max-w-[700px] text-center text-[clamp(1.2rem,2.5vw,1.6rem)] italic text-coral">
            &ldquo;{conNguoiContent.centerQuote.text}&rdquo;
            <footer className="mt-3 text-[0.95rem] not-italic text-text-muted">
              {conNguoiContent.centerQuote.footer}
            </footer>
          </blockquote>
        </FadeIn>
      </Container>
    </section>
  );
}
