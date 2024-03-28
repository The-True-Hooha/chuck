"use client"
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

export function HeroSection() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <WavyBackground
      backgroundFill="#5BA7FF"
      className="max-w-4xl mt-[40px] mx-auto pb-40 flex items-center justify-center"
    >
      <div className="relative w-full">
        <p className="font-silkscreen text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
          $Chuck: Unleashing Joy and Advocacy in the Web3 World
        </p>
      </div>

     
    </WavyBackground>
  );
}
