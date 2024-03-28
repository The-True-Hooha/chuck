"use client";
import Image from "next/image";
import { ContainerScroll } from "../lib/container-scroll";

export default function MiddleSection() {
  return (
    // <div className="flex flex-col items-center bg-white">
    //   <Image
    //     src={"/assets/images/wall art.jpg"}
    //     alt="wall art"
    //     width={500}
    //     height={500}
    //     loading="lazy"
    //   />
    //   <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    //     VirtualR build tools
    //     <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
    //       {" "}
    //       for developers
    //     </span>
    //   </h1>
    //   <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
    //     Empower your creativity and bring your VR app ideas to life with our
    //     intuitive development tools. Get started today and turn your imagination
    //     into immersive reality!
    //   </p>
    //   <div className="flex justify-center my-10">
    //     <a
    //       href="#"
    //       className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
    //     >
    //       Start for free
    //     </a>
    //     <a href="#" className="py-3 px-4 mx-3 rounded-md border">
    //       Documentation
    //     </a>
    //   </div>
    //   <div className="flex mt-10 justify-center"></div>
    // </div>
    <div className="flex flex-col overflow-hidden bg-white">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              The Web3 Token With a Heart of Gold <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                and a Bark of Strength
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/assets/images/wall art.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
