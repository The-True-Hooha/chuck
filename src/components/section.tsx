"use client";

import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ImageSection() {
    const secRef = React.useRef<HTMLDivElement>(null);

    // ScrollYProgress is a value between 0 and 1
    const { scrollYProgress } = useScroll({
      //target is the element that we want to track
      target: secRef,
      offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const xTransform = useTransform(
      scrollYProgress,
      [1, 0.5, 0.1, 0],
      [-1000, 0, 0, 0]
    );
    return (
      <div
        className="h-screen bg-[#5BA7FF] flex items-center justify-center"
        ref={secRef}
      >
        <motion.div
          className="overflow-hidden relative w-full max-w-screen-lg h-[800px] border-2 border-[#5BA7FF] rounded-lg transition-transform duration-50 ease-in-out hover:border-[#5BA7FF]"
          style={{
            scale: scale,
            x: xTransform,
          }}
        >
          <Image
            src="/assets/images/logo-main.jpg"
            alt="monkey"
            fill={true}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </motion.div>
      </div>
    );
}
