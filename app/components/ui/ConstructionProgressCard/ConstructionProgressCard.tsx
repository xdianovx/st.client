import cn from "classnames";
import Image from "next/image";

export interface iConstructionProgressCard {
  className?: string;
  data: any;
}

export const ConstructionProgressCard = ({
  className,
  data,
}: iConstructionProgressCard) => {
  return (
    <div className={cn(className, "")}>
      <p className="text-gray">{data.year}</p>
      <p className="mt-[12rem] text-[20rem] leading-[110%]">{data.date}</p>
      <div className="relative mt-[26rem] h-[650rem] overflow-hidden rounded-[4rem]">
        <Image src={data.image} fill alt={""} className="block object-cover" />
      </div>
    </div>
  );
};
