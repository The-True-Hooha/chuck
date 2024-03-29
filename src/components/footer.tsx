import Image from "next/image";
import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import footerData from "../utils/footer";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0070F0] border-t border-[#0070F0] md:py-20 px-6 md:px-12">
      <div className="container flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
          <div className="flex items-center gap-4">
            <Image
              src={"/assets/logo/logo-v2.png"}
              alt="logo"
              width={100}
              height={100}
              loading="lazy"
              
            />
            <h2 className="text-3xl text-white font-bold font-upheavtt">
              $Chuck
            </h2>
          </div>
          <div className="input relative">
            <input
              type="text"
              className="w-full bg-white text-black py-2 px-4 rounded-md placeholder-gray-400"
              placeholder="Subscribe here..."
            />
            {/* <button>&#8594;</button> */}
          </div>
          <p className="text-white font-pixelifySans">
            $Chuck: Unleashing Joy and Advocacy in the Web3 World
          </p>
          <div className="text-[30px] flex gap-4 text-white">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-8">
          {footerData.map((item, index) => (
            <div key={index}>
              <h4 className="text-white text-lg font-semibold mb-4">
                {item.title}
              </h4>
              <ul className="text-white">
                {item.links.map((text, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white">
                      {text.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-white mt-4">
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
