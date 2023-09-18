"use client";

import cn from "classnames";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface iBranchCompanyItem {
  className?: string;
  data: any;
  ref?: any;
}

gsap.registerPlugin(ScrollTrigger);
export const BranchCompanyItem = ({ className, data }: iBranchCompanyItem) => {
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

  return (
    <div
      className={cn(
        className,
        "offop relative  cursor-pointer py-[50rem] duration-500 ease-in-out hover:!opacity-100",
        {
          ["opacity-100"]: isOpen,
        }
      )}
      onClick={() => {
        setIsOpen(!isOpen);
        ScrollTrigger.refresh();
      }}
    >
      <div className="linebtw absolute bottom-0 left-0 h-[1rem] w-full bg-grayBorder"></div>
      <div className="container">
        <div className="flex items-center gap-[140rem]">
          <div className="w-[420rem] text-[40rem] font-light">{data.title}</div>
          <div className="w-[280rem]">{data.position}</div>
          <div>
            {data.link ? (
              <Link href={data.link} target="_blank" className="underline">
                {data.linkName}
              </Link>
            ) : (
              <p className="text-gray">скоро</p>
            )}
          </div>
          <div className="ml-auto text-right">{data.year}</div>
        </div>

        <motion.div
          className="overflow-hidden"
          variants={variants}
          initial="close"
          animate={isOpen ? "open" : "close"}
        >
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem] pt-[55rem]">
            <div className="flex flex-col gap-[70rem]">
              {data.address && (
                <div className="flex flex-col gap-[10rem]">
                  <p className="text-[14rem] text-gray">Адрес</p>
                  <p>{data.address}</p>
                </div>
              )}

              <div className="flex flex-col gap-[10rem]">
                <p className="text-[14rem] text-gray">Контакты</p>
                <div className="">
                  <Link className="block" href={`tel:${data.tel}`}>
                    {data.tel}
                  </Link>
                  <Link className="block" href={`mailto:${data.email}`}>
                    {data.email}
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <p>{data.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
