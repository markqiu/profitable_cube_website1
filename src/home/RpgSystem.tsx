"use client";

import Gradient from "./components/Gradient";
import GreenGradient from "@static/home/green-gradient.svg";
import clsx from "clsx";
import { motion } from "framer-motion";

export function RpgSystem() {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center gap-5 text-center",
        "z-[2] mt-[15rem]",
      )}
    >
      <div className="flex flex-col gap-10">
        <p
          className={clsx(
            "mx-auto w-fit rounded-md bg-gradient-to-br from-green-400 to-green-600 px-6 py-2 text-xl font-semibold text-white sm:text-3xl",
          )}
        >
          训练场
        </p>
        <h2 className="text-5xl font-bold sm:text-5xl lg:text-6xl">
          开创性的<span className="whitespace-nowrap">投资助手训练</span>
        </h2>
        <h3 className="mx-auto max-w-2xl text-xl text-muted-foreground">
          能力都是练出来的，越 PK 越靠谱，赶快来PK一下你的投资助手吧！
        </h3>
      </div>
      <Background />
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: "5rem", opacity: 0 }}
      >
        <Jobs />
      </motion.div>
    </div>
  );
}

function Background() {
  return (
    <Gradient
      src={GreenGradient}
      className="absolute -bottom-[100px] -z-[1] w-full min-w-[800px] opacity-80 lg:-bottom-[40%]"
    />
  );
}

function Jobs() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-3 text-start md:grid-cols-2 lg:grid-cols-3">
      <Job
        name="ROE-PB 投资策略"
        description="短线每周调仓，每次买入估值最低的小市值股票"
      />
      <Job
        name="价值投资一号"
        description="稳健投资，关注企业内在价值，在有安全边际时买入"
      />
      <Job
        name="买狗股"
        description="买入高股息的股票，每年调仓"
      />
      <Job
        name="涨停敢死队"
        description="追涨停，追求绝对高收益"
        optional
      />
      <Job
        name="人工智能高科技狂人"
        description="投资靠人工智能挖矿"
      />
    </div>
  );
}

function Job({
  name,
  description,
  optional,
}: {
  name: string;
  description: string;
  optional?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 rounded-xl border bg-background/50 bg-gradient-to-b from-secondary p-4 text-secondary-foreground shadow-lg backdrop-blur-3xl",
        optional && "max-md:hidden",
      )}
    >
      <p className="text-lg font-medium">{name}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
