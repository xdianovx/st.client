import cn from "classnames";
import Link from "next/link";
import React from "react";

export interface iFooterContactLink {
  className?: string;
  title: string;
  link: string;
  text: string;
}

export const FooterContactLink = ({
  className,
  title,
  link,
  text,
}: iFooterContactLink) => {
  return (
    <div className={cn(className, "flex flex-col gap-[20rem]")}>
      <p className="">{title}</p>
      <Link href={link} className="text-[28rem] font-light leading-[100%]">
        {text}
      </Link>
    </div>
  );
};
