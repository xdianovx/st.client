import Image from "next/image";
import { Plus } from "@/app/components/ui";
import { useState } from "react";
import { Variants, motion } from "framer-motion";
import Link from "next/link";

export interface iDirectorCard {
  data: any;
}

export const DirectorCard = ({ data }: iDirectorCard) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants: Variants = {
    open: {
      height: "auto",
      opacity: 1,
    },
    close: {
      height: 0,
      opacity: 0,
    },
  };
  return (
    <div>
      <div className="relative h-[810rem] overflow-hidden rounded-[4rem]">
        {data.photo ? (
          <Image src={data.photo} alt={data.name} fill />
        ) : (
          <div className="h-full bg-grayLight"></div>
        )}
      </div>

      <div className="mt-[26rem] flex">
        <div
          className=" flex flex-col"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <h4 className="text-[24rem] leading-[100%]">{data.name}</h4>
          <p className="mt-[10rem] leading-[100%] text-gray">{data.position}</p>
        </div>

        <Plus className="ml-auto" isOpen={isOpen} isHover={false} />
      </div>

      <motion.div
        variants={variants}
        animate={isOpen ? "open" : "close"}
        initial="close"
        className="mt-[30rem]"
      >
        {data.phone && (
          <div className="flex items-center gap-[16rem]">
            <p className="text-gray">Телефон:</p>
            <p>{data.phone}</p>
            {/* <Link href={`tel:${data.phone}`}>{data.phone}</Link> */}
          </div>
        )}

        {data.email && (
          <div className="flex items-center gap-[16rem]">
            <p className="text-gray">Email:</p>
            {/* <Link href={`mailto:${data.email}`}>{data.email}</Link> */}
            <p>{data.email}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
