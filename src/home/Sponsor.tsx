import { type ReactNode } from "react";
import { GithubIcon, MessageSquarePlusIcon } from "lucide-react";

export default function Sponsor() {
  return (
    <div className="mt-20 flex flex-col items-center gap-3 bg-gradient-to-b from-secondary/50 px-4 py-40 text-center">
      <p className="text-lg tracking-widest text-purple-400">喜欢盈利模方?</p>
      <h2 className="text-5xl font-bold">加入微信群</h2>
      <p className="text-lg text-muted-foreground sm:text-xl">
        <span className="max-sm:hidden"></span>
        <br className="sm:hidden" />
        以实际行动支持我们吧
      </p>

      <div className="mt-5 grid w-full max-w-[60rem] grid-cols-1 gap-4 sm:grid-cols-2">
        <Card
          title="加入群聊"
          text="与志同道合的人共同成长"
          icon={<GithubIcon />}
          href=""
          content={
            <div>
              <img
                className="mx-auto mt-[20px]"
                src="/home/customers/群聊.jpeg"
                width="300"
              />
            </div>
          }
        >
          扫码加入
        </Card>
        <Card
          title="贡献投资能力"
          text="随时说出您的投资想法，我们负责将其实现"
          icon={<MessageSquarePlusIcon />}
          href=""
          content={
            <div>
              <img
                className="mx-auto mt-[20px]"
                src="/home/customers/客服微信二维码.jpg"
                width="300"
              />
            </div>
          }
        >
          扫码添加
        </Card>
      </div>
    </div>
  );
}

function Card({
  title,
  text,
  icon,
  children,
  href,
  content,
}: {
  title: string;
  text: string;
  icon: ReactNode;
  children: string;
  href: string;
  content?: ReactNode;
}) {
  return (
    <div className="rounded-xl border-[1px] border-black/10 bg-white/40 p-4 text-start shadow-lg dark:border-white/10 dark:bg-white/10">
      <div className="flex flex-row gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-400 text-white dark:bg-purple-500">
          {icon}
        </div>
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        <button className="mt-7 w-full rounded-md bg-purple-500 py-2 text-sm font-medium text-white shadow-lg shadow-purple-300 dark:bg-purple-500 dark:shadow-purple-700 sm:w-[8rem]">
          {children}
        </button>
      </a>

      {content}
    </div>
  );
}
