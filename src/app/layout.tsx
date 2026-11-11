import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.youngsheep.com.cn"),
  title: { default: "小样儿创意与 AI 产品实验室", template: "%s · 小样儿" },
  description: "连接金融洞察、AI 能力、产品设计与视觉表达，把奇怪灵感养成真的产品。",
  openGraph: { title: "小样儿创意与 AI 产品实验室", description: "把奇怪灵感，养成真的产品。", url: "https://www.youngsheep.com.cn", siteName: "小样儿 YoungSheep Lab", locale: "zh_CN", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
