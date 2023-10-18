"use client";

import { useLayoutEffect } from "react";
import { Breadcrumbs, ContactsListItem, Title } from "../components/ui";
import PinSVG from "./pin.svg";
import { contactPageData } from "../db";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Cooperate } from "../components/forms";
import { FillialCard } from "../components";

export default function VacancyPage() {
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
          <div className="mt-[328rem]">
            <p>Главный офис</p>
            <div className="flex mt-[45rem] items-end">
              <Title tag="h1s">Ставрополь</Title>
              <PinSVG className="ml-auto mb-[10rem]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[155rem]">
        <div className="border-b border-grayBorder">
          <div className="border-t border-grayBorder py-[96rem]">
            <div className="container">
              <div className="grid gap-[140rem] grid-cols-[420rem_420rem_1fr]">
                <h3 className="text-[40rem]">Отдел продаж</h3>
                <ContactsListItem
                  label="Адрес:"
                  list={contactPageData.mainOffice.sales_department.address}
                />
                <ContactsListItem
                  label="Телефон:"
                  list={contactPageData.mainOffice.sales_department.phone}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-grayBorder py-[96rem]">
            <div className="container">
              <div className="grid gap-[140rem] grid-cols-[420rem_420rem_1fr]">
                <h3 className="text-[40rem]">Представительство</h3>
                <ContactsListItem
                  label="Адрес:"
                  list={contactPageData.mainOffice.representative.address}
                />
                <ContactsListItem
                  label="Телефон:"
                  list={contactPageData.mainOffice.representative.phone}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[242rem]">
        <div className="flex flex-col gap-[207rem]">
          {contactPageData.offices.map((item) => (
            <FillialCard data={item} key={item.id} />
          ))}
        </div>
      </section>

      <Cooperate className="mt-[486rem] mb-[220rem]" />
    </>
  );
}
