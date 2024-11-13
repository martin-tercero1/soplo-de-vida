import { Pagination } from "./Pagination";
import { SliderButton } from "./SliderButton";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const Slide = ({ title, subtitle, description, background, nextSlide, slidesInfo, setSlide, currentSlide, startAutoSlide, stopAutoSlide }) => {
  const SlideClass = clsx(
    "w-full",
    "h-full",
    "flex",
    "flex-col",
    "items-center",
    "duration-500",
    "bg-cover",
    "bg-no-repeat",
    {
      "bg-hero-slide-1": background === "hero-slide-1",
      "bg-hero-slide-2": background === "hero-slide-2",
      "bg-hero-slide-3": background === "hero-slide-3",
      "bg-hero-slide-4": background === "hero-slide-4",
    },
    {
      "text-white": background === "hero-slide-2",
    },
    {
      "text-white": background === "hero-slide-3",
    }
  );
  
  const mergedClass = twMerge(SlideClass);

  return (
    <article
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      className={mergedClass}
    >
      <div className="flex duration grow w-full justify-between items-center pl-[91px]">
        <div className="flex flex-col max-w-[452px] gap-[17px]">
          <h2 className="text-2xl font-bold leading-[43px] uppercase">
            <span className="font-bold text-xl leading-[65px]">{title}</span>
            <br />
            {subtitle}
          </h2>
          <p className="font-light text-base leading-[21px]">{description}</p>
        </div>
        <SliderButton nextSlide={nextSlide} direction="right" />
      </div>
      <Pagination
        slidesInfo={slidesInfo}
        setSlide={setSlide}
        currentSlide={currentSlide}
      />
    </article>
  );
};
