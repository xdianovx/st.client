import cn from "classnames";
import { Suptitle, Text } from "@/app/components/ui";

export interface iMapProjects {
  className?: string;
}

export const MapProjects = ({ className }: iMapProjects) => {
  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
          <Suptitle text="Карта проектов" />
          <Text
            size="md"
            text="На сегодняшний день география деятельности группы компаний \n «Стройград» охватывает две чрезвычайно важные для экономики страны области — Краснодарский и Ставропольский края."
          />
        </div>
      </div>

      <div className="mt-[100rem] h-[920rem] bg-grayLight"></div>
    </section>
  );
};
