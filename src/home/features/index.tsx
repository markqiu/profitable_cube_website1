import { ChineseUI } from "./ChineseUI";
import { Dashboard } from "./Dashboard";
import { Music } from "./Music";
import { Games } from "./Games";
import clsx from "clsx";

export function Features() {
  return (
    <>
      <div className="mt-[10rem] flex flex-col gap-10 text-center sm:mt-[15rem]">
        <p
          className={clsx(
            "mx-auto w-fit rounded-md bg-gradient-to-br from-purple-500 to-purple-600 px-6 py-2 text-xl font-semibold text-white dark:from-purple-400 dark:to-purple-600 sm:text-3xl",
          )}
        >
          功能强大
        </p>
        <h2 className="text-5xl font-bold sm:text-5xl lg:text-6xl">
          您需要的功能&#8288;都&#8288;在&#8288;这
        </h2>
        <h3 className="mx-auto max-w-2xl text-xl text-muted-foreground">
          从投资想法实现、投资能力库到投资助手训练场和组合功能
          <br />
          我们为您提供全新的智能投资体验
        </h3>
      </div>
      <ChineseUI />
      <Games />
      <Music />
      <Dashboard />
    </>
  );
}
