"use client";

import { useLayoutEffect } from "react";
import { SubscribeForm } from "../components/sections";
import {
  Breadcrumbs,
  Dropdown,
  LinkUnderline,
  NewsCard,
  Title,
} from "../components/ui";

export default function NewsPage() {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
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
    <>
      <section>
        <div className="container">
          {/* <Breadcrumbs links={undefined} className="mt-[46rem]" /> */}
          <div className="mt-[190rem] flex items-start">
            <Title tag={"h1s"}>Новости</Title>
            <LinkUnderline text={"Акции"} link={"/stock"} className="ml-auto" />
          </div>
        </div>
      </section>

      <section className="mt-[150rem]">
        <div className="container">
          <div className="flex justify-between">
            <Dropdown title={"Проект"} />
            <Dropdown title={"Город"} />
            <Dropdown title={"Год"} />
          </div>
          <div className="mt-[30rem] text-gray">Найдено: 15</div>

          <div className="mt-[80rem] grid grid-cols-2 gap-[20rem]">
            {data.map((item) => (
              <NewsCard data={item} key={item.id} />
            ))}
          </div>

          <p className="mt-[150rem]">Бегущая строка</p>
          <div className="mt-[80rem] grid grid-cols-2 gap-[20rem]">
            {data.map((item) => (
              <NewsCard data={item} key={item.id} />
            ))}
          </div>

          <div className="mt-[60rem] flex justify-center">
            <div className="flex cursor-pointer gap-[16rem] text-gray">
              <p>Еще новости</p>
              <svg width="20" height="19" viewBox="0 0 20 19" stroke="#6F6F6F">
                <line
                  x1="0.078125"
                  y1="9.51377"
                  x2="19.0781"
                  y2="9.51377"
                  strokeWidth="0.956837"
                />
                <path d="M9.57812 19L9.57813 0" strokeWidth="0.956837" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <SubscribeForm className="mt-[248rem]" />

      <div className="h-[250rem]"></div>
    </>
  );
}
