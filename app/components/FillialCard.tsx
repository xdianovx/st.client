"use client";

import cn from "classnames";
import { ContactsListItem, PinButton } from "./ui";
import { useState } from "react";
import { Variants, motion } from "framer-motion";
import { Placemark, YMaps, Map } from "@pbe/react-yandex-maps";

interface iFillialCard {
  className?: string;

  data: any;
}
export const FillialCard = ({ className, data }: iFillialCard) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      height: "320rem",
    },
    close: {
      height: 0,
    },
  };
  return (
    <>
      <div className={cn("border-b border-grayBorder")}>
        <div className="container  mb-[66rem] ">
          <div className="flex justify-end">
            <div className="w-[1120rem]">
              <p>Филиал</p>
              <div className="flex items-end">
                <h3 className="text-[100rem] font-light leading-[90%] mt-[40rem]">
                  {data.city}
                </h3>

                <PinButton
                  className="ml-auto"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    console.log(isOpen);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="bg-gray overflow-hidden"
          variants={variants}
          initial="close"
          animate={isOpen ? "open" : "close"}
        >
          <div className="h-[320rem]">
            <YMaps>
              <Map
                instanceRef={(ref) => {
                  ref && ref.behaviors.disable("scrollZoom");
                }}
                style={{
                  height: "100%",
                  filter: "grayscale(1)",
                }}
                width="100%"
                defaultState={{
                  center: data.coords,
                  zoom: 10,
                }}
              >
                <Placemark geometry={data.coords} />
              </Map>
            </YMaps>
          </div>
        </motion.div>

        <div className="border-t border-grayBorder py-[80rem]">
          <div className="container">
            <div className="grid gap-[140rem] grid-cols-[420rem_420rem_1fr]">
              <h3>{data.title}</h3>
              <ContactsListItem label="Адрес:" list={data.address} />
              <ContactsListItem label="Телефон:" list={data.phone} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
