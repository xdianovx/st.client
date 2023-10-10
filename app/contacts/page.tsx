"use client";

import { useLayoutEffect } from "react";
import { Breadcrumbs, Title } from "../components/ui";
import PinSVG from "./pin.svg";

export default function VacancyPage() {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <section className="">
        <div className="container">
          <div className="mt-[328rem]">
            <p>Главный офис</p>
            <div className="flex mt-[45rem] items-end">
              <Title tag="h1s">Ставрополь</Title>
              <PinSVG className="ml-auto mb-[10rem]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
