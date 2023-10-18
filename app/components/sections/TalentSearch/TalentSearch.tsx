import cn from "classnames";
import { LinkUnderline, Suptitle, Title } from "../../ui";

interface iTalentSearch {
  className?: string;
}

export const TalentSearch = ({ className }: iTalentSearch) => {
  return (
    <section className={cn("mb-[440rem]", className)}>
      <div className="container">
        <div className="grid grid-cols-2 gap-[40rem]">
          <Suptitle text={"Работа для вас"} />
          <div className="">
            <h2 className="text-[40rem] font-light">
              Мы всегда в поиске талантов!{" "}
            </h2>

            <p className="mt-[30rem] text-[20rem] text-gray">
              (16+ свободных вакансий)
            </p>

            <LinkUnderline
              text={"Посмотреть вакансии "}
              className="mt-[80rem] inline-block"
              link={"/vacancy"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
