import { ExternalLinkIcon } from "lucide-react";
import Gradient from "./components/Gradient";
import HeroGradient from "@static/hero.svg";
import Image from "next/image";
import LinkButton from "./components/LinkButton";
import clsx from "clsx";
import styles from "./hero.module.css";
import { cn } from "@/utils/cn";

export function Hero() {
  return (
    <div
      className={clsx(
        "relative z-[2] mt-[6rem] flex w-full flex-col gap-12 px-[1rem] md:mt-[10rem] xl:mt-[14rem]",
        "items-center text-center",
      )}
    >
      <Gradient
        src={HeroGradient}
        className="absolute -right-0 -top-[200px] -z-[1] hidden w-full min-w-[800px] lg:-right-[300px]"
      />
      <h1
        className={
          "text-5xl font-bold min-[360px]:text-6xl sm:text-7xl xl:text-8xl"
        }
      >
        你的能力
        <span
          className={clsx(
            "mx-1 bg-gradient-to-r from-blue-400 via-green-300 to-blue-400 bg-clip-text text-transparent max-lg:my-2 max-lg:block",
            styles["animated-gradient"],
          )}
        >
         才是你的
        </span>
        财富来源
      </h1>
      <p
        className={clsx(
          "max-w-[450px] text-xl text-muted-foreground",
          "md:max-w-[650px] lg:text-2xl",
        )}
      >
        全球首创，盈利模方帮助您获取、使用和优化投资能力！ 
      </p>
      <Buttons />
      <div className="mt=[3rem] flex w-full flex-col gap-5 md:mt-[4rem]">
        <p className="mb-3 text-lg font-semibold text-muted-foreground md:mb-4">
         媒体及合作伙伴
        </p>
        <div
          className={clsx(
            "overflow-hidden",
            "max-md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
          )}
        >
          <div className={clsx(styles.servers, "inline-block max-md:w-max")}>
            <Servers />
            <Servers secondary />
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  const bn = "text-lg font-bold sm:text-lg rounded-md w-full px-6 py-3 sm:px-8";

  return (
    <div className="grid w-full max-w-[500px] grid-cols-1 gap-3 sm:w-fit sm:grid-cols-2">
      <LinkButton href="https://tz.jinniuai.com" className={clsx(bn, styles["rainbow-border"])}>
        快速开始
      </LinkButton>
      <LinkButton
        href="https://guide.jinniuai.com"
        target="_blank"
        className={cn(
          "inline-flex items-center justify-center gap-2.5 bg-black text-white",
          "dark:bg-white dark:text-black",
          bn,
        )}
      >
      <ExternalLinkIcon />
        帮助中心
      </LinkButton>
    </div>
  );
}

function Servers({ secondary }: { secondary?: boolean }) {
  return (
    <div
      className={clsx(
        "inline-flex flex-row justify-center",
        "md:max-w-[64rem] md:flex-wrap",
        secondary && "md:hidden",
      )}
    >
      <Server img="/home/customers/apex-tw.png" name="新浪财经" />
      <Server img="/home/customers/valorant-tw.png" name="雪球" />
      <Server img="/home/customers/avery.png" name="今日头条" transparent />
      <Server img="/home/customers/zeitfrei.png" name="中信证券" transparent />
      <Server
        img="/home/customers/daptor.png"
        name="闲来一坐s话投资"
      />
      <Server img="/home/customers/empressival.png" name="银行螺丝钉" />
      <Server
        img="/home/customers/daidai.png"
        name="不明真相的群众"
      />
      <Server
        img="/home/customers/daidai.png"
        name="管我财"
      />
      <Server
        img="/home/customers/daidai.png"
        name="/唐史主任司马迁"
      />
    </div>
  );
}

function Server({
  img,
  name,
  transparent,
}: {
  img: string;
  name: string;
  transparent?: boolean;
}) {
  return (
    <div className="mx-4 my-1 flex flex-shrink-0 flex-row items-center gap-3">
      <Image
        alt={name}
        src={img}
        width="45"
        height="45"
        className={clsx(
          "rounded-full grayscale",
          transparent && "brightness-[0%] dark:brightness-100",
        )}
      />
      <p className="text-lg sm:text-xl">{name}</p>
    </div>
  );
}