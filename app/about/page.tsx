"use client";

import { useLayoutEffect } from "react";
import { Breadcrumbs, TextBlock, Title } from "../components/ui";
import {
  BranchCompany,
  CompanyFeatures,
  Directors,
  MapProjects,
  OurMission,
} from "@/app/components/sections";

export default function About() {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          {/* <Breadcrumbs className="mt-[45rem]" /> */}
          <Title tag="h1s" className="mt-[190rem]">
            Строительная <br /> компания <br /> Стройград
          </Title>
        </div>
      </section>

      <TextBlock
        title="О нас"
        text="Группа компаний «Стройград» начала свою историю в 2006 году со строительства многоквартирного жилого дома в г. Ставрополь. Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса. На сегодняшний день география деятельности группы компаний «Стройград» охватывает две чрезвычайно важные для экономики страны области — Краснодарский и Ставропольский края."
        className="mt-[150rem]"
        size="sm"
      />
      <hr className="mt-[150rem] text-grayBorder" />
      <OurMission className="mt-[150rem]" />
      <Directors className="mt-[250rem]" />
      <hr className="mt-[150rem] text-grayBorder" />
      <CompanyFeatures className="mt-[150rem]" />
      <MapProjects className="mt-[250rem]" />
      <BranchCompany className="mt-[250rem]" />
      <div className="h-[250rem]"></div>
    </>
  );
}
