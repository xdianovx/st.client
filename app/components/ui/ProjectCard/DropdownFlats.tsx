import cn from "classnames";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface iDropdownFlats {
  data: any;
  title: string;
}

export const DropdownFlats = ({ data, title }: iDropdownFlats) => {
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
        <div className="py-[32rem] flex flex-col gap-y-[12rem]">
          {data &&
            data.map((list: any) => (
              <div className="flex" key={list.id}>
                <p className="w-[125rem]">{list.title}</p>
                <p className="ml-[12rem] text-gray">{list.square}</p>
                <Link href="/" className="ml-auto underline">
                  {list.price}
                </Link>
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};
