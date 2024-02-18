import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - 盈利模方",
    default: "盈利模方",
    absolute: "盈利模方",
  },
  description: "盈利模方是一个投资能力库，汇聚大师智慧的投资能力库。你的能力才是你的财富来源——巴菲特",
  openGraph: {
    images: "/opengraph-image.png",
    title: {
      template: "%s - 盈利模方",
      absolute: "盈利模方",
      default: "盈利模方",
    },
    description: "盈利模方是一个投资能力库，汇聚大师智慧的投资能力库。你的能力才是你的财富来源——巴菲特",
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}
