"use client";
import { useState, useEffect } from "react";

interface State {
  mouseX: number;
  mouseY: number;
}

export const useMousePosition = (): State => {
  const [mousePosition, setMousePosition] = useState<State>({
    mouseX: 0,
    mouseY: 0,
  });

  const updateMousePosition = (ev: MouseEvent) => {
    setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};
