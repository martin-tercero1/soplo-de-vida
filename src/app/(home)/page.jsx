"use client";

import { Header } from "@/components/home/Header";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { About } from "@/components/home/About";
import { DonatePopUp } from "@/components/home/Donate/DonatePopUp";
import { Banner } from "@/components/nosotros/Banner/Banner";
import { InstaFollow } from "@/components/nosotros/InstaFollow";
import { Adopta } from "@/components/nosotros/Adopta";
import { Aliado } from "@/components/nosotros/Aliado";
import { Footer } from "@/components/home/Footer";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function Home() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const homeClass = clsx("content-wrapper", {
    blurred: isPopUpVisible === true,
  });

  const togglePopUp = () => {
    setIsPopUpVisible((prevValue) => !prevValue);
  };

  const mergedClass = twMerge(homeClass);

  const homeURLs = [
    { name: "Home", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
  ];

  return (
    <>
      <div className={mergedClass}>
        <Header togglePopUp={togglePopUp}></Header>
        <HeroCarousel togglePopUp={togglePopUp}></HeroCarousel>
        <About />
        <Banner
          title="Actividades"
          description="En Soplo de Vida realizamos eventos y actividades como capacitaciones para voluntarios, educación canina, campañas de castraciones, etc."
          imgSrc="/home/evento-adopcion.webp"
          imgAlt="Evento benefico de soplo de vida"
        />
        <InstaFollow />
        <Banner
          title="Novedades"
          description="Encontrá aquí las novedades sobre campañas, adopciones y acciones de Soplo de Vida. "
          imgSrc="/home/voluntarios.webp" 
          imgAlt="Equipo de soplo de vida"
        />
        <Adopta />
        <Aliado />
      </div>
      <Footer urlList={homeURLs}></Footer>
      {isPopUpVisible && <DonatePopUp togglePopUp={togglePopUp} />}
    </>
  );
}
