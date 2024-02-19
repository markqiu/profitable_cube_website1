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
          投资想法实现
        </p>
        <h2 className="text-5xl font-bold sm:text-5xl lg:text-6xl">
        任何想法都能<span className="whitespace-nowrap">成为您的投资能力</span>
        </h2>
        <h3 className="mx-auto max-w-2xl text-xl text-muted-foreground">
        快把想法告诉盈利模方，让盈利不再光凭运气！
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
        name="张*明"
        description="我想在低点买入沪深300，并在高点卖出"
      />
      <Job
        name="H***j"
        description="刚接触股票投资的人该如何选股？"
      />
      <Job
        name="电**川"
        description="能给我推荐一种容易掌握的资产配置方法吗？"
      />
      <Job
        name="监***值"
        description="怎么解决买了就跌，卖了就涨的问题？"
        optional
      />
      <Job
        name="微***g"
        description="我想根据市场情绪反向操作"
      />
      <Job
        name="三***道"
        description="这个时间点下还能买基金吗？"
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
