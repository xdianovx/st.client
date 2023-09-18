"use client";

import {
  LastArticles,
  MarqueeLight,
  SubscribeForm,
} from "@/app/components/sections";
import s from "./page.module.scss";
import {
  Breadcrumbs,
  ConstructionProgressCard,
  LinkUnderline,
  ListItem,
  LoadMoreBtn,
  ProjectFeatureCard,
  Suptitle,
  Text,
  Title,
} from "@/app/components/ui";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
import { useLayoutEffect } from "react";
import { project as data } from "@/app/db";
import { Cooperate } from "@/app/components/forms";

export default function ProjectsPage() {
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
          <div className="mt-[46rem]">
            <Breadcrumbs links={undefined} />

            <Title tag="h1s" className="mt-[190rem] uppercase">
              {data.title}
            </Title>
          </div>
        </div>
      </section>
      <section className="mt-[70rem]">
        <div className="relative h-[1038rem]">
          <Image src={data.cover} fill alt="Семейный квартал" />
        </div>
      </section>
      <section className="mt-[70rem]">
        <div className="container">
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
            <Suptitle text="О проекте" />

            <div>
              <p className="text-[26rem]">{data.description}</p>

              <div className="mt-[74rem] grid grid-cols-2">
                {/* <Link
                  href={data.projectLink}
                  className="w-[420rem] text-[20rem] leading-[100%] underline underline-offset-[4rem]"
                >
                  {data.projectlinkTitle}
                </Link> */}

                <div className="">
                  <LinkUnderline
                    size="md"
                    text={data.projectlinkTitle}
                    link={data.projectLink}
                  />
                </div>

                <Link
                  href={data.presentationLink}
                  className="flex w-[420rem] items-center gap-[10rem] text-[20rem] leading-[100%]"
                >
                  <p>презентация проекта</p>
                  <svg width="12" height="13" viewBox="0 0 12 13">
                    <path
                      d="M5.90426 9.15238C6.09952 9.34764 6.4161 9.34764 6.61137 9.15238L9.79335 5.9704C9.98861 5.77514 9.98861 5.45856 9.79335 5.26329C9.59808 5.06803 9.2815 5.06803 9.08624 5.26329L6.25781 8.09172L3.42939 5.26329C3.23412 5.06803 2.91754 5.06803 2.72228 5.26329C2.52702 5.45856 2.52702 5.77514 2.72228 5.9704L5.90426 9.15238ZM5.75781 0.798828L5.75781 8.79883H6.75781V0.798828H5.75781Z"
                      fill="black"
                    />
                    <line
                      x1="0.757812"
                      y1="12.2988"
                      x2="11.7578"
                      y2="12.2988"
                      stroke="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <hr className="mt-[100rem] text-grayBorder" />

          <div className="mt-[74rem] grid grid-cols-[420rem_420rem_420rem] gap-[140rem]">
            <Suptitle text="Информация" />

            <div className="flex flex-col gap-[45rem]">
              <ListItem
                label="Адрес"
                value="г.Ростов-на-Дону, Ворошиловский 154"
              />
              <ListItem
                label="Срок сдачи"
                value="Заселение в 3 квартале 2024 года"
              />
              <ListItem label="Этажность" value="14 этажей" />
            </div>

            <div className="flex flex-col gap-[45rem]">
              <ListItem label="Квартиры" value="31.6 - 156.7 м²" />
              <ListItem label="Отделка" value="Нет, Чистовая" />
              <ListItem label="Корпуса" value="2 корпуса" />
            </div>
          </div>
        </div>
      </section>

      {data.marquee_text && (
        <MarqueeLight data={data.marquee_text} className="mt-[233rem]" />
      )}

      <section className="mt-[231rem]">
        <div className="container">
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
            <Suptitle text="Функциональные планировки" />
            <div>
              <p className="text-[44rem] font-light leading-[120%]">
                Планировочные решения квартир в жилом комплексе «Семейный
                Квартал» наглядно демонстрируют принцип функциональности.{" "}
              </p>

              <p className="mt-[70rem] w-[560rem] text-gray">
                Для каждой квартиры предлагаются несколько вариантов
                обустройства и даны рекомендации по расстановке мебели.
                Функциональность - это польза, которую приносит метр площади
                квартиры.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[100rem]">
          <div className="border-b border-grayBorder pb-[30rem]">
            <div className="container">
              <div className="grid grid-cols-[140rem_140rem_140rem_140rem] gap-[140rem] text-gray">
                <p>Квартира</p>
                <p>Площадь</p>
                <p>В ипотеку</p>
                <p>Стоимость</p>
              </div>
            </div>
          </div>

          {/* List */}

          <div className="[&:hover>.offop]:opacity-40">
            {data.layouts.map((item) => (
              <div
                className={classNames(
                  "offop border-b border-grayBorder transition-opacity duration-300 ease-in-out hover:!opacity-100",
                  s.plans
                )}
                key={item.id}
              >
                <div className="container">
                  <div className="relative flex items-center gap-[140rem] py-[40rem]">
                    <div className="w-[140rem]">{item.flatType}</div>
                    <div className="w-[140rem]">20.85 м2</div>
                    <div className="w-[140rem]">от 15 346 ₽/мес.</div>
                    <div className="w-[140rem]">от 3 657 578 ₽</div>
                    <div className="ml-auto">
                      <LinkUnderline text="Оставить заявку" link="/" />
                    </div>
                    {item.image && (
                      <div
                        className={classNames(
                          "absolute right-[260rem] h-[250rem] w-[254rem]",
                          s.item
                        )}
                      >
                        <Image
                          src={item.image}
                          className="object-contain"
                          fill
                          alt={""}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="container">
              <LoadMoreBtn
                title={"Ещё варианты"}
                className="ml-[560rem] mt-[60rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-[263rem]">
        <div className="container">
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
            <Suptitle text={"Удобства"} />
            <p className="text-[36rem] font-light">
              Если для вас имеет большое значение расположение квартиры, то
              считайте, что вам повезло. ЖК Семейный Квартал имеет выгодное
              расположение. Он находится в зеленом окружении заповедной части
              города.
            </p>
          </div>

          <Swiper
            className="mt-[150rem] overflow-visible"
            spaceBetween="47rem"
            slidesPerView="auto"
          >
            {data.features.map((item) => (
              <SwiperSlide className="max-w-[513rem]" key={item.id}>
                <ProjectFeatureCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Инфраструктура */}
      <section className="mt-[250rem]">
        <div className="container">
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
            <Suptitle text="Инфраструктура" />
            <p className="text-[36rem] font-light">
              {data.infrastructure.text}
            </p>
          </div>
        </div>

        <div className="mt-[150rem]">
          <div className="h-[920rem] bg-grayLight">
            <YMaps>
              <Map
                instanceRef={(ref) => {
                  ref && ref.behaviors.disable("scrollZoom");
                }}
                defaultOptions={{}}
                options={{}}
                style={{
                  height: "100%",
                  filter: "grayscale(1)",
                }}
                width="100%"
                defaultState={{
                  center: data.coords,
                  zoom: 12,
                }}
              >
                <Placemark geometry={data.coords} />
              </Map>
            </YMaps>
          </div>
        </div>
      </section>
      <section></section>
      {/* Програмы ипотеки */}
      {/* <section className="mt-[150rem]">
        <div className="container">
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
            <Suptitle text="Программы ипотеки" />
            <p className="text-[36rem] font-light">{data.credit.text}</p>
          </div>
        </div>

        <div className="mt-[150rem]">
          СПИСОК КРЕДИТОВ
          <div className="container">
            <LoadMoreBtn title="Ещё предложения" className="ml-[560rem]" />
          </div>
        </div>
      </section> */}

      {/* Визуализации */}
      <section className="mt-[250rem]">
        <div className="container">
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
            <Suptitle text="Визуализации" />
            <p className="text-[36rem] font-light">{data.visual.text}</p>
          </div>
        </div>

        <div className="mt-[150rem]">
          {data.visual.images.map((item) => (
            <div key={item.id} className="mb-[30rem]">
              <div className="relative min-h-[1056rem]">
                <Image src={item.image} fill alt="Визуализация проекта" />
              </div>
              {item.description && (
                <div className="container">
                  <div className="mb-[160rem] ml-auto mr-[140rem] mt-[40rem] w-[560rem]">
                    <p>{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Ход строительства */}
      <section className="mt-[250rem]">
        <div className="container">
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
            <Suptitle text="Ход строительства" />
            <p className="text-[35rem] font-light">
              {data.constructionProgress.text}
            </p>
          </div>
        </div>

        <hr className="mt-[150rem] text-grayBorder" />

        <div className="container">
          <Swiper
            className="mt-[26rem] overflow-visible"
            spaceBetween="47rem"
            slidesPerView="auto"
          >
            {data.constructionProgress.cards.map((item) => (
              <SwiperSlide key={item.id} className="max-w-[513rem]">
                <ConstructionProgressCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Дургие новости */}
      <section className="mt-[250rem]">
        <div className="container">
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
            <Suptitle text="Новости" />
            <p className="text-[35rem] font-light">
              Следите за новостями компании ГК Стройград
            </p>
          </div>
        </div>
      </section>
      <LastArticles className="mt-[150rem]" />
      {/* Документация */}
      <section className="mt-[263rem]">
        <div className="container">
          <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
            <Suptitle text="Документация" />
            <p className="text-[35rem] font-light">{data.documents.text}</p>
          </div>
        </div>

        <div className="mt-[150rem] border-b border-grayBorder pb-[25rem]">
          <div className="container">
            <div className="flex items-center gap-[140rem] text-gray ">
              <div className="w-[840rem]">Название</div>
              <div className="w-[140rem]">Дата</div>
              <div className="w-[140rem]">Файл</div>
              <div className="ml-auto"></div>
            </div>
          </div>
        </div>

        {data.documents.documents.map((item) => (
          <div key={item.id} className="border-b border-grayBorder py-[26rem]">
            <div className="container">
              <div className="flex items-center gap-[140rem]">
                <div className="w-[840rem] text-[20rem] leading-[100%]">
                  {item.title}
                </div>
                <div className="w-[140rem]">{item.date}</div>
                <div className="w-[140rem]">{item.fileType}</div>
                <div className="ml-auto">
                  <Link
                    href={item.link}
                    className="underline underline-offset-[4rem]"
                  >
                    Скачать
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="container">
          <LoadMoreBtn
            title={"Ещё документы"}
            className="ml-[980rem] mt-[60rem]"
          />
        </div>
      </section>
      {/* Форма */}

      <Cooperate className="mt-[250rem]" />
      {/* spacer */}
      <div className="mt-[200rem]"></div>
    </>
  );
}
