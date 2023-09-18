"use client";

import cn from "classnames";
import styles from "./style.module.scss";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface iMarqueeLight {
  data?: any;
  className?: string;
}

export const MarqueeLight = ({ data, className }: iMarqueeLight) => {
  const ref = useRef<any>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap
        .timeline({ repeat: -1 })
        .to(ref.current, { duration: 15, xPercent: -50, ease: "none" })
        .set(ref.current, { xPercent: 0 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={cn(
        " bg-black text-white py-[40px] text-[55rem] leading-[100%] uppercase",
        className
      )}
    >
      <div className={cn("flex whitespace-nowrap")} ref={ref}>
        {[...Array(8)].map((e, i) => (
          <div className="flex gap-[46rem] items-center ml-[30rem] itemscroll">
            <p className="leading-none mt-[10rem]">{data}</p>
            <svg width="76" height="57" viewBox="0 0 76 57" fill="white">
              <rect
                width="7.67299"
                height="32.1059"
                transform="matrix(0.920397 -0.390984 0.394021 0.919101 0.894531 27.0547)"
              />
              <path d="M30.5273 14.4609L27.3944 24.102L3.8973 34.0836L0.883528 27.0536L30.5273 14.4609Z" />
              <path
                d="M34.0212 39.5564L43.1817 43.9753L13.5379 56.568L10.5242 49.538L34.0212 39.5564Z"
                fill="white"
              />
              <path d="M33.5898 13.1641L40.1725 10.3677L50.4045 34.235L46.2402 42.6726L33.5898 13.1641Z" />
              <path d="M63.2383 0.570312L58.0984 11.0591L42.4482 17.7073L39.3779 16.195L33.5945 13.163L63.2383 0.570312Z" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
};
