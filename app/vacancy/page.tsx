"use client";

import { useLayoutEffect } from "react";
import { Breadcrumbs, Title } from "../components/ui";
import { teamData } from "../db";
import { TeamCard } from "../components";
import {
  ActualVacancy,
  TalentSearch,
  TeamReviews,
} from "../components/sections";
import { Cooperate } from "../components/forms";

export default function TeamPage() {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <section className="mt-[46rem]">
        <div className="container">
          <Breadcrumbs links={undefined} />
          <Title tag="h1s" className="mt-[360rem]">
            Свободные <br />
            вакансии
          </Title>
          <div className="mt-[235rem] max-w-[560rem] ml-auto">
            <p className="text-[20rem] leading-[140%] text-gray">
              Наша сила — в многообразии мнений и компетенциий. Мы ставим
              человека выше процессов!
            </p>
          </div>
        </div>
      </section>

      <ActualVacancy className="mt-[410rem]" />
      <TeamReviews className="mt-[410rem]" />
      <Cooperate className="mt-[470rem] mb-[465rem]" />
    </>
  );
}
