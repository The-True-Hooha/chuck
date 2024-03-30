import { HeroSection } from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MiddleSection } from "@/components/middle";
import { ImageSection } from "@/components/section";
import { IMiddle } from "@/components/middle-2";
import { TextSection } from "@/components/text";
import Roadmap from "@/components/roadmap";
import WhitePaper from "@/components/whitepaper";
import HowTo from "@/components/how-to";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <main className="flex-col flex min-h-screen"> */}
      <HeroSection />
      <MiddleSection />
      <ImageSection />
      <IMiddle />
      <TextSection />
      <Roadmap />
      <WhitePaper />
      {/* <HowTo/> */}
      <Footer />
      {/* </main> */}
    </>
  );
}
