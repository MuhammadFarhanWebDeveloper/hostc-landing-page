// hooks/useBreathing.ts
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface BreathingOptions {
  heroSelector: string;
  shapesSelector?: string;
  distance?: number;
  duration?: number;
}

export function useBreathing({
  heroSelector,
  shapesSelector,
  distance = 40,
  duration = 2,
}: BreathingOptions) {
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration, ease: "power1.inOut" },
    });

    tl.to(heroSelector, { y: -distance }, 0);

    if (shapesSelector) {
      tl.to(shapesSelector, { y: distance }, 0);
    }
  });
}
