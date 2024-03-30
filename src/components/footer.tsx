import Image from "next/image";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaMedium } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import footerData from "../utils/footer";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0070F0] border-t border-[#0070F0] md:py-20 px-6 md:px-12 pb-5 pt-6">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
          <div className="flex items-center gap-4">
            <Image
              src={"/assets/logo/logo-v2.png"}
              alt="logo"
              width={100}
              height={100}
              loading="lazy"
            />
            <h2 className="text-3xl ml-[-30px] text-white font-bold font-upheavtt">
              $Chuck
            </h2>
          </div>
          <div className="input relative">
            <input
              type="text"
              className="w-full bg-white text-black py-2 px-4 rounded-md placeholder-gray-400"
              placeholder="Subscribe here..."
            />
          </div>
          <p className="text-white font-pixelifySans text-center">
            $Chuck: Unleashing Joy and Advocacy in the Web3 World
          </p>
          {/* <div className=" flex gap-4 text-white justify-center">
            <Link href="https://x.com/CHUCK_on_Base?t=PgRn6I4ZDjpt9OmHf_Sa4A&s=09">
              <RiTwitterXLine className="text-[40px]" />
            </Link>
            <Link href="https://t.me/Chuck_on_Base">
              <FaTelegram className="text-[40px]" />
            </Link>
          </div> */}
        </div>
        <div className="w-full font-pixelifySans md:w-1/2 grid grid-cols-3 gap-8 mt">
          {footerData.map((item, index) => (
            <div key={index}>
              <h4 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h4>
              <ul className="text-white">
                {item.links.map((text, idx) => (
                  <li key={idx}>
                    <Link href={text.link} className="hover:text-blue-700">
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-white text-center font-pixelifySans mt-12">
        <a href="#" className="mr-4">
          &copy; {currentYear} All rights reserved, not affiliated with Chuck
          Norris.
        </a>
        <a href="#">Privacy policy</a> | <a href="#">Terms of service</a>
      </p>
    </footer>
  );
}

export default Footer;
