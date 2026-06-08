import { featuredQuotes } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { QuoteCard } from "@/components/ui/QuoteCard";

export function QuotesSection() {
  return (
    <section className="bg-quotes-bg py-24">
      <Container>
        <FadeIn>
          <h2 className="mb-12 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold">
            Những câu nói tiêu biểu của Chủ tịch Hồ Chí Minh
          </h2>
        </FadeIn>

        <div className="mb-12 flex justify-center">
          <FadeIn>
            <div
              className="flex h-48 w-48 flex-col items-center justify-center rounded-full border-4 border-purple bg-purple-light shadow-lg md:h-56 md:w-56"
              aria-label="Chủ tịch Hồ Chí Minh"
            >
              <span className="text-4xl font-bold text-purple md:text-5xl">
                HCM
              </span>
              <span className="mt-2 text-sm font-semibold text-purple/80">
                Chủ tịch Hồ Chí Minh
              </span>
            </div>
          </FadeIn>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredQuotes.map((quote) => (
            <QuoteCard key={quote.text.slice(0, 30)} {...quote} />
          ))}
        </div>
      </Container>
    </section>
  );
}
