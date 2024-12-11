import Image from "next/image"

export const Banner = ({ title, description, imgSrc, imgAlt }) => {
  console.log(imgSrc);
  return (
    <section className="w-screen px-[40px] laptop:px-[91px]">
      <div className="p-2">
        <h3 className="font-medium text-md leading-8 laptop:font-bold">{title}</h3>
      </div>
      <div className="relative w-full h-[154px] laptop:h-[368px]">
        <Image src={imgSrc} alt={imgAlt} fill className="object-cover tablet:object-top laptop:object-center"/>
      </div>
      <p className="px-[20.5px] pt-[8px] pb-2 text-grey text-base font-light leading-5 laptop:font-normal">
        {description}
      </p>
    </section>
  )
}
