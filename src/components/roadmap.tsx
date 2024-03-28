"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { BackgroundGradientAnimation } from "@/lib/gradient";

export function Roadmap() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="h-max">
      <BackgroundGradientAnimation interactive={true} size="80%"
        gradientBackgroundStart="rgb(108, 0, 162)"
        gradientBackgroundEnd="rgb(0, 17, 82)"
      >
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Gradients X Animations
          </p>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
