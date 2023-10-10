import cn from "classnames";
import { Dropdown } from "../../ui";
import { actualVacancy } from "@/app/db";
import { VacancyRowItem } from "./VacancyRowItem";

interface iActualVacancy {
  className?: string;
}
export const ActualVacancy = ({ className }: iActualVacancy) => {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <div className="flex items-end">
          <h2 className="text-[56rem] leading-[100%] max-w-[5560rem]">
            Актуальные <br /> вакансии на сегодня
          </h2>
          <p className="text-gray mb-[5rem]">(16+ свободных вакансий)</p>
          <div className="ml-auto maw-w-[560rem]">Добавить новый дроп</div>
        </div>
      </div>

      <div className="mt-[160rem] border-b border-grayBorder py-[24rem]">
        <div className="container">
          <div className="flex text-gray">
            <div className="max-w-[560rem] w-full">Должность</div>
            <div className="max-w-[280rem] w-full">Город</div>
            <div className="max-w-[280rem] w-full">Стаж</div>
            <div className="max-w-[420rem] w-full">Зарплата</div>
          </div>
        </div>
      </div>

      <div className="[&:hover>.offop]:opacity-40">
        {actualVacancy.map((item) => (
          <VacancyRowItem
            key={item.id}
            data={item}
            className="offop transition-all duration-300 ease-in-out hover:!opacity-100"
          />
        ))}
      </div>
    </section>
  );
};
