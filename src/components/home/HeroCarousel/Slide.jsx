import { Pagination } from "./Pagination";
import { SliderButton } from "./SliderButton";

export const Slide = ({ title, subtitle, description }) => {
  return (
    <article className="w-full h-full flex flex-col items-center">
      <div className="flex w-full h-full justify-between items-center ml-[91px]">
        <div className="flex flex-col max-w-[452px] gap-[17px]">
          <h2 className="text-2xl font-bold leading-[43px] uppercase">
            <span className="font-bold text-xl leading-[65px]">{title}</span>
            <br />
            {subtitle}
          </h2>
          <p className="font-light text-base leading-[21px]">{description}</p>
        </div>
        <SliderButton />
      </div>
      <Pagination />
    </article>
  );
};
