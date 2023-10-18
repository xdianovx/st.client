"use client";

import cn from "classnames";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

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
    },
    close: {
      y: "0",
    },
  };
  return (
    <a href={link} className={cn("link text-hover-effect block", {})}>
      <span>
        <div
          className={`flex flex-col h-[${textSize}rem] text-[${textSize}rem] overflow-hidden leading-[100%]`}
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
            className=""
            initial="close"
            variants={hoverVar}
            animate={isHover ? "open" : "close"}
          >
            {text}
          </motion.span>
        </div>
      </span>
    </a>
  );
};
