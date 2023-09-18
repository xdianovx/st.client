"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import cn from "classnames";
import { useUrl } from "nextjs-current-url";
import s from "./Breadcrumbs.module.scss";

export interface iBreadcrumbs {
  className?: string;
  links: any;
}

export const Breadcrumbs = ({ links, className }: iBreadcrumbs) => {
  const getUrl = useUrl();
  const path = usePathname();
  const uri = getUrl?.pathname.split("/");

  return (
    <div className={cn(className)}>
      <div className="flex items-center ">
        <Link
          href="/"
          className="text-grayBorder transition-colors duration-300 ease-in-out hover:text-gray"
        >
          Главная
        </Link>

        {uri?.map((item, idx) => {
          if (item == "projects") item = "Проекты";
          if (item == "news") item = "Новости";
          if (item == "team") item = "Руководство";
          if (item == "about") item = "О компании";

          return (
            <>
              <Link
                href={`/${item}`}
                className={cn(
                  s.link,
                  "ransition-colors text-grayBorder duration-300 ease-in-out hover:text-gray"
                )}
              >
                {item}
              </Link>
              <div
                className={cn(
                  s.item,
                  "mx-[10rem] h-[4rem] w-[4rem] rounded-[1rem] bg-gray"
                )}
              ></div>
            </>
          );
        })}
      </div>
    </div>
  );
};
