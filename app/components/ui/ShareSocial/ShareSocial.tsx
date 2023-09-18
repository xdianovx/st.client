import cn from "classnames";

export interface iShareSocial {
  className?: string;
}

export const ShareSocial = ({ className }: iShareSocial) => {
  return (
    <div className={cn(className)}>
      <div className="flex items-center">
        <p className="w-[140rem] text-gray">Поделиться:</p>
        <div className="flex gap-[10rem]">
          <div className="h-[30rem] w-[30rem] rounded-[4rem] bg-grayLight"></div>
          <div className="h-[30rem] w-[30rem] rounded-[4rem] bg-grayLight"></div>
          <div className="h-[30rem] w-[30rem] rounded-[4rem] bg-grayLight"></div>
          <div className="h-[30rem] w-[30rem] rounded-[4rem] bg-grayLight"></div>
          <div className="h-[30rem] w-[30rem] rounded-[4rem] bg-grayLight"></div>
        </div>
      </div>
    </div>
  );
};
