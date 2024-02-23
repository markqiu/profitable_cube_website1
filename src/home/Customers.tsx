"use client";

import PinkWave from "@static/home/pink-wave.svg";
import Image from "next/image";
import LinkButton from "./components/LinkButton";
import clsx from "clsx";
import { motion, type MotionValue, useTransform } from "framer-motion";
import formatter from "@/utils/formatter";
import { useAnimatedCounter } from "./utils/use-animated-counter";

export function Customers() {
  const { count, start } = useAnimatedCounter(
    250_000,
    Math.max(250_000 - 10000, 0),
    1,
  );

  return (
    <div className="relative z-[2] mt-[10rem]">
      <motion.div
        whileInView="show"
        onViewportEnter={() => start()}
        initial="hidden"
        transition={{
          duration: 0.5,
          delayChildren: 0.01,
        }}
        viewport={{ once: true }}
        variants={{
          show: {
            y: 0,
            opacity: 1,
          },
          hidden: {
            y: 20,
            opacity: 0,
          },
        }}
        className="flex flex-col items-center gap-5 text-center"
      >
        <p
          className={clsx(
            "mx-auto mb-8 w-fit rounded-md bg-gradient-to-br from-orange-400 to-orange-500 px-6 py-2 text-xl font-semibold text-white sm:text-3xl",
          )}
        >
          备受信赖
        </p>
        <h2 className="text-5xl font-bold">
          受超过
          <span className="mx-2 block bg-gradient-to-b from-pink-600 to-orange-400 bg-clip-text text-transparent max-md:text-7xl md:inline">
            <ServerCount count={count} />
          </span>
          个用户使用
        </h2>
        <p className="text-lg text-muted-foreground sm:text-xl">
          受到无数专业投资者的广泛信任
        </p>
        <div className="flex flex-row gap-2.5">
          <LinkButton
            href="/invite"
            className={clsx(
              "rounded-full bg-secondary px-6 py-3 text-lg font-medium text-secondary-foreground shadow-lg transition-all hover:bg-accent hover:text-accent-foreground",
            )}
          >
            快速注册
          </LinkButton>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-4 text-start sm:grid-cols-2 md:mt-[4rem] lg:grid-cols-3"
          variants={{
            show: {
              opacity: 1,
            },
            hidden: {
              opacity: 0,
            },
          }}
        >
          <Comment
            icon="/home/customers/head1.jpeg"
            author="Sjay"
            title="投资经验5年"
            content="我之前只知道巴菲特说过“买股票就是买公司”，却不知道该如何使用。盈利模方教会了我这条能力的使用方法，让我轻松判断出持仓的股票是否满足这个能力。"
          />
          <Comment
            icon="/home/customers/head2.jpeg"
            author="Money"
            title="不会编程的量化爱好者"
            content="之前觉得量化策略深不可测，用了盈利模方才发现，只要我把投资想法告诉盈利模方，他就能将其系统化翻译，并且拿来就能直接使用，彻底打破了量化交易的技术壁垒。"
          />
          <Comment
            icon="/home/customers/head3.jpeg"
            author="Nathan"
            title="一个很有想法的投资者"
            content="投资的最终目的都是挣钱，只要我把对助手的任何改进建议告诉盈利模方，他都能将其不断优化，直到达到盈利的目的为止。"
          />
        </motion.div>
      </motion.div>
      <Image
        className={clsx(
          "custom relative -z-[1] -mt-[10rem] h-[300px] w-full object-cover md:-mt-[1rem]",
          "[mask-image:linear-gradient(to_right,_transparent,white_10%,white_70%,_transparent)]",
        )}
        alt="wave"
        src={PinkWave}
      />
    </div>
  );
}

function ServerCount({ count }: { count: MotionValue<number> }) {
  const rounded = useTransform(count, (v: number) =>
    formatter.format(Math.floor(v)),
  );

  return <motion.span>{rounded}</motion.span>;
}

function Comment({
  icon,
  author,
  title,
  content,
}: {
  icon: string;
  author: string;
  title: string;
  content: string;
}) {
  return (
    <div
      className={clsx(
        "flex cursor-pointer flex-col gap-3 rounded-xl border-2 p-4 shadow-2xl shadow-blue-800/30 transition-colors dark:shadow-black/60 dark:backdrop-blur-3xl",
        "hover:bg-accent hover:text-accent-foreground hover:dark:border-pink-400",
      )}
    >
      <div className="flex flex-row gap-2.5">
        <Image
          alt={author}
          src={icon}
          width="50"
          height="50"
          className="aspect-square rounded-full"
        />
        <div>
          <p className="text-pink-700 dark:text-pink-300">{title}</p>
          <p className="text-lg font-bold text-black dark:text-white sm:text-xl">
            {author}
          </p>
        </div>
      </div>

      <p className="text-muted-foreground">{content}</p>
    </div>
  );
}
