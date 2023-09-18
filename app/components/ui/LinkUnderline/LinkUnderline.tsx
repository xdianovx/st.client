import cn from "classnames";
import Link from "next/link";
import s from "./LinkUnderline.module.scss";

export interface iLinkUnderline {
  className?: string;
  text: string;
  link: string;
  size?: "sm" | "md" | "xl";
}

export const LinkUnderline = ({
  className,
  text,
  link,
  size,
}: iLinkUnderline) => {
  return (
    <Link
      href={link}
      className={cn(className, s.item, "before:bg-black", {
        [s.sm]: size === "sm",
        ["text-[20rem]"]: size === "md",
        [s.xl]: size === "xl",
      })}
    >
      {text}
    </Link>
  );
};
