"use client"
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
export default function HowTo() {
    return (
      <div className="bg-[#0070F0]">
        <h2 className="text-3xl font-silkscreen sm:text-5xl lg:text-6xl text-center tracking-wide">
          How to{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            $Chuck
          </span>
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="p-2 w-full lg:w-1/2">
            <Image
              src={"/assets/images/logo-main.jpg"}
              alt="logo"
              width={400}
              height={400}
              loading="lazy"
              // className="mr-[400px]"
            />
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {howToItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-400 mx-6 bg-white h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}


export const howToItems = [
  {
    title: "Seamless NFT Interoperability",
    description:
      "Easily bridge NFTs across different blockchain networks for seamless interoperability.",
  },
  {
    title: "Cross-Chain Asset Transfers",
    description:
      "Effortlessly transfer NFT assets between various blockchain ecosystems with ease.",
  },
  {
    title: "Smart Contract Integration",
    description:
      "Integrate smart contracts to enable secure and automated NFT transactions and operations.",
  },
  {
    title: "Decentralized Asset Management",
    description:
      "Manage NFT assets in a decentralized manner, ensuring transparency and security.",
  },
];