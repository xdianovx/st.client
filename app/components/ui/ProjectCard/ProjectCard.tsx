import cn from "classnames";
import { Dropdown } from "../Dropdown/Dropdown";
import { Button } from "../Button/Button";
import Image from "next/image";
import { DropdownFlats } from "./DropdownFlats";

export interface iProjectCard {
  className?: string;
  data: any;
}

export const ProjectCard = ({ className, data }: iProjectCard) => {
  return (
    <div className={cn(className)}>
      <div className="container">
        <div className="grid grid-cols-[420rem_1120rem] gap-[140rem]">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2 className="text-[24rem] leading-[120%]">{data.title}</h2>
              <div>
                <p className="text-gray">Год сдачи: {data.finish}</p>
                <p className="mt-[7rem]">{data.city}</p>
              </div>
            </div>

            <p className="mt-[60rem] text-gray">{data.description}</p>

            <div className="mt-[66rem] flex flex-col gap-[24rem]">
              {data.facilities && (
                <Dropdown title="Удобства" data={data.facilities} />
              )}

              {data.flats_type && (
                <DropdownFlats
                  title={`${data.flats_available} квартир в продаже`}
                  data={data.flats_type}
                />
              )}
            </div>

            <Button link={data.slug} className="mt-[48rem]">
              Подробнее
            </Button>
          </div>

          <div className="relative h-[870rem] overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="absolute  object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
