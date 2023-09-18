"use client";

import LogoSVG from "./logo.svg";
import Link from "next/link";
import { useRef } from "react";
import type { RootState } from "@/app/store/store";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Logo = () => {
  const isOpen = useSelector((state: RootState) => state.isMenuOpen.value);

  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link href="/" ref={ref} className="z-[200]">
      <LogoSVG
        className={cn({
          ["fill-white"]: isOpen === true,
          ["fill-black"]: isOpen === false,
        })}
      />
    </Link>
  );
};
