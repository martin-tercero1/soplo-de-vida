"use client";
import Image from "next/image";
import testimonios from "./dataTestimonials";

export const Testimonials = () => {
  return (
    <div className="w-full h-[743px] flex flex-col items-center bg-white">
      <h1 className="font-bold text-black text-3xl mb-8 mt-4">Testimonios</h1>
      <div className="flex overflow-x-auto space-x-7 px-4">
        {testimonios?.map((testimonio, index) => (
          <div
            key={index}
            className="w-[326px] h-[570px] p-4 shadow-md flex-shrink-0 bg-white mt-10 ml-20"
          >
            <Image
              src={testimonio.picture}
              alt={`${testimonio.name}'s picture`}
              height={250}
              width={250}
              className="md:h-72 md:w-[260px] rounded-lg"
            />
            <h2 className="font-medium text-[#404552] text-center text-2xl">
              {testimonio.name}
            </h2>
            <p className="text-gray-600 font-normal text-center mt-4 text-base">
              &quot;{testimonio.description}&quot;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
