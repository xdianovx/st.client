"use client";
import { useLayoutEffect, useRef } from "react";
import { ButtonSquare, NumItem, Suptitle, Title } from "../../ui";
import cn from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface iOurMission {
  className: string;
}

export const OurMission = ({ className }: iOurMission) => {
  const nums = [
    { id: 1, title: "Опыт компании", num: "10", span: "лет" },
    { id: 2, title: "Во время сданных проектов", num: "4512", span: "" },
    { id: 3, title: "Построенного жилья", num: "16", span: "" },
    { id: 4, title: "Заселенных квартир", num: "20203", span: "м²" },
  ];

  const btnPin = useRef<HTMLDivElement | any>();
  const sectionPin = useRef<HTMLElement | any>();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionPin.current,
          scrub: 1.2,
          // pin: btnPin.current,
          start: "top +=50%",
          end: "bottom +=50%",
        },
      });

      tl.to(btnPin.current, {
        bottom: "220rem",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionPin} className={cn(className)}>
      <div className="container">
        <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
          <div className="relative">
            <Suptitle text="Миссия" />
            <div ref={btnPin} className="pinsecbtn absolute mt-[56rem]">
              <ButtonSquare text="Подробнее" link="/" />
            </div>
          </div>

          <div>
            <Title tag="h2">
              Мы стремимся стать одним из крупнейших строительно-инвестиционных
              холдингов федерального и международного уровня.
            </Title>

            <div className="mt-[70rem] grid grid-cols-2 gap-[140rem]">
              <p>
                Все это время «Стройград» стремительно развивался, выходил на
                новые рынки, наращивал собственную производственную базу,
                осваивал новые направления бизнеса.
              </p>
              <p>
                Все это время «Стройград» стремительно развивался, выходил на
                новые рынки, наращивал собственную производственную базу,
                осваивал новые направления бизнеса.
              </p>
            </div>

            <div className="mt-[90rem] grid grid-cols-2 gap-[140rem]">
              {nums.map((item) => (
                <NumItem data={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
