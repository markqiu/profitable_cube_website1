"use client";

import clsx from "clsx";
import ChartSvg from "@static/home/chart.svg";
import Image from "next/image";
import { BarChartIcon, MusicIcon, SettingsIcon } from "lucide-react";
import { Progress } from "../components/Progress";
import { motion } from "framer-motion";
import Link from "next/link";

const card = clsx(
  "text-secondary-foreground bg-gradient-to-b from-secondary border rounded-2xl border p-5 shadow-xl flex flex-col",
);

export function Dashboard() {
  return (
    <div className="z-[2] mt-[5rem]">
      <div className="flex flex-col items-center gap-5 text-center">
        <div
          className={clsx(
            "h-[9rem] w-1 bg-gradient-to-b",
            "from-transparent via-purple-400 to-purple-600 dark:to-purple-100",
          )}
        />
        <h2 className="text-3xl font-bold sm:text-5xl">从0到1轻松搭建属于您的助手</h2>
        <p className="text-lg text-muted-foreground sm:text-xl">
        无需冗杂的步骤，只需几步即可开启
          <br className="sm:hidden" />
          您的投资之旅
        </p>
      </div>
      <div className="mt-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Chart />
        <Settings />
        <Music />
      </div>
    </div>
  );
}

function Settings() {
  return (
    <motion.div
      className={`${card} gap-3`}
      whileInView={{ y: 0 }}
      initial={{ y: "10rem" }}
    >
      <div className="flex flex-row gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 text-white">
          <SettingsIcon />
        </div>
        <div>
          <p className="text-lg font-bold sm:text-xl">设置</p>
          <p className="text-muted-foreground">搭建一个智能投资助手</p>
        </div>
      </div>
      <Link
        href="https://tz.jinniuai.com/visitor/principleLibrary/detail/P202306001?t=65dbe6c73a6fa581e1403a2e"
        className="mt-auto rounded-xl bg-gradient-to-b from-purple-400 to-purple-600 px-6 py-3 text-center text-sm font-medium text-white"
      >
        + 添加新能力
      </Link>
    </motion.div>
  );
}
function Chart() {
  return (
    <motion.div
      className={clsx("row-span-2", card)}
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: "8rem", opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-row gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
          <BarChartIcon />
        </div>
        <div>
          <p className="text-lg font-bold sm:text-xl">数据分析</p>
          <p className="text-muted-foreground">均来自真实实盘，并通过严谨可靠的方式检查、修正</p>
        </div>
      </div>
      <Image src={ChartSvg} alt="chart" className="mt-auto rounded-3xl" />
    </motion.div>
  );
}

function Music() {
  return (
    <motion.div
      className={`${card} gap-3`}
      whileInView={{ y: 0 }}
      initial={{ y: "10rem" }}
    >
      <div className="flex flex-row gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
          <MusicIcon />
        </div>
        <div>
          <p className="text-lg font-bold sm:text-xl">组合</p>
          <p className="text-muted-foreground">全流程实时跟踪，确保您的想法落到实处</p>
        </div>
      </div>
      <div className="mt-auto flex flex-row items-center gap-2.5 pt-2">
        <p>1:02</p>
        <Progress track="w-[36%]" />
        <p>3:20</p>
      </div>
    </motion.div>
  );
}
