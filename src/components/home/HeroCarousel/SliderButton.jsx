import Image from "next/image";

export const SliderButton = ({ direction, nextSlide, prevSlide,isFirstSlide, isLastSlide }) => {
  if (direction === "right" && !isLastSlide) {
    return (
      <button
        onClick={nextSlide}
        className="hidden tablet:flex items-center justify-center laptop:h-[64px] laptop:w-[64px] bg-secondary bg-opacity-50 rounded-full justify-self-center mr-[88px] w-[32px] h-[32px]"
      >
        <Image width={12} height={12} alt="Icono siguiente" src="/icons/forward.svg" />
      </button>
    );
  } else if (direction === "left" && !isFirstSlide) {
    return (
      <button
        onClick={prevSlide}
        className="hidden tablet:flex items-center justify-center laptop:h-[64px] laptop:w-[64px] bg-secondary bg-opacity-50 rounded-full absolute left-0 ml-[20px] rotate-180 w-[32px] h-[32px]"
      >
        <Image width={12} height={12} alt="Icono anterior" src="/icons/arrow.svg" />
      </button>
    );
  }
  return null;
};