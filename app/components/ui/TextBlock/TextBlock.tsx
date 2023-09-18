import React from "react";
import { Suptitle, Text } from "@/app/components/ui";
import cn from "classnames";

export interface iTextBlock {
  className?: string;
  title: string;
  text: string;
  size: "sm" | "md" | "xl";
}
export const TextBlock = ({
  className,
  title,
  text,
  size = "sm",
}: iTextBlock) => {
  return (
    <section className={cn(className, "")}>
      <div className="container">
        <div className="grid  grid-cols-[280rem_980rem] gap-[280rem]">
          <Suptitle text="О нас" />
          <Text size={size} text={text} />
        </div>
      </div>
    </section>
  );
};
