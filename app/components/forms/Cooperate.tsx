import cn from "classnames";
import { ButtonArrow, Suptitle, Text } from "../ui";
import { Input } from ".";

interface iCooperate {
  className?: string;
}

export const Cooperate = ({ className }: iCooperate) => {
  return (
    <section className={cn(className, "")}>
      <div className="container">
        <div className="flex">
          <Suptitle text="Сотрудничество" />
          <div className="max-w-[980rem] ml-auto">
            <Text
              text="Оставьте заявку и наши специалисты помогут выбрать квартиру и лучшие условия по ипотеке!"
              size={"md2"}
            />

            <form className="w-full mt-[100rem]">
              <div className="flex flex-col gap-[50rem]">
                <Input placeholder="Имя" />
                <Input placeholder="Телефон" />
              </div>
            </form>

            <div className="mt-[28rem] flex items-center">
              <p className="text-gray max-w-[280rem] text-[12rem]">
                Оставляя заявку, вы даете согласие на обработку персональных
                данных.
              </p>
              <div className="ml-auto">
                <ButtonArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
