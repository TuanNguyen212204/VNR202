import { footerContent } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-dark px-6 py-12 text-center text-white">
      <Container>
        <p className="mb-2 text-[1.15rem] font-semibold">{footerContent.line1}</p>
        <p className="mb-6 text-[0.9rem] text-white/60">{footerContent.line2}</p>
        <div className="flex justify-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-purple" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-blue" />
        </div>
      </Container>
    </footer>
  );
}
