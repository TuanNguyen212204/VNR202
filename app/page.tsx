import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TinhHuong } from "@/components/sections/TinhHuong";
import { VanHoa } from "@/components/sections/VanHoa";
import { DaoDuc } from "@/components/sections/DaoDuc";
import { ConNguoi } from "@/components/sections/ConNguoi";
import { VanDung } from "@/components/sections/VanDung";
import { QuotesSection } from "@/components/sections/QuotesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TinhHuong />
        <VanHoa />
        <DaoDuc />
        <ConNguoi />
        <VanDung />
        <QuotesSection />
      </main>
      <Footer />
    </>
  );
}
