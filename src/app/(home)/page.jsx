"use client"

import { Header } from "@/components/home/Header";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { About } from "@/components/home/About";
import { Donate } from "@/components/home/Donate";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/home/Contact";
import { DonatePopUp } from "@/components/home/Donate/DonatePopUp";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { HelpUs } from "@/components/home/HelpUs";

export default function Home() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const homeClass = clsx("content-wrapper", {
    "blurred": isPopUpVisible === true,
    "bg-primary": isPopUpVisible === true
  });

  const togglePopUp = () => {
    setIsPopUpVisible((prevValue) => !prevValue);
  };

  const mergedClass = twMerge(homeClass);

  return (
    <>
      <div className={mergedClass}>
        <Header togglePopUp={togglePopUp} ></Header>
        <HeroCarousel togglePopUp={togglePopUp}></HeroCarousel>
        <About></About>
        <Donate></Donate>
        <HelpUs></HelpUs>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>

      {isPopUpVisible && <DonatePopUp togglePopUp={togglePopUp} />}
    </>
  );
}
