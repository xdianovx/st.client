import Image from "next/image";

interface iTeamReviewItem {
  data: any;
}

export const TeamReviewItem = ({ data }: iTeamReviewItem) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-[810rem] h-[810rem] overflow-hidden rounded-full">
        <Image src={data.photo} fill alt={data.name} />
      </div>

      <div className="mt-[40rem]">
        <h2 className="text-[40rem] font-light leading-[100%]">{data.name}</h2>
        <p className="mt-[20rem] text-gray">{data.position}</p>
      </div>
    </div>
  );
};
