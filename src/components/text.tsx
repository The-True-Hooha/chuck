"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export function TextWrapper({ children }: Props) {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(219, 100%, 50%, 1)",
      "#0070F0",
      "#0070F0",
      "#0070F0",
      "#0070F0",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
}

export function TextSection() {
  return (
    <div className="text-sm px-4 pb-20 lg:text-6xl  lg:pb-60 lg:pt-40 text-center bg-[#5BA7FF] font-upheavtt flex flex-col justify-center gap-12">
      <div className="text-white text-[35px]">Why Chuck token?</div>
      <TextWrapper>
        $Chuck was born out of a deep admiration for the iconic Chuck Norris
        memes, but it stands for so much more than just internet meme. This
        token is at the core of a vibrant and fun-loving meme community with a
        noble mission: to shine a light on animal welfare. So, whether you are
        here to share a laugh, spread love for our furry friends, or simply
        explore the world of Web3, $Chuck welcomes you with open paws. Join us
        in building not just a community, but a movement dedicated to making a
        difference, one meme at a time.
      </TextWrapper>
    </div>
  );
}
