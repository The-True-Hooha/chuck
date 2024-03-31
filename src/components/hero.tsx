"use client";
import Image from "next/image";
import React from "react";
import { WavyBackground } from "@/lib/waves";
import { TypewriterEffectSmooth } from "@/lib/typewriter";
import { CardItem, CardBody, CardContainer } from "@/lib/3d-card";

export function HeroSection() {
  const words = [
    {
      text: "Welcome to the exciting world of $Chuck",
      className: "text-blue-700 dark:text-blue-500",
    },
  ];
  return (
    <div className="bg-[#5BA7FF] pt-[130px]">
      <WavyBackground
        backgroundFill="#5BA7FF"
        className="max-w-4xl mx-auto flex flex-col gap-20 px-2"
      ></WavyBackground>

      <div className="w-full mt-[-770px] absolute lg:mt-[-800px] mx-auto">
        <p className="font-upheavtt text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
          Chuck: Unleashing Joy and Advocacy in the Web3 World
        </p>
        <div className="text-center mt-[30px] mx-auto text-[17px] w-[30px] flex items-center justify-center">
          <TypewriterEffectSmooth
            className="font-pixelifySans lg:text-[80px] "
            words={words}
          />
        </div>
      </div>
      <CardContainer className="inter-var mt-[-900px] mr-[5px] lg:mr-[20px] ">
        <CardBody
          className="absolute group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
          dark:border-white/[0.2] w-[20rem] lg:w-[60rem] h-auto rounded-xl
          p-6 border flex items-center lg:space-x-4 space-x-2"
        >
          <CardItem
            translateZ="100"
            className="w-full flex-grow hidden md:block"
          >
            <Image
              src="/assets/images/wall_art.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem translateZ="100" className="w-full flex-grow">
            <Image
              src="/assets/images/wall_art.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
