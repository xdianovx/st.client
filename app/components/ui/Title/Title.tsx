import cn from "classnames";
import React from "react";

export interface iTitle {
  className?: string;
  tag: "h1" | "h1s" | "h2" | "h3" | "h4";
  children: any;
  animation?: boolean;
}
const style =
  "inline-block tracking-tight ease-in-out transition-all duration-300 hover:-translate-y-[110rem]";

export const Title = ({ className, children, tag, animation }: iTitle) => {
  const title = animation
    ? children.split("").map((char: any, id: number) => (
        <p className={style} key={id}>
          {char}
        </p>
      ))
    : children;

  switch (tag) {
    case "h1s":
      return (
        <h1 className={cn(className, "text-[218rem] uppercase leading-[100%]")}>
          {title}
        </h1>
      );
    case "h1":
      return (
        <h2 className={cn(className, "text-[295rem] leading-[85%]")}>
          {title}
        </h2>
      );
    case "h2":
      return (
        <h1 className={cn(className, "text-[46rem] font-light leading-[120%]")}>
          {title}
        </h1>
      );
    case "h3":
    case "h4":
  }
};
