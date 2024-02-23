import { Noto_Sans_TC } from "next/font/google";
import type { ReactNode } from "react";

import { NextDocsProvider } from "./next-docs-provider";
import Footer from "@/components/Footer";
import { footer, urlBase } from "@config";
import type { Metadata } from "next";

import "./global.css";

const noto = Noto_Sans_TC({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "盈利模方 - %s",
    default: "盈利模方 - 您必备的智能投资工具",
  },
  description:
    "盈利模方，盈利有方,盈利模方，您必备的智能投资工具,做最专业的智能投资工具，让每个人都盈利有方！提供量化平台和真实实盘数据供投资者参考,将想法实现成能力，能力拼装成助手，助手可以回测调优也可以发布成组合，实时查看盘中效果。",
  keywords:
    "股票,炒股,股票资讯,行情,财经,证券,投资,金融,港股,美股,基金,债券,期货,外汇,科创板,投资社区,模方社区,盈利魔方,投资工具,投资终端,智能投资,投资助手,投资实验,投资想法",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
    title: {
      template: "盈利模方- %s",
      default: "盈利模方 - 您必备的智能投资工具",
    },
    description:
      "盈利模方，盈利有方,盈利模方，您必备的智能投资工具,做最专业的智能投资工具，让每个人都盈利有方！提供量化平台和真实实盘数据供投资者参考,将想法实现成能力，能力拼装成助手，助手可以回测调优也可以发布成组合，实时查看盘中效果。",
  },
  metadataBase: urlBase,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={noto.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <NextDocsProvider>
          {children}
          <Footer categories={footer} />
        </NextDocsProvider>
      </body>
    </html>
  );
}
