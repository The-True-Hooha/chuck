"use client";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundGradient } from "@/lib/bg-gradient";

// export default function HeroSection() {
//   return (
//     <div
//       // className="flex flex-col items-center bg-white"
//       style={{
//         backgroundImage: `url('/assets/images/wall art.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh", // Ensure the div covers the entire viewport height
//       }}
//     >
//       <div className="pt-[200px]">
//         {/* <h1 className="text-[40px] pt-[180px} font-silkscreen text-white sm:text-6x shadow-md lg:text-7xl text-center tracking-wide">
//           The Web3 Token With a <br />
//           <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
//             {" "}
//             Heart of Gold and a Bark of Strength
//           </span>
//         </h1>
//         <p className="mt-[50px] text-lg text-center lg:flex lg:justify-center text-white bg-red-600max-w-4xl">
//           Empower your creativity and bring your VR app ideas to life with our
//           intuitive development tools. Get started today and turn your
//           imagination into immersive reality!
//         </p> */}
//         <div className="flex justify-center mt-10">
//           <a
//             href="#"
//             className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
//           >
//             Roadmap
//           </a>
//           <a href="#" className="py-3 px-4 mx-3 rounded-md border">
//             Whitepaper
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { cn } from "@/utils/cn";
// import { Spotlight } from "@/lib/spotlight";

// export function HeroSection() {
//   return (
//     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
//         <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//           Spotlight <br /> is the new trend.
//         </h1>
//         <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
//           Spotlight effect is a great way to draw attention to a specific part
//           of the page. Here, we are drawing the attention towards the text
//           section of the page. I don&apos;t know why but I&apos;m running out of
//           copy.
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { WavyBackground } from "@/lib/waves";
import { TypewriterEffectSmooth } from "@/lib/typewriter";
import { Button } from "@/lib/moving-borders";
import { CardItem, CardBody, CardContainer } from "@/lib/3d-card";
import Link from "next/link";

export function HeroSection() {
  const words = [
    {
      text: "Welcome to the exciting world of $Chuck",
      className: "text-blue-700 dark:text-blue-500",
    },
  ];
  return (
    <WavyBackground
      backgroundFill="#5BA7FF"
      className="max-w-4xl  mx-auto h-full flex flex-col gap-20 px-2"
    >
      <div className="w-full mt-[150px] md:mt-[120px]  mx-auto">
        <p className="font-upheavtt text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
          $Chuck: Unleashing Joy and Advocacy in the Web3 World
        </p>
        <div className="text-center mx-auto text-[17px] w-[30px] flex items-center justify-center">
          <TypewriterEffectSmooth
            className="font-pixelifySans lg:text-[40px] "
            words={words}
          />
        </div>
      </div>

      <CardContainer className="inter-var mt-[175px] mb-[170px] mr-[30px] lg:mr-[20px] ">
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
    </WavyBackground>
  );
}
