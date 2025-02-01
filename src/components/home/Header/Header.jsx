"use client";
import { Antonio } from "next/font/google";
import { Button } from "@/components/shared/Button";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
const antonio = Antonio({ subsets: ["latin"] });

import { sendGAEvent } from "@next/third-parties/google";

import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const homeURLs = [
  { name: "Home", href: "/" },
  { name: "Catalogo", href: "/catalogo" },
  { name: "Nosotros", href: "/nosotros" },
];

const landingURLs = [
  { name: "Nosotros", href: "#nosotros" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Cómo ayudar", href: "#ayudar" },
  { name: "Contactarme", href: "#contactar" },
];

export const Header = ({ togglePopUp }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  const pathname = usePathname();
  const isLanding = pathname === "/landing";

  const urlList = isLanding ? landingURLs : homeURLs;

  const scrollHeader = () => {
    if (window.scrollY >= 40) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  // Track hash changes for landing page
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Initial hash
    setCurrentHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const headerClass = clsx(
    "flex",
    "z-10",
    "w-full",
    "justify-between",
    "laptop:h-[88px]",
    "h-[60px]",
    "py-[15px]",
    "laptop:px-5",
    "tablet:px-3",
    "mobile:px-3",
    "bg-white",
    {
      fixed: header === true,
    }
  );

  const mergedClass = twMerge(headerClass);

  const donateClick = () => {
    togglePopUp();
    sendGAEvent("event", "donateButtonClicked");
  };

  return (
    <header className={mergedClass}>
      <div className="flex justify-center items-center">
        {/* Mobile Logo */}
        <Link href="/">
          <Image
            src="/logo_mobile_tablet.png"
            width={34}
            height={33}
            alt="Soplo de Vida Mobile Logo"
            className="block tablet:hidden w-[34px] h-[32px]"
          />
        </Link>

        {/* Tablet Logo */}
        <Link href="/">
          <Image
            src="/logo_mobile_tablet.png"
            width={34}
            height={33}
            alt="Soplo de Vida Tablet Logo"
            className="hidden tablet:block laptop:hidden"
          />
        </Link>

        {/* Desktop Logo */}
        <Link href="/">
          <Image
            src="/logoSoplo.svg"
            width={57}
            height={60}
            alt="Soplo de Vida Desktop Logo"
            className="hidden laptop:block"
          />
        </Link>

        <span
          className={`${antonio.className} ml-3 text-violet font-normal text-base hidden laptop:block`}
        >
          Soplo de vida
        </span>
      </div>

      <div className="flex items-center">
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <Image
                src="/icons/burger_menu.svg"
                width={25}
                height={24}
                alt="burger_menu"
              />
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="self-end mr-3 mt-3"
                onClick={() => setIsNavOpen(false)}
              >
                <img src="/icons/xicon.svg" className="w-3" />
              </div>
              <ul className="flex basis-4/6 flex-col items-center justify-between min-h-[250px] w-[90%] py-1 z-30">
                {urlList.map((url, index) => {
                  const isActive = isLanding
                    ? currentHash === url.href
                    : pathname === url.href;

                  return (
                    <li
                      key={index}
                      className={clsx(
                        "w-full text-center p-3 rounded-md",
                        isActive && "bg-secondary"
                      )}
                      onClick={() => setIsNavOpen(false)}
                    >
                      <a
                        className="font-medium leading-5 text-base hover:font-bold text-black block"
                        href={url.href}
                      >
                        {url.name}
                      </a>
                    </li>
                  );
                })}
                <Button
                  size="medium"
                  variant="primary"
                  text="Donar"
                  customStyles={["w-full", ""]}
                  onClick={donateClick}
                ></Button>
              </ul>
            </div>
          </section>
          <ul className="laptop:flex items-center gap-3 DESKTOP-MENU hidden space-x-1">
            {urlList.map((url, index) => (
              <li key={index}>
                <a
                  className="font-normal leading-5 text-base hover:font-bold text-grey"
                  href={url.href}
                >
                  {url.name}
                </a>
              </li>
            ))}
            <Button
              size="medium"
              variant="primary"
              text="Donar"
              onClick={togglePopUp}
            ></Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};
