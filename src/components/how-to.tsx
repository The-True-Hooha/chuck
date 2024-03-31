"use client";
import { TextWrapper } from "@/components/text";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";

export default function HowTo() {
  return (
    <div>
      <div className="bg-[#5BA7FF] pb-[40px] min-h-screen px-4">
        <div className="lg:pt-[140px] pt-[100px] text-lg font-pixelifySans  ">
          <h1 className="text-center  font-upheavtt text-2xl ">How It Works</h1>
          <h1 className="text-center  font-upheavtt text-4xl mb-2">
            Add TO Base
          </h1>

          <p>Learn how to add the Base network to your crypto wallet.</p>

          <div>
            <h2 className="  font-upheavtt text-2xl mt-4">- CoinBase</h2>
            <p>
              Basically the CoinBase wallet browser extension provides support
              for Base by default, so it should be already there. To verify just
              log in to your Coinbase wallet press Swap and switch the network,
              Base Network should be there by default.
            </p>
          </div>

          <div>
            <h2 className="  font-upheavtt text-2xl mt-4">- Meta Mask</h2>
            <p>
              For MM however we need to add Base as a Custom Network.
              <br />
              <br />
              Connect to your MM wallet and go to your Networks. Click Add
              Network, Base Mainnet should be in the list of popular networks so
              you don&apos;t need to add it manually. Just press Add and Approve
              popup, now just switch to the Base network.
            </p>

            <div>
              <div className="mb-16 mt-10">
                <h2 className="  font-upheavtt text-xl mb-4">
                  {" "}
                  1. Click on MetaMask Browser Extension
                </h2>
                <div className=" w-full max-w-4xl mt-2">
                  <Image
                    src="/assets/images/bridge/1.png"
                    alt="1"
                    height={400}
                    width={400}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="mb-16">
                <h2 className="  font-upheavtt text-xl mt-4">
                  2. Click on MetaMask Browser Extension
                </h2>
                <div className=" w-full max-w-4xl mt-2">
                  <Image
                    src="/assets/images/bridge/2.png"
                    alt="2"
                    height={400}
                    width={400}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="mb-16">
                <h2 className="font-upheavtt text-xl mt-4">
                  3. Locate Base Network and Click Add.
                </h2>
                <div className=" w-full max-w-4xl mt-2">
                  <Image
                    src="/assets/images/bridge/3.png"
                    alt="3"
                    height={400}
                    width={400}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="mb-16">
                <h2 className="font-upheavtt text-xl mt-4">
                  4. Click Approve on the pop-up screen.
                </h2>
                <div className=" w-full max-w-4xl mt-2">
                  <Image
                    src="/assets/images/bridge/4.png"
                    alt="4"
                    height={400}
                    width={400}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mb-10">
              {/* <div className=" w-[70%] rounded-2xl overflow-hidden max-w-4xl mt-2">
                <Image
                  src="/assets/images/logo-main.jpg"
                  alt="4"
                  height={400}
                  width={400}
                  className="h-full w-full object-contain"
                />
              </div> */}
              <h2 className="  font-upheavtt text-2xl mt-4">
                - Add Base Chain
              </h2>
              <p>Learn how to add the Base network to your crypto wallet.</p>
              {/* <Link href="https://youtu.be/XbHztxWbOyk" target="_blank">
                <button className="border rounded-3xl px-4 py-2 hover:bg-blue-700 flex items-center gap-2 font-bold mt-4">
                  {" "}
                  <AiOutlineYoutube size={24} /> <span>Watch</span>
                </button>
              </Link> */}
            </div>
            <div className="mb-10">
              {/* <div className=" w-[70%] rounded-2xl overflow-hidden max-w-4xl mt-2">
                <Image
                  src="/assets/images/logo-main.jpg"
                  alt="4"
                  height={400}
                  width={400}
                  className="h-full w-full object-contain"
                />
              </div> */}
              <h2 className="  font-upheavtt text-2xl mt-4">
                - Bridge to Base
              </h2>
              <p>Learn how to bridge ETH from mainnet to Base chain.</p>
              {/* <Link href="https://youtu.be/uXTkcGiDS60" target="_blank">
                <button className="border rounded-3xl px-4 py-2 flex items-center gap-2 font-bold mt-4">
                  {" "}
                  <AiOutlineYoutube size={24} /> <span>Watch</span>
                </button>
              </Link> */}
            </div>
            <div>
              {/* <div className=" w-[70%] rounded-2xl overflow-hidden max-w-4xl mt-2">
                <Image
                  src="/assets/images/logo-main.jpg"
                  alt="4"
                  height={400}
                  width={400}
                  className="h-full w-full object-contain"
                />
              </div> */}
              <h2 className="  font-upheavtt text-2xl mt-4">-Buy Chuck</h2>
              <p>Different ways to safely buy the Chuck token.</p>
              {/* <Link href="https://youtu.be/WoFM7czuxOY" target="_blank">
                <button className="border rounded-3xl px-4 py-2 flex items-center gap-2 font-bold mt-4">
                  {" "}
                  <AiOutlineYoutube size={24} /> <span>Watch</span>
                </button>
              </Link> */}
            </div>
          </div>
        </div>
        {/* CoinBase Basically the CoinBase wallet browser extension provides
        support for Base by default, so it should be already there. To verify
        just log in to your Coinbase wallet press Swap and switch the network,
        Base Network should be there by default. Meta Mask For MM however we
        need to add Base as a Custom Network. Connect to your MM wallet and go
        to your Networks. Click Add Network, Base Mainnet should be in the list
        of popular networks so you don&apos;t need to add it manually. Just
        press Add and Approve popup, now just switch to the Base network.
      </div>
      <div>
        <div className="lg:pt-[140px] pt-[100px] text-[40px] font-upheavtt text-center flex justify-center">
          <div>Add Base Network</div>
        </div>
        <p>Locate Base Network and Click Add</p>
        <p>Click on MetaMask Browser Extension</p>
      </div>
      <p>Click on MetaMask Browser Extension</p>
      <p>Click Approve on the pop-up screen</p>
      <p>You have added it.</p>
      <div className="lg:pt-[140px] pt-[100px] text-[40px] font-upheavtt text-center flex justify-center">
        <TextWrapper>How-to? (Step 2)</TextWrapper> */}
      </div>
      <div className="bg-[#5BA7FF] w-full font-pixelifySans">
        {/* <p className="flex justify-center">
          The Bermuda Triangle used to be the Bermuda Square, until Chuck Norris
          Roundhouse one of the corners off
        </p> */}
        <blockquote className="text-md italic border-l-4 border-blue-800 pl-4 ml-4 pb-4 dark:border-gray-500 dark:bg-gray-800">
          The Bermuda Triangle used to be the Bermuda Square, until Chuck Norris
          Roundhouse one of the corners off
        </blockquote>
      </div>
    </div>
  );
}
