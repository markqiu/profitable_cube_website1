import { Noto_Sans_TC } from "next/font/google";
import { AdsProvider } from "@/adsense";
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
    "盈利模方是第一款以投资能力为重心的智能投资工具，让用户通过建立自己的投资能力库逐步实现投资上的盈利。",
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
      "盈利模方是第一款以投资能力为重心的智能投资工具，让用户通过建立自己的投资能力库逐步实现投资上的盈利。",
  },
  metadataBase: urlBase,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={noto.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <AdsProvider>
          <NextDocsProvider>
            {children}
            <Footer categories={footer} />
          </NextDocsProvider>
        </AdsProvider>
      </body>
    </html>
  );
}
