"use client";
import RotatingText from "rotating-text";
import classNames from "classnames";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState } from "react";
import { close } from "../store/slices/isMenuOpen";
import { RotateLink } from "./ui";

export const Navigation = () => {
  const links = [
    { id: 1, title: "О компании", link: "/about" },
    { id: 2, title: "Руководство", link: "/team" },
    { id: 3, title: "Все проекты", link: "/projects" },
    { id: 4, title: "Новости", link: "/news" },
  ];

  const dispatch = useDispatch();
  const pathname = usePathname();
  const isOpen = useSelector((state: RootState) => state.isMenuOpen.value);

  useEffect(() => {
    dispatch(close());
  }, [pathname]);

  const variants: Variants = {
    close: {
      top: "-100vh",
      transition: { ease: "easeInOut", duration: 0.2, type: "tween" },
    },
    open: {
      top: "0",
      transition: { ease: "easeInOut", duration: 0.2, type: "tween" },
    },
  };

  return (
    <motion.nav
      variants={variants}
      animate={isOpen ? "open" : "close"}
      initial="close"
      className={classNames(
        "main-menu absolute left-0  z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white "
      )}
    >
      <div className="container">
        <div className="mt-[96rem] flex items-center justify-between pr-[123rem]">
          <div className=" flex flex-col gap-8 pl-[280rem] transition-colors ease-in-out ">
            {links.map((item) => (
              <div
                key={item.id}
                className="nav-link text-[128rem] leading-[120%] tracking-[-5rem] transition-colors"
              >
                <Link href={item.link}>
                  <p>{item.title}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex w-[280rem] flex-col">
            <div className="flex flex-col gap-[10rem]">
              <RotateLink text="Вакансии" link="/vacancy" />
              <RotateLink text="Контакты" link="/contacts" />
            </div>

            <p className="mt-[50rem] text-[24rem] text-gray ">
              Саратов / Краснодар / Волгодонск / Сочи / Москва / Зеленоград
            </p>
          </div>
        </div>

        <div className="mt-[128rem] flex  items-center justify-between pl-[280rem] pr-[123rem]">
          <div className="flex w-[900rem] gap-[48rem]">
            <RotateLink
              text="info@stroygrad.ru"
              link="mailto:info@stroygrad.ru"
              textSize={27}
            />

            <RotateLink
              text="+7 (8652)-23-90-33"
              link="tel:+7 (8652)-23-90-33"
              textSize={27}
            />
          </div>
          <div className="w-[280rem]">
            <p>
              Работаем каждый день <br className="sm:hidden" />
              09:00 - 19:00
            </p>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
