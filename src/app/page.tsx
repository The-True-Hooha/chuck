import { HeroSection } from "@/components/hero";
import HowTo from "@/components/how-to";
import MiddleSection from "@/components/middle";
import Navbar from "@/components/navbar";
import { TracingBeam } from "@/lib/tracing-beam";
import { Intro } from "@/components/intro";
import Image from "next/image";
import { Roadmap } from "@/components/roadmap";


export default function Home() {
  return (
    <>
      {/* <TracingBeam> */}
      <Navbar />
      {/* <div className="max-w-7xl mx-auto pt-20 px-6"> */}
      <HeroSection />
      {/* </div> */}
      {/* <Intro/> */}
      {/* <HowTo /> */}
      {/* <Roadmap /> */}
    </>
  );
}
