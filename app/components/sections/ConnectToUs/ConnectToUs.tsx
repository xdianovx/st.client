"use client";

import cn from "classnames";
import LogoSVG from "./logo.svg";
import { LinkUnderline } from "../../ui";

export interface iuConnectToUs {
  className?: string;
}

export const ConnectToUs = ({ className }: iuConnectToUs) => {
  return (
    <section className={cn(className, "h-screen")}>
      <div className="container h-full">
        <div className="flex h-full flex-col items-center justify-center">
          <LogoSVG />
          <div className="mt-[50rem] flex flex-col items-center gap-[36rem] ">
            <p className="text-center text-[40rem] font-light leading-[110%]">
              Присоединяйтесь к <br /> нашим семьям!
            </p>
            <LinkUnderline text={"выбрать проект"} link={"/projects"} />
          </div>
        </div>
      </div>
    </section>
  );
};
