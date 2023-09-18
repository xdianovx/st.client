"use client";

import cn from "classnames";
import { motion, Variants } from "framer-motion";

export interface iPlus {
  className?: string;
  isOpen: boolean;
  isHover: boolean;
}

export const Plus = ({ className = "", isOpen, isHover }: iPlus) => {
  const variantsCross: Variants = {
    open: { rotate: 90 },
    close: { rotate: 0, top: 0 },
  };

  return (
    <div
      className={cn(className, "pointer relative h-[20rem] w-[20rem]")}
    >
      <div className="absolute left-1/2 top-1/2 h-[1rem] w-full -translate-x-1/2 -translate-y-1/2 bg-black"></div>
      <motion.div
        animate={isOpen ? "open" : "close"}
        variants={variantsCross}
        initial="close"
        className="absolute left-1/2 top-1/2 h-full w-[1rem] -translate-x-1/2 -translate-y-1/2 bg-black"
      ></motion.div>
    </div>
  );
};
