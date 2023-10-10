import cn from "classnames";
import { LinkUnderline } from "../../ui";
import { teamReviews } from "@/app/db";
import { TeamReviewItem } from "./TeamReviewItem";

interface iTeamReviews {
  className?: string;
}
export const TeamReviews = ({ className }: iTeamReviews) => {
  return (
    <section className={cn("pb-[200rem]", className)}>
      <div className="container">
        <div className="flex items-end">
          <h2 className="text-[128rem] leading-[80%] font-light">
            Отзывы <br />
            сотрудников
          </h2>

          <LinkUnderline
            text={"Оставить отзыв"}
            link={""}
            className="ml-auto"
          />
        </div>
      </div>

      <div className="border-t border-grayBorder mt-[100rem]">
        <div className="container">
          <div className="grid mt-[87rem] grid-cols-2 gap-[58rem]">
            {teamReviews.map((item) => (
              <TeamReviewItem data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
