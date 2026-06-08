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
    "Tư tưởng Hồ Chí Minh về con người, văn hóa và đạo đức — Thuyết trình",
  description:
    "Website thuyết trình môn Tư tưởng Hồ Chí Minh: Xây dựng văn hóa, đạo đức, con người Việt Nam hiện nay",
  openGraph: {
    title: "Tư tưởng Hồ Chí Minh về con người, văn hóa và đạo đức",
    description: "Website thuyết trình — Môn Tư tưởng Hồ Chí Minh",
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
