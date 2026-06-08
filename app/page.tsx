import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PresentationTimeline } from "@/components/PresentationTimeline";
import { IntroSection } from "@/components/IntroSection";
import { HumanThoughtSection } from "@/components/HumanThoughtSection";
import { CultureSection } from "@/components/CultureSection";
import { EthicsSection } from "@/components/EthicsSection";
import { StudentPracticeSection } from "@/components/StudentPracticeSection";
import { ConclusionSection } from "@/components/ConclusionSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <PresentationTimeline />
        <IntroSection />
        <HumanThoughtSection />
        <CultureSection />
        <EthicsSection />
        <StudentPracticeSection />
        <ConclusionSection />
      </main>
    </>
  );
}
