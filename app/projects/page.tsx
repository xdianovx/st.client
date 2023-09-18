"use client";

import Image from "next/image";
import {
  Breadcrumbs,
  Dropdown,
  LinkUnderline,
  ProjectCard,
  Title,
} from "../components/ui";
import { useLayoutEffect } from "react";
import { projects } from "../db";

export default function ProjectsPage() {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const data = {
    title: "Дворянская усадьба",
    description:
      "«Семейный квартал» — это экологичный проект рядом с Дубковским и Подушкинским лесами. Он сочетает близость к природным комплексам, престижный статус западного направления и возможность удобно добраться до столицы.",
    city: "г. Ростов-на-Дону",
    openDate: "Заселение до 31.03.2023",
    price: "от 3,3 млн. руб.",
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="mt-[46rem]">
            <Breadcrumbs links={undefined} />

            <Title tag="h1" className="mt-[151rem] uppercase">
              Наши <br /> проекты
            </Title>
          </div>
        </div>
      </section>

      <section className="mt-[160rem]">
        <div className="container">
          <div className="flex items-start gap-[140rem]">
            <Dropdown title="Статус" />
            <Dropdown title="Город" />
            <Dropdown title="Стоимость" />
          </div>
          <p className="mt-[30rem] text-gray">Найдено проектов: 15</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card mt-[84rem]">
            <div className="relative h-[810rem]">
              <Image src="/img/prj-main.jpg" fill alt="Проект" />
            </div>

            <div className="mt-[40rem] flex items-start">
              <h2 className="w-[420rem] text-[32rem] leading-[120%]">
                {data.title}
              </h2>
              <p className="w-[560rem] leading-[140%] text-gray">
                {data.description}
              </p>
              <div className="flex w-[420rem] flex-col pl-[140rem]">
                <p>{data.city}</p>
                <p>{data.openDate}</p>
              </div>
              <LinkUnderline text={data.price} link="/" className="ml-auto" />
            </div>
          </div>
        </div>
      </section>

      <hr className="mt-[190rem] text-grayBorder" />

      <section className="mt-[100rem]">
        {projects.map((item) => (
          <div key={item.id} className="">
            <ProjectCard data={item} />
            <hr className="my-[100rem] text-grayBorder" />
          </div>
        ))}
      </section>
    </>
  );
}
