"use client";

import { LegacyRef, useLayoutEffect, useState } from "react";
import { Plus } from "../index";
import cn from "classnames";
import { Variants, motion } from "framer-motion";

export interface iFeatureItem {
  data: any;
  className?: string;
  setRef?: LegacyRef<HTMLDivElement> | undefined;
  hoverCallback?: () => void;
}

export const FeatureItem = ({
  data,
  className,
  hoverCallback,
  setRef,
}: iFeatureItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const variants: Variants = {
    open: {
      height: "auto",
      opacity: 1,
    },
    close: { height: 0, opacity: 0 },
  };

  useLayoutEffect(() => {
    window.dispatchEvent(new Event("resize"));
    if (isHover && typeof hoverCallback === "function") {
      hoverCallback();
    }
  }, [isOpen]);

  useLayoutEffect(() => {
    if (isHover && typeof hoverCallback === "function") {
      hoverCallback();
    }
  }, [isHover]);

  return (
    <div
      ref={setRef || undefined}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className={cn(
        "offop border-b border-grayBorder py-[40rem]  transition-all duration-300 ease-in-out hover:!opacity-100",
        {
          ["opacity-100"]: isOpen,
        }
      )}
    >
      <div className="container">
        <div className="flex cursor-pointer items-center justify-between">
          <span className="w-[560rem] text-[14rem] text-gray">{data.num}</span>
          <div className="flex w-[1120rem] shrink-0 items-center">
            <h4 className="text-[40rem] font-light leading-[110%]">
              {data.title}
            </h4>

            <Plus
              isOpen={isOpen}
              isHover={isHover}
              className={cn("ml-auto", {
                ["active"]: isOpen || isHover,
              })}
            />
          </div>
        </div>

        <motion.div
          className={cn(" flex", {
            ["mt-[28rem]"]: isOpen,
          })}
          variants={variants}
          initial="close"
          animate={isOpen ? "open" : "close"}
        >
          <div className="ml-auto w-[1120rem]">
            <p className="w-[700rem]">{data.text}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
