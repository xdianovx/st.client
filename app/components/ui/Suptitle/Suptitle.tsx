import cn from "classnames";

export interface iSuptitle {
  className?: string;
  text: string;
}

export const Suptitle = ({ text, className }: iSuptitle) => {
  return (
    <div className={cn(className, "mt-[4rem] leading-[100%] text-gray")}>
      {text}
    </div>
  );
};
