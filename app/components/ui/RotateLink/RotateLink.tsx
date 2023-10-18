"use client";

import cn from "classnames";
import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { useSpring } from "framer-motion";

interface iRotateLink {
  text: string;
  link: string;
  className?: string;
  textSize?: number;
}

export const RotateLink = ({
  text,
  link,
  className,
  textSize = 24,
}: iRotateLink) => {
  const [isHover, setIsHover] = useState(false);
  const hoverVar: Variants = {
    open: {
      y: "-100%",
      skewY: [5, 0],
      transition: {
        repeatType: "reverse",
      },
    },
    close: {
      y: "0",
      skewY: [0, 0],
    },
  };
  return (
    <a href={link} className={cn("", {})}>
      <span
        className={cn("flex flex-col overflow-hidden leading-[100%] ", {
          ["h-[24rem] text-[24rem]"]: textSize === 24,
          ["h-[27rem] text-[27rem]"]: textSize === 27,
        })}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.span
          className=""
          initial="close"
          variants={hoverVar}
          animate={isHover ? "open" : "close"}
        >
          {text}
        </motion.span>
        <motion.span
          className="relative"
          initial="close"
          variants={hoverVar}
          animate={isHover ? "open" : "close"}
        >
          {text}
        </motion.span>
      </span>
    </a>
  );
};
