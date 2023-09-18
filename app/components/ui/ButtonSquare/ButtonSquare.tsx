"use client";
import cn from "classnames";
import Link from "next/link";
import { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMousePosition } from "./utils/useMousePosition";
import { getDistance } from "./utils/getDistance";

export interface iButtonSquare {
  className?: string;
  text: string;
  link: string;
}

/* eslint-disable */
export const ButtonSquare = forwardRef<HTMLAnchorElement, iButtonSquare>(
  ({ className, text, link }, ref) => {
    const [isHover, setHover] = useState<boolean>(false);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const fillAnimation = useAnimation();
    const { mouseX, mouseY } = useMousePosition();
    useEffect(() => {
      let x = 0;
      let y = 0;

      if (ref || buttonRef) {
        const node = ref
          ? (ref.current as HTMLAnchorElement)
          : (buttonRef.current as HTMLAnchorElement);

        const rect = node.getBoundingClientRect();
        const distanceToTrigger = rect.width * 2;
        const distanceMouseButton = getDistance(
          mouseX + window.scrollX,
          mouseY + window.scrollY,
          rect.left + rect.width / 2,
          rect.top + rect.height / 2
        );

        if (window.innerWidth / 4 > mouseX) {
          x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2;
          y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2;
          node.style.transform = `translate3d(${x / 5}px, ${y / 30}px, 0)`;
          textRef.current.style.transform = `translate3d(${x / 2}px, ${
            y / 80
          }px, 0)`;
        } else {
          node.style.transform = `translate3d(0, 0, 0)`;
          textRef.current.style.transform = `translate3d(0, 0, 0)`;
        }

        const handleMouseEnter = () => {
          setHover(true);
          fillAnimation.start({
            y: ["50%", "-90%"],
            transition: { ease: "linear", duration: 0.5 },
          });
        };
        const handleMouseLeave = () => {
          setHover(false);
          fillAnimation.start({
            y: "-150%",
            transition: { ease: "linear", duration: 0.5 },
          });
        };
        node.addEventListener("mouseenter", handleMouseEnter);
        node.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          node.removeEventListener("mouseenter", handleMouseEnter);
          node.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, [mouseX, mouseY]);

    return (
      <Link
        onClick={() => console.log(buttonRef.current)}
        ref={ref ? ref : buttonRef}
        href={link}
        className={cn(
          className,
          " absolute z-50 mt-[56rem] inline-flex h-[140rem] w-[140rem] items-center justify-center overflow-hidden rounded-[4rem] border border-grayBorder transition-all duration-300 ease-out hover:border-black hover:text-white"
        )}
      >
        <span
          ref={textRef}
          className="absolute z-50 inline-flex transition-all"
        >
          {text}
        </span>

        <motion.div
          animate={fillAnimation}
          className="transform:translate-3d(0, 400%, 0) absolute z-40 mt-[350%] h-[250%] w-[250%] rounded-full bg-black"
        ></motion.div>
      </Link>
    );
  }
);

/* eslint-disable */
