"use client";

import { useLayoutEffect } from "react";
import {
  CompanyFeatures,
  ConnectToUs,
  Hero,
  LifeScroll,
  Marquee,
  OurMission,
} from "./components/sections";
import { Projects } from "./components/sections/Projects/Projects";
import { OffersSlider } from "./components/sections/OffersSlider/OffersSlider";

export default function Home() {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <Hero className="mt-[64rem]" />
      {/* Видос */}
      <OurMission className="mt-[144rem]" />
      <Projects className="mt-[296rem]" />
      <OffersSlider className="mt-[250rem]" />
      <Marquee className="mt-[250rem]" />
      <CompanyFeatures className="mt-[250rem]" />
      <LifeScroll className="" />
      <ConnectToUs />
    </main>
  );
}
