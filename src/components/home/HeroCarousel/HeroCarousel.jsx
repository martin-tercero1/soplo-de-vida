'use client'

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Slide } from "./Slide";
import { useState, useRef, useEffect } from "react";

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const slidesInfo = [
    {
      title: "Campaña ",
      subtitle: "de tránsitos",
      description:
        "A veces no podemos adoptar una mascota pero podemos ayudar dando un hogar temporal cariño. Transitando nos ayudás a rescatar más animales sin hogar.",
      background: "hero-slide-1",
    },
    {
      title: "Adoptá un ",
      subtitle: "soplito",
      description:
        "Nuestros soplitos están esperando una familia que los cuide, quiera y les den la posibilidad de cambiar su vida. Adoptar es un acto de amor incondicional.",
      background: "hero-slide-2",
    },
    {
      title: "Capacitación ",
      subtitle: "de voluntarios",
      description: "Todos los voluntarios necesitan aprender sobre el funcionamiento del refugio y cómo tratar con distintos animales en situación de vulnerabilidad. ¡Participá de nuestras capacitaciones!",
      background: "hero-slide-3",
    },
    {
      title: "Capacitación ",
      subtitle: "de castraciones",
      description: "Castrando a perros y gatos callejeros ayudamos a disminuir la cantidad de perros sin hogar.",
      background: "hero-slide-4",
    },
  ];

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesInfo.length);
    }, 5000); // 5 seconds
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slidesInfo.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const HeroCarouselClass = clsx(
    "w-100vw",
    "h-[481px]",
    "flex",
    "flex-col",
  );

  const mergedClass = twMerge(HeroCarouselClass);

  useEffect(() => {
    startAutoSlide();

    // Cleanup on unmount
    return () => stopAutoSlide();
  }, []);

  return (
    <section className={mergedClass}>
      <Slide
        background={slidesInfo[currentIndex].background}
        title={slidesInfo[currentIndex].title}
        subtitle={slidesInfo[currentIndex].subtitle}
        description={slidesInfo[currentIndex].description}
        slidesInfo={slidesInfo}
        setSlide={setCurrentIndex}
        nextSlide={nextSlide}
        currentSlide={currentIndex}
        startAutoSlide={startAutoSlide}
        stopAutoSlide={stopAutoSlide}
      />
    </section>
  );
};
