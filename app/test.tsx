"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const box = useRef(null);
  const [isOPen, setIsOPen] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context((self) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box.current,
          scrub: true,
          start: "top +=50%",
          end: "+=500px",
          markers: true,
        },
      });
      tl.to(box.current, { background: "#000" });
      console.log(self, "asd");
    }, box);

    return () => ctx.revert();
  }, [isOPen]);

  return (
    <main>
      <div className="container mx-auto">
        <div className="h-screen bg-slate-400">1</div>

        <div className="">
          <button
            onClick={() => {
              setIsOPen(!isOPen);
              ScrollTrigger.refresh();
            }}
          >
            Открыть
          </button>

          {isOPen && <div className="bg-blue-800 h-14"></div>}
        </div>
        <div className="h-screen" ref={box}>
          2
        </div>
        <div className="h-screen bg-red-400">3</div>
      </div>
    </main>
  );
}
