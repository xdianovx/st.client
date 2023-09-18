"use client";

import cn from "classnames";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export interface iOfferCard {
  data: any;
  className?: string;
}

export const OfferCard = ({ data, className }: iOfferCard) => {
  const [isHover, setIsHover] = useState(false);

  const variants: Variants = {
    show: { opacity: 1 },
    hide: { opacity: 0 },
  };
  return (
    <div
      className={cn(
        "relative top-0 mt-[64rem] flex h-[476rem] flex-col overflow-hidden rounded-[4rem] border border-grayBorder transition-all duration-300 ease-in-out hover:-top-[64rem]",
        className
      )}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <motion.div
        className={cn("absolute h-full w-full", {
          ["opacity-1"]: isHover === true,
          ["opacity-0"]: isHover === false,
        })}
        variants={variants}
        initial={"hide"}
        animate={isHover ? "show" : "hide"}
      >
        {data.image && (
          <Image
            src={data.image}
            className="block object-cover"
            fill
            alt={data.title}
          />
        )}
      </motion.div>

      <div className="relative flex h-full flex-col px-[45rem] py-[42rem]">
        <h4
          className={cn("text-[32rem] leading-[120%]", {
            ["text-white"]: isHover && data.image,
          })}
        >
          {data.title}
        </h4>
        <hr
          className={cn("mt-[193rem] text-grayBorder", {
            ["opacity-0"]: isHover && data.image,
          })}
        />
        <p
          className={cn("mt-[32rem] text-gray", {
            ["text-white"]: isHover && data.image,
          })}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};
