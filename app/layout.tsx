import type { Metadata } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Thành tựu, kinh nghiệm của công cuộc đổi mới và vấn đề tham nhũng — Thuyết trình VNR202",
  description:
    "Website thuyết trình môn VNR202: Chương 3 — Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018)",
  openGraph: {
    title: "Thành tựu, kinh nghiệm của công cuộc đổi mới và vấn đề tham nhũng",
    description: "Website thuyết trình — Môn VNR202 (Lịch sử Đảng Cộng sản Việt Nam)",
    images: ["/images/hero-landing.jpg"],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${beVietnam.variable}`}>
      <body>{children}</body>
    </html>
  );
}
