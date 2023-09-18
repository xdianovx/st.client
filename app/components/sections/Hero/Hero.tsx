import cn from "classnames";
import React from "react";
import { Title } from "../../ui";

export interface iHero {
  className?: string;
}

export const Hero = ({ className }: iHero): JSX.Element => {
  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="flex items-start justify-between">
          <p>Строим больше 15 лет</p>
          <p className="max-w-[420rem] text-right">
            Группа компаний «Стройград» начала свою историю в 2006 году со
            строительства многоквартирного жилого дома в г. Ставрополь.{" "}
          </p>
        </div>

        <div className="mt-[484rem]">
          <Title animation tag="h1">
            СТРОЙГРАД
          </Title>
        </div>
      </div>
    </section>
  );
};
