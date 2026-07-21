import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: "Ricky Peng — Senior Design Expert",
  description: "彭友 Ricky 的个人作品集。资深设计专家，专注社交与复杂数字产品体验。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={jakarta.variable}>{children}</body></html>;
}
