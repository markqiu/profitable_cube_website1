import { BlogItem, LargeBlogItem } from "@/components/blog/BlogItem";
import { LinkButton } from "@/components/LinkButton";
import { EyeIcon, GithubIcon } from "lucide-react";
import { blogRecommendations, domain } from "@config";
import { BlogRecommend } from "@/components/blog/BlogRecommend";
import type { Metadata } from "next";
import { blog } from "../source";
import type { Page } from "next-docs-mdx/types";

export const metadata: Metadata = {
  alternates: {
    canonical: `${domain}/blog`,
  },
};

export default function BlogIndex() {
  const pages = blog.pages.sort(
    (a, b) => b.matter.date.getTime() - a.matter.date.getTime(),
  );

  const recommendations = blogRecommendations.flatMap((name) => {
    return pages.find((page) => page.slugs[0] === name) ?? [];
  });

  return (
    <main className="mb-20 flex flex-1 flex-col gap-5">
      <div className="mb-5 mt-16">
        <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">
          产品新闻和博客
        </h1>
        <div className="flex flex-row justify-center gap-2.5 max-sm:flex-col max-sm:items-stretch">
          <LinkButton
            href="/blog/tags"
            icon={<EyeIcon className="h-4 w-4" />}
            variant="primary"
          >
            查看所有标签
          </LinkButton>
          <LinkButton
            href="https://github.com/markqiu/profitable_cube_website1"
            icon={<GithubIcon className="h-4 w-4" />}
            target="_blank"
          >
            加入我们
          </LinkButton>
        </div>
      </div>

      <Recommendations items={recommendations} />
      <div className="flex flex-col justify-between gap-3 sm:flex-row">
        <h2 className="text-4xl font-bold max-sm:text-center sm:ml-5">
          新文章
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => {
          return <BlogItem key={page.file.id} page={page} />;
        })}
      </div>
    </main>
  );
}

function Recommendations({ items }: { items: Page[] }) {
  return (
    <div className="mb-16 grid grid-cols-1 gap-8 min-[816px]:grid-cols-2">
      {items[0] != null && <LargeBlogItem page={items[0]} />}
      <div className="max-md:-ml-3">
        <h2 className="mb-3 ml-3 inline-flex items-center gap-2 text-2xl font-medium">
          精选文章
        </h2>
        <div className="flex flex-col gap-3">
          {items.map((page, i) => {
            if (i === 0) return;

            return <BlogRecommend key={page.file.id} page={page} />;
          })}
        </div>
      </div>
    </div>
  );
}
