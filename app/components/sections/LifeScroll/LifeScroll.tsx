"use client";

import cn from "classnames";
import img1 from "./7.jpg";
import img2 from "./4.jpg";
import img3 from "./5.jpg";
import img4 from "./6.jpg";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export interface iLifeScroll {
  className: string;
}

export const LifeScroll = ({ className }: iLifeScroll) => {
  const data = [
    {
      id: 1,
      image: img1,
      title:
        "Какой-то дополнительный текст, если возникнет такая необходимость. Описание фотографии.",
      speed: "0.5",
    },
    {
      id: 2,
      image: img2,
      title: "",
      speed: "0.3",
    },
    {
      id: 3,
      image: img3,
      title:
        "Какой-то дополнительный текст, если возникнет такая необходимость. Описание фотографии.",
      speed: "0.2",
    },
    {
      id: 4,
      image: img4,
      title: "",
      speed: "0.5",
    },
  ];
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const endRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          endTrigger: endRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={cn(className)}>
      <div className="container h-screen" ref={titleRef}>
        <h2 className="flex  h-screen items-center justify-center text-center text-[256rem] font-light uppercase leading-[100%]">
          Жизнь в стройград
        </h2>
      </div>

      <div className="container" id="wrapper">
        <div className="flex flex-col" ref={contentRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="scroll-life-image"
              data-scroll
              data-scroll-speed={item.speed}
            >
              <div className="scroll-life-image-img relative">
                <Image src={item.image} alt="asd" fill={true} />
              </div>
              {item.title && (
                <div className="mt-[32rem] w-[420rem]">
                  <p>{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div ref={endRef} className="mt-[300rem]"></div>
      </div>
    </section>
  );
};
