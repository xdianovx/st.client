"use client";

import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsCard } from "../../ui";

export interface iLastArticles {
  className?: string;
}

export const LastArticles = ({ className }: iLastArticles) => {
  const data = [
    {
      id: 1,
      title: "Встречайте новый проект — \n «Подольские Кварталы»",
      description:
        "«Стройград» продолжает участвовать в комплексном развитии Мариуполя и приступил к строительству первой очереди жилого комплекса «Подольские кварталы» с собственной инфраструктурой.",
      date: "23 мая 2023",
      link: "/1",
    },
    {
      id: 2,
      title:
        "Мебель в подарок - новый \n уровень комфорта при покупке \n недвижимости.",
      description:
        "Хотим сделать ваш переезд еще более комфортным — и берем на себя заботу об обустройстве вашей квартиры.",
      date: "23 мая 2023",
      link: "/1",
    },
    {
      id: 3,
      title: "Новый проект — \n «Квартал Марьино»",
      description:
        "Жилой комплекс расположен в Новой Москве, рядом с благоустроенным парком Марьино.",
      date: "23 мая 2023",
      link: "/1",
    },
    {
      id: 4,
      title:
        "НИУ ВШЭ и «Стройград» подготовят специалистов анализа данных в девелопменте",
      description:
        "«Стройград» профинансирует обучение 30 лучших абитуриентов, поступивших на программу.",
      date: "23 мая 2023",
      link: "/1",
    },
    {
      id: 5,
      title:
        "Атомайз и «Стройград» впервые в России запустили «цифровые квадратные метры»",
      description:
        "«Цифровые метры» позволят квалифицированным инвесторам участвовать в динамике стоимости недвижимости с суммой от 50 тыс. рублей и выше.",
      date: "23 мая 2023",
      link: "/1",
    },
    {
      id: 6,
      title:
        "Двухуровневый велопаркинг со станцией ремонта открылся в ЖК «Семейный Увартал”",
      description:
        "Конструкцию разместили во дворе корпусов второй очереди строительства. Новое место для хранения рассчитано на 48 велосипедов.",
      date: "23 мая 2023",
      link: "/1",
    },
  ];

  return (
    <section className={cn(className, "")}>
      <div className="container">
        <Swiper
          slidesPerView="auto"
          className="mt-[70rem] overflow-visible"
          spaceBetween={20}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="max-w-[828rem]">
              <NewsCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
