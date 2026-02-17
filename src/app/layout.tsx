import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "医学部受験 英語添削サービス | プロ講師によるオンライン添削",
  description:
    "医学部専門予備校の英語科主任が、英作文・和訳を丁寧に添削。医学部入試に特化した指導で合格力を高めます。オンライン対応で全国どこからでも受講可能。",
  keywords: [
    "医学部受験",
    "英語添削",
    "英作文添削",
    "医学部英語",
    "オンライン添削",
    "大学受験英語",
  ],
  openGraph: {
    title: "医学部受験 英語添削サービス",
    description:
      "医学部専門予備校の英語科主任による、医学部入試特化の英語添削サービス",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenKaku.variable} ${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  );
}
