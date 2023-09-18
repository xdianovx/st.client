"use client";

import cn from "classnames";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Burger, Logo } from "./ui";

export const Header = (): JSX.Element => {
  const isOpen = useSelector((state: RootState) => state.isMenuOpen.value);

  return (
    <header className="relative z-50">
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between border-b py-[58rem] transition-all",
            {
              ["border-grayBorder"]: !isOpen,
            }
          )}
        >
          <Logo />

          <Burger />
        </div>
      </div>
    </header>
  );
};
