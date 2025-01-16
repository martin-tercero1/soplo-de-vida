import Image from "next/image";

export const AboutCard = ({ title, subTitle, longDescription, shortDescription, imageSrc, imageAltText, bgColor }) => {
  return (
    <div className="text-left p-[16px] border border-[#CECECE] rounded-[10px]  min-w-[212px] min-h-[310px] tablet:min-w-[281px] tablet:min-h-[320px] laptop:max-w-[298px] laptop:max-h-[447px] laptop:text-center laptop:border-none">
      <div
        className={`bg-[#${bgColor}] rounded-xl w-[180px] h-[170px] tablet:w-[249px] relative border border-[#DEDDDD]`}
      >
        <Image
          className="max-w-[140px] max-h-[140px] mx-auto my-auto"
          fill={true}
          src={imageSrc}
          alt={imageAltText}
        />
      </div>
      <h3 className="font-bold mt-2 mb-[8px] text-[#404552] text-[20x]">{title}</h3>
      <p className="hidden laptop:block mt-2 text-[#404552] text-base">
        {longDescription}
      </p>
      <p className="laptop:hidden mt-2 text-[#404552] text-base">
        {shortDescription}
      </p>
      <p className="hidden laptop:block mt-2 font-semibold text-[#404552]">{subTitle}</p>
    </div>
  );
};
