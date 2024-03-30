"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaMedium } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="fixed left-0 right-0 h-[8vh] bg-[#0070F0] pt-5 top-0 z-50 pb-3 backdrop-blur-lg ">
      <div className="px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image
              src={"/assets/logo/logo-v2.png"}
              alt="logo"
              width={50}
              height={50}
              loading="lazy"
              // className="mr-[400px]"
            />
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            {/* <span className="text-xl lg:text-[40px] tracking-tight font-silkscreen">
              $Chuck
            </span> */}
          </div>
          <ul className="hidden lg:flex font-pixelifySans ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>                
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="/roadmap" className="py-2 px-3 border rounded-md">
              Roadmap
            </a>
            <a href="/how-to" className="py-2 px-3 border rounded-md">
              How To
            </a>
          </div>
          <div className="lg:hidden  flex flex-col justify-end">
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

            <div className="flex font-pixelifySans flex-col items-center space-y-6">
              <Link
                className="py-2 px-3 rounded-md hover:text-blue-700"
                href="/roadmap"
              >
                Roadmap
              </Link>
              <Link
                className="py-2 px-3 rounded-md hover:text-blue-700"
                href="/tokenomics"
              >
                Tokenomics
              </Link>
              <Link
                className="py-2 px-3 rounded-md hover:text-blue-700"
                href="/how-to"
              >
                HowTo
              </Link>
              <Link
                className="py-2 px-3 rounded-md hover:text-blue-700"
                href="/whitepaper"
              >
                Whitepaper
              </Link>
              <Link
                className="py-2 px-3 hover:text-blue-700 rounded-md"
                href="https://www.dextools.io/app/en/base/pair-explorer/0xa878a7944062c3984b214a6f7bc3970f4a6a5257"
              >
                Chart
              </Link>
              <Link
                className="py-2 px-3 hover:text-blue-700 rounded-md"
                href="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
              >
                Buy Token
              </Link>
              <div className="flex justify-center mx-auto space-x-4">
                <Link href="https://x.com/CHUCK_on_Base?t=PgRn6I4ZDjpt9OmHf_Sa4A&s=09">
                  <RiTwitterXLine className="text-[40px] hover:text-blue-700" />
                </Link>
                <Link href="https://t.me/Chuck_on_Base">
                  <FaTelegram className="text-[40px] hover:text-blue-700" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export const navItems = [
  { label: "Whitepaper", href: "/whitepaper" },
  { label: "Buy Token", href: "https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a" },
  { label: "Chart", href: "https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a" },
  { label: "Roadmap", href: "/roadmap" },
];
