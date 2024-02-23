import Gradient from "./components/Gradient";
import LinkButton from "./components/LinkButton";
import CyanPinkGradient from "@static/home/cyan-pink-gradient.svg";
import GradientRing from "@static/home/gradient-ring.svg";
import Image from "next/image";
import clsx from "clsx";
import styles from "./community.module.css";

export function Community() {
  return (
    <div className="relative z-[2] mt-8 flex flex-col items-center gap-5 overflow-hidden px-4 py-40 text-center">
      <Gradient
        src={CyanPinkGradient}
        className="absolute left-0 top-0 -z-[1] h-full w-full overflow-hidden object-cover opacity-20"
      />
      <h2 className="text-5xl font-bold text-pink-400 xl:text-6xl">
        <span>与</span>
        <span className="mx-2 text-cyan-300 [text-shadow:_#e66ad0_3px_5px]">
          我们
        </span>
        <span>联系</span>
      </h2>
      <p className="text-lg text-black  dark:text-slate-200 sm:text-xl">
        获取我们最新的消息
      </p>

      <JoinButton />
    </div>
  );
}

function JoinButton() {
  return (
    <div className="relative z-[2] p-[6rem]">
      <Image
        alt="gradient ring"
        src={GradientRing}
        className={clsx(
          "pointer-events-none absolute left-0 top-0 -z-[1] h-full w-full select-none object-contain",
          styles["rotate-z"],
        )}
      />
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <LinkButton
          href="https://xueqiu.com/u/9827075864"
          target="_blank"
          className="inline-flex items-center gap-3 rounded-lg border bg-white px-4 py-2 text-lg font-medium text-secondary-foreground"
        >
          <img src="/home/customers/雪球.jpg" width="26" />
          <span>雪球</span>
        </LinkButton>
        <LinkButton
          href="https://weibo.com/u/7811272301"
          target="_blank"
          className="inline-flex items-center gap-3 rounded-lg border bg-white px-4 py-2 text-lg font-medium text-secondary-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="26"
            height="26"
          >
            <path
              d="M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8 .3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4 .6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"
              fill="rgb(255,89,0)"
            />
          </svg>
          <span>微博</span>
        </LinkButton>
      </div>
    </div>
  );
}
