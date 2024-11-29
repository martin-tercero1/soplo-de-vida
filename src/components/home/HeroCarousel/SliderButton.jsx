import Image from "next/image";

export const SliderButton = ({ direction, nextSlide }) => {
  if (direction === "right") {
  return (
    <button
      onClick={nextSlide}
      className="hidden tablet:flex items-center justify-center laptop:h-[64px] laptop:w-[64px] bg-secondary rounded-full justify-self-center mr-[88px] w-[32px] h-[32px]"
    >
      <Image width={12} height={12} alt="" src="/icons/forward.svg" />
    </button>
  );
  } else if (direction === "left") {
    return (
      <button className="hidden tablet:flex items-center justify-center laptop:h-[64px] laptop:w-[64px] bg-secondary rounded-full justify-self-center mr-[88px] rotate-180 w-[32px] h-[32px]">
        <Image width={12} height={12} alt="" src="back.svg"/>
      </button>
    );
    
  }
};
