"use client";

import Image from "next/image";
import { Plus } from "../ui";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

interface iTeamCard {
  data: any;
}

export const TeamCard = ({ data }: iTeamCard) => {
  const [isOpen, setisOpen] = useState(false);

  const variants: Variants = {
    open: {
      height: "auto",
    },
    close: {
      height: 0,
    },
  };

  return (
    <div className="flex flex-col">
      <div className="relative h-[950rem]">
        <Image src={data.photo} fill alt={data.name} />
      </div>
      <div
        className="mt-[40rem] flex items-start cursor-pointer"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <div>
          <h2 className="text-[40rem] font-light leading-[100%]">
            {data.name}
          </h2>
          <p className="text-gray mt-[20rem]">{data.position}</p>
        </div>

        <Plus size="xl" className="ml-auto" isOpen={isOpen} isHover={false} />
      </div>

      <motion.div
        className="overflow-hidden"
        variants={variants}
        initial="close"
        animate={isOpen ? "open" : "close"}
      >
        <div className="pt-[40rem]">
          <div className="flex flex-col gap-[10rem] leading-[100%]">
            <div className="flex gap-[20rem]">
              <p className="text-gray">Телефон:</p>
              <p>{data.phone}</p>
            </div>

            <div className="flex gap-[20rem]">
              <p className="text-gray">Email:</p>
              <p>{data.email}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
