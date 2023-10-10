import cn from "classnames";
import { LinkUnderline, Plus } from "../../ui";
import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { ListItem } from "./ListItem";

interface iVacancyRowItem {
  data: any;
  className?: string;
}

export const VacancyRowItem = ({ data, className }: iVacancyRowItem) => {
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
    <div
      className={cn(" border-b border-grayBorder", className, {
        ["opacity-95"]: isOpen,
      })}
    >
      <div className="container">
        <div
          className="flex cursor-pointer py-[36rem] "
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <div className="max-w-[560rem] w-full">{data.title}</div>
          <div className="max-w-[280rem] w-full">{data.city}</div>
          <div className="max-w-[280rem] w-full">{data.expirience}</div>
          <div className="max-w-[280rem] w-full">{data.salary}</div>
          <LinkUnderline text={"Откликнуться"} link={"№"} />
          <div className="ml-auto">
            <Plus isOpen={isOpen} isHover={false} />
          </div>
        </div>
        <motion.div
          className="overflow-hidden"
          variants={variants}
          initial="close"
          animate={isOpen ? "open" : "close"}
        >
          <div className="pt-[100rem]">
            <div className="flex">
              {data.duties && (
                <div className="max-w-[560rem] w-full">
                  <ListItem title="Обязанности" list={data.duties} />
                </div>
              )}
              {data.terms && (
                <div className="max-w-[560rem] w-full">
                  <ListItem title="Условия" list={data.terms} />
                </div>
              )}
              {data.requirements && (
                <div className="flex-grow">
                  <ListItem title="Требования" list={data.requirements} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
