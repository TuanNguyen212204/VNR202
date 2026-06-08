import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tư tưởng Hồ Chí Minh về Văn hóa, Đạo đức, Con người — Chương VI",
  description:
    "Bài thuyết trình nhóm — Môn Tư tưởng Hồ Chí Minh, Chương VI: Văn hóa, Đạo đức, Con người",
  openGraph: {
    title: "Tư tưởng Hồ Chí Minh về Văn hóa, Đạo đức, Con người",
    description: "Bài thuyết trình nhóm — Môn Tư tưởng Hồ Chí Minh",
    images: ["/images/hero-vietnam.jpg"],
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
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
