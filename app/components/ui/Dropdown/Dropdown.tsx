// import { CaretSvg } from "./chevron.svg";

import cn from "classnames";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

export interface iDropdown {
  title: string;
  data?: any;
}

export const Dropdown = ({ title, data }: iDropdown) => {
  const [isOpen, setisOpen] = useState(false);

  const variants: Variants = {
    open: {
      height: "auto",
    },
    close: {
      height: 0,
    },
  };

  return (
    <div className="relative w-full max-w-[420rem] border-b border-grayBorder">
      <div
        className={cn("flex cursor-pointer items-center pb-[16rem]", {
          ["text-gray"]: isOpen,
        })}
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <p>{title}</p>
        <svg
          className={cn(
            "stroke-black ml-auto transition-all duration-300 ease-in-out",
            {
              ["rotate-[45deg] stroke-gray"]: isOpen,
            }
          )}
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <line x1="0.347656" y1="8.09766" x2="16.3477" y2="8.09766" />
          <line x1="8.84766" y1="16.5977" x2="8.84766" y2="0.597656" />
        </svg>
      </div>

      <motion.div
        className="overflow-hidden"
        variants={variants}
        initial="close"
        animate={isOpen ? "open" : "close"}
      >
        <div className="py-[32rem] flex flex-wrap justify-between gap-y-[12rem]">
          {data &&
            data.map((list: any) => (
              <div className="w-1/2" key={list.id}>
                {list.title}
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};
