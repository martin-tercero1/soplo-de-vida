"use client"

import { Header } from "@/components/home/Header";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { About } from "@/components/home/About";
import { Donate } from "@/components/home/Donate";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/home/Contact";
import { DonatePopUp } from "@/components/home/Donate/DonatePopUp";
import { Footer } from "@/components/home/Footer";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { HelpUs } from "@/components/home/HelpUs";

export default function Home() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const homeClass = clsx("content-wrapper", {
    "blurred": isPopUpVisible === true,
  });

  const togglePopUp = () => {
    setIsPopUpVisible((prevValue) => !prevValue);
  };

  const mergedClass = twMerge(homeClass);

  const landingURLs = [{ name: "Nosotros", href: "#nosotros" }, {name: "Testimonios", href: "#testimonios"}, {name: "Cómo ayudar", href: "#ayudar"}, {name: "Contactarme", href: "#contactar"}];

  return (
    <>
      <div className={mergedClass}>
        <Header togglePopUp={togglePopUp}></Header>
        <HeroCarousel togglePopUp={togglePopUp}></HeroCarousel>
        <About></About>
        <Donate togglePopUp={togglePopUp}></Donate>
        <HelpUs togglePopup={togglePopUp}></HelpUs>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
      <Footer urlList={landingURLs}></Footer>
      {isPopUpVisible && <DonatePopUp togglePopUp={togglePopUp} />}
    </>
  );
}
