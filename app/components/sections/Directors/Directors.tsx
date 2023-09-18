"use client";

import cn from "classnames";
import { ButtonSquare, Suptitle } from "@/app/components/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { DirectorCard } from "@/app/components/sections/Directors/DirectorCard";
import Img1 from "./1.jpg";
import Img2 from "./2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import s from "./styles.module.scss";
import { useLayoutEffect, useRef } from "react";

export interface iDirectors {
  className?: string;
}

export const Directors = ({ className }: iDirectors) => {
  const data = [
    {
      id: 1,
      name: "Гукалов Андрей Александрович",
      photo: Img1,
      position: 'Генеральный директор АН "Стройград"',
      phone: "+7 (861) 999-99-99",
      email: "and@gk-stroygrad.ru",
    },
    {
      id: 2,
      name: "Колосова Ольга Ивановна",
      photo: Img2,
      position: 'Генеральный директор ООО "Стройград"',
      phone: "+7 (861) 999-99-99",
      email: "kolos@gk-stroygrad.ru",
    },
    {
      id: 3,
      name: "Лобанова Ольга Алексеевна",
      photo: "",
      position: 'Исполнителдьный директор АН "Стройград"',
      phone: "+7 (861) 999-99-99",
      email: "lobanova@gk-stroygrad.ru",
    },
  ];

  const btnPin = useRef<HTMLDivElement>(null);
  const sectionPin = useRef<any>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".pinsecbtn", {
        bottom: 0,
        scrollTrigger: {
          // markers: true,
          trigger: sectionPin.current,
          scrub: 1.4,
          start: "top +=50%",
          end: "bottom +=50%",
        },
      });
    });

    return ctx.revert();
  }, []);

  return (
    <section className={cn(className)} ref={sectionPin}>
      <div className="container">
        <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
          <div className="relative z-2">
            <Suptitle text="Руководство" />
            <p className="mt-[40rem]">
              Благодаря большому опыту и мастерству руководящего состава все
              компании работают как слаженная команда профессионалов, ведомая
              единой целью — удовлетворение интересов любимого потребителя.
            </p>
            <div className="mt-[72rem]" ref={btnPin}>
              <ButtonSquare text="Вся команда" link="/team" />
            </div>
          </div>

          <div className={cn(s.swiper_one_side, "relative")}>
            <Swiper slidesPerView="auto" spaceBetween="34rem">
              {data.map((item) => (
                <SwiperSlide className="max-w-[580rem]" key={item.id}>
                  <DirectorCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
