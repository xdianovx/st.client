import cn from "classnames";
import { Suptitle, Text } from "../../ui";

export interface iSubscribeForm {
  className?: string;
}

export const SubscribeForm = ({ className }: iSubscribeForm) => {
  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
          <Suptitle text={"Подписка"} />
          <div>
            <Text
              size="md2"
              text="Подпишитесь на рассылку, что-бы получать на почту актуальные новости и акции от компании!"
            />

            <div className="mt-[100rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
