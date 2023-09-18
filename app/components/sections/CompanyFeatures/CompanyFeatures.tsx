/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import cn from "classnames";
import { FeatureItem, Suptitle, Title } from "../../ui";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import s from "./styles.module.scss";
import { useRef, useState } from "react";

export interface iCompanyFeatures {
  className?: string;
}

export const CompanyFeatures = ({ className }: iCompanyFeatures) => {
  const [swiper, setSwiper] = useState(null);
  const [swiperOffset, setSwiperOffset] = useState<number>(0);

  const data = [
    {
      id: 1,
      title: "Клиентоориентированность",
      image: "/img/makaka2.jpg",
      num: "01",
      text: "Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса.",
    },
    {
      id: 2,
      title: "Честность и ответсвенность",
      image: "/img/makaka2.jpg",
      num: "02",
      text: "Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса.",
    },
    {
      id: 3,
      title: "Лидерство и инновации",
      image: "/img/makaka2.jpg",
      num: "03",
      text: "Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса.",
    },
    {
      id: 4,
      title: "Вовлеченность и инициатива",
      image: "/img/makaka2.jpg",
      num: "04",
      text: "Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса.",
    },
    {
      id: 5,
      title: "Вовлеченность и инициатива",
      image: "/img/makaka2.jpg",
      num: "05",
      text: "Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса.",
    },
    {
      id: 6,
      title: "Вовлеченность и инициатива",
      image: "/img/makaka2.jpg",
      num: "06",
      text: "Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса.",
    },
  ];
  const refs = Array.from({ length: data.length }, (a) =>
    useRef<HTMLDivElement>(null)
  );

  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="flex">
          <div className="w-[560rem]">
            <Suptitle text="Преимущества компании" />
          </div>
          <div className="max-w-[980rem]">
            <Title tag="h2">
              Какой-то текст, который сможет донести то аудитории, что мы
              надежный застройщик и что наши комплексы отвечают всем самым
              высоким требованиям жильцов.
            </Title>

            <p className="mt-[70rem] max-w-[560rem] text-gray">
              Продолжаем убеждать в том, что лучше нас не найти. Аргументы с
              которыми просто не поспоришь. Еще пару строк и клиенты сами начнут
              ломиться в офис.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="mt-[100rem] [&:hover>.offop]:opacity-40">
          {data.map((item, index) => (
            <FeatureItem
              setRef={refs[index]}
              data={item}
              key={item.id}
              hoverCallback={() => {
                swiper?.slideTo(index);
                const height =
                  refs[index]?.current?.getBoundingClientRect()?.height ?? 0;
                const top = refs[index]?.current?.offsetTop ?? 0;
                setSwiperOffset(top + height / 2);
              }}
            />
          ))}
        </div>
        <div className={cn(s.swiper_aside, "container")}>
          <div className=" h-full ">
            <Swiper
              style={{
                top: swiperOffset + "px",
              }}
              className="left-[107rem] ml-0 h-full w-[352rem] rounded-[20rem]"
              direction="vertical"
              slidesPerView={1}
              onSwiper={(swiper) => setSwiper(swiper)}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="w-[352rem] ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="block object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
