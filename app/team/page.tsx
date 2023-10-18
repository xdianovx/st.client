"use client";

import { useLayoutEffect } from "react";
import { Breadcrumbs, Title } from "../components/ui";
import { teamData } from "../db";
import { TeamCard } from "../components";
import { TalentSearch } from "../components/sections";

export default function TeamPage() {
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
      <section className="mt-[46rem]">
        <div className="container">
          <Breadcrumbs links={undefined} />
          <Title tag="h1s" className="mt-[170rem]">
            Руководство
          </Title>
          <div className="mt-[250rem] max-w-[560rem] ml-auto">
            <p className="text-[20rem] leading-[140%] text-gray">
              Благодаря большому опыту и мастерству руководящего состава все
              компании работают как слаженная команда профессионалов, ведомая
              единой целью — удовлетворение интересов любимого потребителя.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[238rem]">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-[40rem] gap-y-[120rem] grid-flow-dense">
            {teamData.map((item) => (
              <TeamCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>

      <TalentSearch className="mt-[250rem]" />
    </>
  );
}
