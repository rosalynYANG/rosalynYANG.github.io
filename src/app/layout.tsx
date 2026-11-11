import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.youngsheep.com.cn";
const OG_IMAGE = "/world-door/assets/soft-time-home.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  keywords: ["小样儿", "YoungSheep", "AI 产品实验室", "金融 AI", "Agent", "RAG", "创意系统"],
  title: { default: "小样儿创意与 AI 产品实验室", template: "%s · 小样儿" },
  description: "连接金融洞察、AI 能力、产品设计与视觉表达，把奇怪灵感养成真的产品。",
  openGraph: { title: "小样儿创意与 AI 产品实验室", description: "把奇怪灵感，养成真的产品。", url: SITE_URL, siteName: "小样儿 YoungSheep Lab", locale: "zh_CN", type: "website", images: [{ url: OG_IMAGE, width: 1672, height: 941, alt: "小样儿创意与 AI 产品实验室" }] },
  twitter: { card: "summary_large_image", title: "小样儿创意与 AI 产品实验室", description: "把奇怪灵感，养成真的产品。", images: [OG_IMAGE] },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-512.png", type: "image/png", sizes: "512x512" }], apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: "小样儿 YoungSheep Lab", description: "创意与 AI 产品实验室", inLanguage: "zh-CN" },
    { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: "小样儿 YoungSheep Lab", url: `${SITE_URL}/`, logo: `${SITE_URL}/icon-512.png`, email: "dhu_rosalyn@sina.com", sameAs: ["https://github.com/rosalynYANG"] },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} /></body></html>;
}
