import { daoDucContent } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BannerImage } from "@/components/ui/BannerImage";
import { PullQuote } from "@/components/ui/PullQuote";
import { StandardCard } from "@/components/ui/StandardCard";

export function DaoDuc() {
  return (
    <section id="dao-duc" className="overflow-hidden py-24">
      <Container className="relative">
        <span className="pointer-events-none absolute -left-4 -top-10 select-none text-[10rem] font-bold leading-none text-text opacity-[0.05]">
          {daoDucContent.watermark}
        </span>

        <SectionHeading accent="teal">
          II. Tư tưởng Hồ Chí Minh về Đạo đức
        </SectionHeading>
        <BannerImage
          src={images.daoDucBanner.src}
          alt={images.daoDucBanner.alt}
          height="sm"
        />

        <FadeIn>
          <h3 className="relative z-[1] mb-5 text-[1.25rem] font-bold">
            A. Đạo đức là gốc
          </h3>
        </FadeIn>
        <PullQuote
          text={daoDucContent.ethicsQuote.text}
          footer={daoDucContent.ethicsQuote.footer}
          variant="teal"
        />
        {daoDucContent.ethicsIntro.map((para, i) => (
          <FadeIn key={i}>
            <p
              className={`relative z-[1] text-text-muted ${i === 0 ? "mt-5" : "mt-3.5"}`}
            >
              {para}
            </p>
          </FadeIn>
        ))}

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            B. 4 chuẩn mực đạo đức cách mạng
          </h3>
        </FadeIn>
        <div className="relative z-[1] mt-6 grid gap-6 md:grid-cols-2">
          {daoDucContent.standards.map((std) => (
            <StandardCard key={std.num} {...std} />
          ))}
        </div>

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            C. 3 nguyên tắc xây dựng đạo đức
          </h3>
        </FadeIn>
        <div className="relative z-[1] mt-6 grid gap-6 lg:grid-cols-3">
          {daoDucContent.principles.map((p) => (
            <FadeIn key={p.title}>
              <div className="rounded-[14px] bg-teal-light p-[22px]">
                <h4 className="mb-2.5 text-base text-teal">{p.title}</h4>
                <p className="text-[0.92rem] text-text-muted">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
