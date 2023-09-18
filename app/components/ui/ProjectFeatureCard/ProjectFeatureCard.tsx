"use client";

import classNames from "classnames";
import cn from "classnames";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export interface iProjectFeatureCard {
  className?: string;
  data: any;
}

export const ProjectFeatureCard = ({
  className,
  data,
}: iProjectFeatureCard) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants: Variants = {
    open: {
      height: "auto",
      opacity: 1,
    },
    close: {
      height: 0,
      opacity: 0,
    },
  };

  const variantsCross: Variants = {
    open: { rotate: 90, top: 0 },
    close: { rotate: 0, top: 0 },
  };

  return (
    <div className={cn(className, "border-t border-grayBorder pt-[26rem]")}>
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="text-gray">{data.label}</p>

        <div className="relative h-[16rem] w-[16rem]">
          <motion.div
            className="absolute left-1/2 top-1/2 h-full w-[1rem] -translate-x-1/2 -translate-y-1/2 bg-gray"
            animate={isOpen ? "open" : "close"}
            variants={variantsCross}
            initial="close"
          ></motion.div>
          <div className="absolute left-1/2 top-1/2 h-[1rem] w-full -translate-x-1/2 -translate-y-1/2 bg-gray"></div>
        </div>
      </div>

      <h2 className="mt-[12rem] text-[20rem] leading-[110%]">{data.title}</h2>

      <motion.div variants={variants} animate={isOpen ? "open" : "close"}>
        <p className="pt-[23rem]">{data.description}</p>
      </motion.div>

      <div className="relative mt-[26rem] h-[650rem] w-full overflow-hidden rounded-[4rem]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="block h-auto w-full object-contain object-top"
        />
      </div>
    </div>
  );
};
