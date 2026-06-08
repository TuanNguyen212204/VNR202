import Image from "next/image";
import { vanHoaContent } from "@/lib/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BannerImage } from "@/components/ui/BannerImage";
import { PullQuote } from "@/components/ui/PullQuote";
import { InfoCard } from "@/components/ui/InfoCard";
import { Timeline } from "@/components/ui/Timeline";

export function VanHoa() {
  return (
    <section id="van-hoa" className="overflow-hidden bg-white py-24">
      <Container className="relative">
        <span className="pointer-events-none absolute -left-4 -top-10 select-none text-[10rem] font-bold leading-none text-text opacity-[0.05]">
          {vanHoaContent.watermark}
        </span>

        <SectionHeading>I. Tư tưởng Hồ Chí Minh về Văn hóa</SectionHeading>
        <BannerImage
          src={images.vanHoaBanner.src}
          alt={images.vanHoaBanner.alt}
        />

        <FadeIn>
          <h3 className="relative z-[1] mb-5 text-[1.25rem] font-bold">
            A. Quan niệm về văn hóa
          </h3>
        </FadeIn>
        <PullQuote
          text={vanHoaContent.cultureQuote.text}
          footer={vanHoaContent.cultureQuote.footer}
        />
        <FadeIn>
          <p className="relative z-[1] mt-5 text-text-muted">
            {vanHoaContent.cultureMeaning}
          </p>
        </FadeIn>

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            B. Quan hệ văn hóa với các lĩnh vực khác
          </h3>
        </FadeIn>
        <div className="relative z-[1] mt-6 grid gap-5 md:grid-cols-3">
          {vanHoaContent.infoCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            C. Vai trò của văn hóa
          </h3>
        </FadeIn>
        <div className="relative z-[1] mt-6 grid gap-6 lg:grid-cols-2">
          {vanHoaContent.roleCards.map((card) =>
            card.type === "target" ? (
              <FadeIn key={card.title}>
                <div className="rounded-2xl border border-purple bg-purple-light p-8">
                  <h4 className="mb-4 text-[1.15rem] tracking-wide">
                    {card.title}
                  </h4>
                  <p className="text-[0.95rem]">{card.content}</p>
                </div>
              </FadeIn>
            ) : (
              <FadeIn key={card.title}>
                <div className="rounded-2xl border border-teal bg-teal-light p-8">
                  <h4 className="mb-4 text-[1.15rem] tracking-wide">
                    {card.title}
                  </h4>
                  <ul className="list-none">
                    {card.items?.map((item, i) => (
                      <li key={i} className="mb-3 text-[0.95rem]">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ),
          )}
        </div>

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            D. Văn hóa là một mặt trận
          </h3>
        </FadeIn>
        <FadeIn>
          <div className="relative z-[1] mt-6 rounded-r-[14px] border-l-4 border-coral bg-white p-6 text-text-muted">
            {vanHoaContent.manifesto}
          </div>
        </FadeIn>

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            E. Giữ gìn bản sắc dân tộc, tiếp thu tinh hoa nhân loại
          </h3>
        </FadeIn>
        <div className="relative z-[1] grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] lg:h-[400px]">
              <Image
                src={images.vanHoaThoCam.src}
                alt={images.vanHoaThoCam.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <p className="text-text-muted">{vanHoaContent.identityText}</p>
          </FadeIn>
        </div>

        <FadeIn>
          <h3 className="relative z-[1] mb-5 mt-14 text-[1.25rem] font-bold">
            F. Xây dựng nền văn hóa mới
          </h3>
        </FadeIn>
        <Timeline items={vanHoaContent.timeline} />
      </Container>
    </section>
  );
}
