"use client";
import cn from "classnames";
import { motion, useAnimation, Variants } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store/store";
import { close, open } from "@/app/store/slices/isMenuOpen";
import { useEffect } from "react";

export const Burger = ({ className }: any) => {
  const isOpen = useSelector((state: RootState) => state.isMenuOpen.value);
  const dispatch = useDispatch();

  useEffect();

  const openControlTop = useAnimation();
  const openControlBottom = useAnimation();

  const variantsTop: Variants = {
    hover: {
      rotate: [0, 0, 0, 90, 90],
      y: ["0rem", "0rem", "3rem", "3rem", "3rem"],
      x: ["0rem", "0rem", "0rem", "0rem", "-4rem"],
    },
    initial: {
      rotate: 0,
      y: "0rem",
      x: "0rem",
    },
    open: {
      rotate: 45,
      x: "0rem",
      y: "3rem",
    },
    close: {
      rotate: 0,
    },
  };

  const variantsBottomHover: Variants = {
    hover: {
      rotate: [0, 0, 0, 90, 90],
      y: ["0rem", "0rem", "-3rem", "-3rem", "-3rem"],
      x: ["0rem", "0rem", "0rem", "0rem", "4rem"],
      width: ["30rem", "50rem", "50rem", "50rem", "50rem"],
    },
    initial: {
      rotate: 0,
      y: "0rem",
      x: "0rem",
      width: "30rem",
    },
    open: {
      rotate: -45,
      x: "0rem",
      y: "-2rem",
    },
    close: {
      rotate: 0,
    },
  };

  const toggleBurger = () => {
    if (isOpen) {
      dispatch(close());
      openControlTop.start("hover");
      openControlBottom.start("hover");
    } else {
      dispatch(open());
      openControlTop.start("open");
      openControlBottom.start("open");
    }
  };

  const hoverOn = () => {
    if (!isOpen) {
      openControlTop.start("hover");
      openControlBottom.start("hover");
    }
  };

  const hoverOff = () => {
    if (!isOpen) {
      openControlTop.start("initial");
      openControlBottom.start("initial");
    }
  };

  return (
    <motion.div
      className={cn("relative h-[50rem] w-[50rem] cursor-pointer", className)}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      onClick={toggleBurger}
    >
      <motion.div
        className={cn("absolute right-0 top-[21rem] h-[2rem] w-[50rem]", {
          ["bg-white"]: isOpen,
          ["bg-black"]: !isOpen,
        })}
        variants={variantsTop}
        animate={openControlTop}
      ></motion.div>
      <motion.div
        className={cn(
          "absolute bottom-[21rem] right-0 h-[2rem] w-[30rem] bg-black",
          {
            ["bg-white"]: isOpen,
            ["bg-black"]: !isOpen,
          }
        )}
        variants={variantsBottomHover}
        animate={openControlBottom}
      ></motion.div>
    </motion.div>
  );
};
