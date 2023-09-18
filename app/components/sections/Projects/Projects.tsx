import cn from "classnames";
import { Dropdown, LinkUnderline } from "../../ui";
import Image from "next/image";

export interface iProjects {
  className: string;
}

export const Projects = ({ className }: iProjects) => {
  const data = {
    title: "Дворянская усадьба",
    description:
      "«Семейный квартал» — это экологичный проект рядом с Дубковским и Подушкинским лесами. Он сочетает близость к природным комплексам, престижный статус западного направления и возможность удобно добраться до столицы.",
    city: "г. Ростов-на-Дону",
    openDate: "Заселение до 31.03.2023",
    price: "от 3,3 млн. руб.",
  };

  return (
    <section className={cn(className, "")}>
      <div className="container">
        <div className="grid grid-cols-2 items-end">
          <h2 className="text-[64rem] uppercase leading-[85%]">
            Наши <br /> проекты
          </h2>

          <div className="flex gap-[140rem]">
            <Dropdown title="Выберите статус постройки" />
            <Dropdown title="Выберите город" />
          </div>
        </div>

        <div className="mt-[84rem]">
          <div className="relative overflow-hidden h-[810rem]">
            <Image src="/img/prj-main.jpg" fill alt="Проект" priority={true} />
          </div>

          <div className="mt-[40rem] flex items-start">
            <h2 className="w-[420rem] text-[32rem] leading-[120%]">
              {data.title}
            </h2>
            <p className="w-[560rem] leading-[140%] text-gray">
              {data.description}
            </p>
            <div className="flex w-[420rem] flex-col pl-[140rem]">
              <p>{data.city}</p>
              <p>{data.openDate}</p>
            </div>
            <LinkUnderline text={data.price} link="/" className="ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
