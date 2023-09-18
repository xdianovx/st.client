"use client";

import cn from "classnames";
import { LinkUnderline, OfferCard } from "../../ui";
import { Swiper, SwiperSlide } from "swiper/react";

export interface iOffersSlider {
  className: string;
}

export const OffersSlider = ({ className }: iOffersSlider) => {
  const data = [
    {
      id: 1,
      title: "Ипотека \n для IT-специалистов",
      description:
        "По программе «IT ипотека» от Стройград можно приобрести строящееся жилье по субсидированной ставке 2,99% на срок кредита до 30 лет.",
      image: "/img/makaka.jpg",
      link: "",
    },
    {
      id: 2,
      title: "Ипотека \n для IT-специалистов",
      description:
        "По программе «IT ипотека» от Стройград можно приобрести строящееся жилье по субсидированной ставке 2,99% на срок кредита до 30 лет.",
      image: "",
      link: "",
    },
    {
      id: 3,
      title: "Ипотека \n для IT-специалистов",
      description:
        "По программе «IT ипотека» от Стройград можно приобрести строящееся жилье по субсидированной ставке 2,99% на срок кредита до 30 лет.",
      image: "",
      link: "",
    },
    {
      id: 4,
      title: "Ипотека \n для IT-специалистов",
      description:
        "По программе «IT ипотека» от Стройград можно приобрести строящееся жилье по субсидированной ставке 2,99% на срок кредита до 30 лет.",
      image: "",
      link: "",
    },
  ];
  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="flex gap-[25rem]">
          <Swiper
            spaceBetween={25}
            slidesPerView="auto"
            allowTouchMove
            className="overflow-visible"
          >
            {data.map((item) => (
              <SwiperSlide className="max-w-[535rem]" key={item.id}>
                <OfferCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[60rem] flex">
          <LinkUnderline
            text="Все акции и скидки"
            link="/news"
            className="ml-auto inline-block"
          />
        </div>
      </div>
    </section>
  );
};
