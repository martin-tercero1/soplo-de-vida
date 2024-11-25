import { Pagination } from "./Pagination";
import { SliderButton } from "./SliderButton";
import { Button } from "@/components/shared/Button";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const Slide = ({ title, subtitle, description, mobileDescription, background, nextSlide, slidesInfo, setSlide, currentSlide, startAutoSlide, stopAutoSlide, togglePopUp }) => {
    const buttonCustomSyles = [
      "w-full",
      "tablet:w-[227px]", 
      "h-[48px]",
      "leading-5",
      "text-base",
      "font-bold",
      "flex",
      "items-center",
      "justify-center",
    ];

  const SlideClass = clsx(
    "w-full",
    "h-full",
    "flex",
    "flex-col",
    "items-center",
    "duration-500",
    "bg-cover",
    "bg-no-repeat",
    "bg-center",
    "tablet:relative",
    "text-white",
    {
      "bg-hero-slide-1": background === "hero-slide-1",
      "bg-hero-slide-2": background === "hero-slide-2",
      "bg-hero-slide-3": background === "hero-slide-3",
      "bg-hero-slide-4": background === "hero-slide-4",
    },
    {
      "tablet:text-grey": background === "hero-slide-1",
    },
    {
      "tablet:text-grey": background === "hero-slide-4",
    }
  );
  
  const mergedClass = twMerge(SlideClass);

  return (
    <article
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      className={mergedClass}
    >
      <div className="flex duration grow w-full justify-evenly tablet:justify-between items-end tablet:items-center tablet:pl-[91px] bg-gradient-to-b from-[#242830B2] to-[#D9D9D9]/1% tablet:bg-none">
        <div className="flex flex-col w-[283px] laptop:max-w-[452px] tablet:max-w-[227px] gap-[17px] mb-1 tablet:mb-0">
          <h2 className="laptop:text-2xl text-[20px] tablet:text-md font-bold leading-7 laptop:leading-[43px] tablet:leading-6 uppercase">
            <span className="font-bold text-[16px] tablet:text-[18px] leading-5 tablet:leading-8 laptop:text-xl laptop:leading-[65px]">
              {title}
            </span>
            <br />
            {subtitle}
          </h2>
          <p className="desktop:hidden laptop:hidden tablet:block mobile:hidden font-light tablet:font-normal text-base leading-[21px]">
            {mobileDescription}
          </p>
          <p className="hidden laptop:block font-light tablet:font-normal text-base leading-[21px]">
            {description}
          </p>
          <Button
            size="large"
            variant="primary"
            text="Donar ahora"
            customStyles={buttonCustomSyles}
            onClick={togglePopUp}
          />
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
