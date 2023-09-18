"use client";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterContactLink } from "./ui";
import { useLayoutEffect, useRef } from "react";
import LogoSVG from "./logo.svg";
// import SLogo from "./1960.svg";

export const Footer = () => {
  const refMarq = useRef(null);
  useLayoutEffect(() => {
    const marquee = document.querySelectorAll(".fmarq");

    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const uncover = gsap.timeline({ paused: true });

      // let end = "+=970rem";
      // gsap.set(".footer-wrap", { yPercent: -100 });
      // uncover.to(".footer-wrap", { yPercent: 0, ease: "none" });

      // ScrollTrigger.create({
      //   trigger: ".footer-start-anim",
      //   start: "bottom bottom",
      //   end: end,
      //   // markers: true,
      //   animation: uncover,
      //   scrub: true,
      // });

      marquee.forEach((el) => {
        let rate = 100;
        let distance = el.clientWidth;
        let style = window.getComputedStyle(el);
        let marginRight = parseInt(style.marginRight) || 0;
        let totalDistance = distance + marginRight;
        let time = totalDistance / rate;
        let container = el.parentElement;

        gsap.to(container, time, {
          repeat: -1,
          x: "-" + totalDistance,
          ease: "Ease4",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="footer-start-anim"></div>
      <footer className="relative h-[970rem] overflow-hidden bg-black text-white">
        <div className="absolute z-10 h-[199rem] w-full overflow-hidden">
          <div className="h-[200rem] w-full overflow-hidden shadow"></div>
        </div>
        <div className="footer-wrap container h-[970rem]">
          <div className="-mt-[50rem]">
            <div className="flex gap-[100rem]" ref={refMarq}>
              <div className="fmarq flex items-center gap-[100rem]">
                <div className="maqr marquee__item-gray flex gap-[60rem] text-[295rem] font-medium uppercase leading-none text-black">
                  <p>Мы</p>
                  <p>строим</p>
                  <p>будущее</p>
                </div>
                <LogoSVG />
              </div>
              <div className="fmarq flex items-center gap-[100rem]">
                <div className="maqr marquee__item-gray flex gap-[60rem] text-[295rem] font-medium uppercase leading-none text-black">
                  <p>Мы</p>
                  <p>строим</p>
                  <p>будущее</p>
                </div>
                <LogoSVG />
              </div>
              <div className="fmarq flex items-center gap-[100rem]">
                <div className="maqr marquee__item-gray flex gap-[60rem] text-[295rem] font-medium uppercase leading-none text-black">
                  <p>Мы</p>
                  <p>строим</p>
                  <p>будущее</p>
                </div>
                <LogoSVG />
              </div>
              <div className="fmarq flex items-center gap-[100rem]">
                <div className="maqr marquee__item-gray flex gap-[60rem] text-[295rem] font-medium uppercase leading-none text-black">
                  <p>Мы</p>
                  <p>строим</p>
                  <p>будущее</p>
                </div>
                <LogoSVG />
              </div>
              <div className="fmarq flex items-center gap-[100rem]">
                <div className="maqr marquee__item-gray flex gap-[60rem] text-[295rem] font-medium uppercase leading-none text-black">
                  <p>Мы</p>
                  <p>строим</p>
                  <p>будущее</p>
                </div>
                <LogoSVG />
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-[140rem] pl-[280rem] pt-[180rem]">
            <p className="text-[96rem] font-light leading-[100%]">
              Нужна помощь <br /> в подборе?
            </p>

            <Link
              href="/"
              className="hover: flex h-[163rem] w-[280rem] items-center justify-center rounded-[4rem] border border-white text-[48rem] leading-[100%] transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              Да!
            </Link>
          </div>

          <div className="mt-[230rem] flex gap-[140rem] pl-[280rem]">
            <FooterContactLink
              title="для клиентов:"
              link="tel:+78652239033"
              text="+7 (8652)-23-90-33"
              className="w-[280rem]"
            />

            <FooterContactLink
              title="почта:"
              link="mailto:info@stroygrad.ru"
              text="info@stroygrad.ru"
            />
            {/* <div className="ml-auto mt-auto flex items-center gap-[10rem]">
              <p className="text-[16rem] text-gray">сайт разработан в</p>
              <SLogo />
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};
