"use client";

import Navbar from "@/components/navbar";
import { SchoolIcon, StarIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline } from "react-icons/md";
import { TERipple } from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Footer from "@/components/footer";

export default function Roadmap() {
  return (
    <div id="roadmap">
      <div className="bg-[#5BA7FF] min-h-screen pb-20">
        {/* <Navbar /> */}
        <div className=" ">
          <h3 className="mb-6 ml-3 text-2xl pt-[35px] font-upheavtt flex justify-center text-white leading-3">
            Chuck Roadmap
          </h3>
          <ol className="border-l-2 ml-[20px] border-info-100 ">
            {/* <!--Third item--> */}
            <li>
              <div className="flex-start md:flex">
                <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mb-10 w-[90%] lg:w-[30%] lg:flex ml-6 block bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 rounded-lg dark:shadow-black/10">
                  <div className="mb-4 flex justify-between">
                    <a
                      href="#!"
                      className="text-sm text-info font-upheavtt transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      Project Awareness Building
                    </a>
                    <a
                      href="#!"
                      className="text-sm text-info transition font-upheavtt duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      Q2 2024
                    </a>
                  </div>
                  <ul className="mb-6 text-neutral-700 font-pixelifySans ml-6 dark:text-neutral-200">
                    <li className="list-disc"> Token Creation</li>
                    <li className="list-disc"> BASE DEX Listing:Uniswap</li>
                    <li className="list-disc"> Website Development</li>
                    <li className="list-disc">
                      {" "}
                      Social Media Development - Telegram. X
                    </li>
                    <li className="list-disc">
                      {" "}
                      Chuck Bot Telegram Integration
                    </li>
                    <li className="list-disc">
                      {" "}
                      Cross Channel Marketing with Influencers
                    </li>
                    <li className="list-disc">
                      {" "}
                      Major Dextools: CG and CMC Listings
                    </li>
                  </ul>
                  {/* <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-info mr-1 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  >
                    Preview
                  </button>
                </TERipple>
                <TERipple>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                    See demo
                  </button>
                </TERipple> */}
                </div>
              </div>
            </li>
            {/* number 2 */}
            <li>
              <div className="flex-start md:flex">
                <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mb-10 w-[90%] lg:w-[30%] ml-6 block bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 rounded-lg dark:shadow-black/10">
                  <div className="mb-4 flex justify-between">
                    <a
                      href="#!"
                      className="text-sm text-info font-upheavtt transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      Community Advancement
                    </a>
                    <a
                      href="#!"
                      className="text-sm text-info transition font-upheavtt duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      Q3 2024
                    </a>
                  </div>
                  <ul className="mb-6 text-neutral-700 font-pixelifySans ml-6 dark:text-neutral-200">
                    <li className="list-disc"> Donation to Dog Charity</li>
                    <li className="list-disc">
                      {" "}
                      Chuck NFT and Design Planning
                    </li>
                    <li className="list-disc"> Chuck Merchandise</li>
                    <li className="list-disc"> Community Competitions</li>
                    <li className="list-disc"> Utility Planning</li>
                  </ul>
                  {/* <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-info mr-1 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  >
                    Preview
                  </button>
                </TERipple>
                <TERipple>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                    See demo
                  </button>
                </TERipple> */}
                </div>
              </div>
            </li>
            {/* number 3 */}
            <li>
              <div className="flex-start md:flex">
                <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mb-10 w-[90%] ml-6 block lg:w-[30%] bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 rounded-lg dark:shadow-black/10">
                  <div className="mb-4 flex justify-between">
                    <a
                      href="#!"
                      className="text-sm text-info font-upheavtt transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      Community Advancement
                    </a>
                    <a
                      href="#!"
                      className="text-sm text-info transition font-upheavtt duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      Q4 2024
                    </a>
                  </div>
                  <ul className="mb-6 text-neutral-700 font-pixelifySans ml-6 dark:text-neutral-200">
                    <li className="list-disc"> Website Upgrade</li>
                    <li className="list-disc"> NFT Mint and Launch</li>
                    <li className="list-disc"> Community Game Creation</li>
                    <li className="list-disc">Cross Community Partnership</li>
                  </ul>
                  {/* <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-info mr-1 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  >
                    Preview
                  </button>
                </TERipple>
                <TERipple>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                    See demo
                  </button>
                </TERipple> */}
                </div>
              </div>
            </li>
            <li>
              <div className="flex-start md:flex">
                <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mb-10 w-[90%] ml-6 block lg:w-[30%] bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 rounded-lg dark:shadow-black/10">
                  <div className="mb-4 flex justify-between">
                    <a
                      href="#!"
                      className="text-sm text-info font-upheavtt transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      Continued Development
                    </a>
                    <a
                      href="#!"
                      className="text-sm text-info transition font-upheavtt duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      Q1 2025
                    </a>
                  </div>
                  <ul className="mb-6 text-neutral-700 font-pixelifySans ml-6 dark:text-neutral-200">
                    <li className="list-disc"> NFT Development</li>
                    <li className="list-disc"> Community Game Development </li>
                  </ul>
                  {/* <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-info mr-1 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  >
                    Preview
                  </button>
                </TERipple>
                <TERipple>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                    See demo
                  </button>
                </TERipple> */}
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
