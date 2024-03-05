"use client";
import { I18nProvider } from "next-docs-ui/i18n";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { GithubIcon } from "lucide-react";
import { Nav } from "next-docs-ui/nav";
import { RootProvider } from "next-docs-ui/provider";

export function NextDocsProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <I18nProvider
      value={{
        onChange: () => {},
        text: {
          toc: "目录",
          light: "浅色主题",
          dark: "黑暗主题",
          system: "系统默认",
          search: "搜索",
          lastUpdate: "最后更新",
          searchNoResult: "没有结果",
        },
      }}
    >
      <RootProvider>
        <Nav
          enableSidebar={pathname === "/docs" || pathname.startsWith("/docs/")}
          title={
            <>
              <img src="/icon.png" alt="logo" width="28" height="28" />
              <span className="ml-2 text-lg font-bold">盈利模方</span>
            </>
          }
          links={[
            {
              href: "https://github.com/markqiu/profitable_cube_website1",
              label: "Github",
              icon: <GithubIcon className="h-5 w-5" />,
              external: true,
            },
          ]}
          items={[
            {
              href: "/docs",
              children: "帮助中心",
            },
            {
              href: "/blog",
              children: "博客",
            },
            {
              href: "https://tz.jinniuai.com",
              children: "注册/登录",
              external: true,
            },
          ]}
        />
        {children}
      </RootProvider>
    </I18nProvider>
  );
}
