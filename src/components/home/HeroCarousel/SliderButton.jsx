export const SliderButton = ({ direction, nextSlide }) => {
  if (direction === "right") {
  return (
      <button onClick={nextSlide} className="flex items-center justify-center h-[64px] w-[64px] bg-secondary rounded-full justify-self-center mr-[88px]">
        <img src="/forward.svg" alt="" />
      </button>
      );
  } else if (direction === "left") {
    return (
      <button className="flex items-center justify-center h-[64px] w-[64px] bg-secondary rounded-full justify-self-center mr-[88px] rotate-180">
        <img src="/forward.svg" alt="" />
      </button>
    );
    
  }
};
