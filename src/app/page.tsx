import { HeroSection } from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MiddleSection } from "@/components/middle";
import { ImageSection } from "@/components/section";
import { IMiddle } from "@/components/middle-2";
import { TextSection } from "@/components/text";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* <main className="flex-col flex min-h-screen"> */}
      <HeroSection />
      <MiddleSection/>
      <ImageSection />
      <IMiddle />
      <TextSection/>
        <Footer />
      {/* </main> */}
    </>
  );
}
