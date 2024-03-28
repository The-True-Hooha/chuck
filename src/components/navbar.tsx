"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaMedium } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky bg-[#0070F0] top-0 z-50 py-3 backdrop-blur-lg ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image
              src={"/assets/logo/logo-v2.png"}
              alt="logo"
              width={100}
              height={100}
              loading="lazy"
              // className="mr-[400px]"
            />
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <span className="text-xl lg:text-[40px] tracking-tight font-silkscreen">
              $Chuck
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Roadmap
            </a>
            <a href="#" className="py-2 px-3 border rounded-md">
              How To
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#0070F0] w-full p-12 flex flex-col justify-center items-center lg:hidden">
            {/* <ul>
              {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
            </ul> */}

            <div className="flex flex-col items-center space-y-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Roadmap
              </a>
              <a href="#" className="py-2 px-3 border rounded-md">
                HowTo
              </a>
              <a href="#" className="py-2 px-3 border rounded-md">
                NFTs
              </a>
              <a href="#" className="py-2 px-3 border rounded-md">
                DAO
              </a>
              <div className="flex justify-center mx-auto">
                <RiTwitterXLine className="text-[40px]"/>
                <FaMedium className="text-[40px]"/>
                <FaTelegram className="text-[40px]"/>
                <FaDiscord className="text-[40px]"/>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];
