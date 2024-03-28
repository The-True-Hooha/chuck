"use client";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundGradient } from "@/lib/bg-gradient";

export default function HeroSection() {
  return (
    <div
      // className="flex flex-col items-center bg-white"
      style={{
        backgroundImage: `url('/assets/images/wall art.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Ensure the div covers the entire viewport height
      }}
    >
      <div className="pt-[200px]">
        <h1 className="text-[40px] pt-[180px} font-silkscreen text-white sm:text-6x shadow-md lg:text-7xl text-center tracking-wide">
          The Web3 Token With a <br />
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Heart of Gold and a Bark of Strength
          </span>
        </h1>
        <p className="mt-[50px] text-lg text-center lg:flex lg:justify-center text-white bg-red-600max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
          >
            Roadmap
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Whitepaper
          </a>
        </div>
      </div>
    </div>
  );
}

