import Link from "next/link";
import { LinkUnderline } from "../LinkUnderline/LinkUnderline";

export interface iNewsCard {
  data: any;
}

export const NewsCard = ({ data }: iNewsCard) => {
  return (
    <Link
      href={`/news/${data.link}`}
      className="group block border border-grayBorder transition-colors duration-300 ease-in-out hover:bg-black"
    >
      <div className="flex h-[430rem] flex-col px-[68rem] py-[48rem]">
        <h2 className="text-[40rem] leading-[110%] transition-colors delay-100 duration-300 ease-in-out group-hover:text-white">
          {data.title}
        </h2>
        <p className="mt-[34rem] delay-100 duration-300 ease-in-out group-hover:text-white">
          {data.description}
        </p>
        <div className="mt-auto flex justify-between delay-100 duration-300 ease-in-out group-hover:text-white">
          <p>{data.date}</p>
          <p className="underline">читать</p>
        </div>
      </div>
    </Link>
  );
};
