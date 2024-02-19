import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-8 sm:py-16">
      <h1 className="mb-4 text-2xl font-semibold">找不到页面</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        好像不在这裡...
        <br />
        发现无效的超链接？向我们报告吧
      </p>
      <div className="flex flex-row gap-2">
        <Link href="/" className={cn(buttonVariants({ color: "primary" }))}>
          返回主页
        </Link>
        <a
          href="https://github.com/markqiu/profitable_cube_website1/issues/new"
          rel="noreferrer noopener"
          className={cn(buttonVariants({ color: "secondary" }))}
        >
          报告问题
        </a>
      </div>
    </main>
  );
}
