"use client";
import Image from "next/image";
import testimonios from "./dataTestimonials";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import arrow from "./images/arrow.svg";

export const Testimonials = () => {
  const scrollRef = useRef(null);
  const [flag, setFlag] = useState(false);

  const handleNext = () => {
    if (!flag) setFlag(true);
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  const handlePrev = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  return (
    <div className="w-auto h-[743px] flex flex-col items-center bg-white relative">
      <h1 className="font-bold text-black text-3xl mb-8 mt-4">Testimonios</h1>

      <div className="overflow-hidden w-full relative flex justify-center">
        <motion.div
          ref={scrollRef}
          className={`flex space-x-7 overflow-hidden ${
            testimonios.length > 5 ? "md:pl-20 md:pr-10" : "md:ml-0 md:mr-0"
          }`}
        >
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="w-[326px] h-[570px] p-4 flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                src={testimonio.picture}
                alt={`${testimonio.name}'s picture`}
                height={250}
                width={250}
                className={`md:h-[323px] md:w-[298px] rounded-lg ${
                  testimonio.border ? testimonio.border : ""
                }`}
              />
              <h2 className="font-medium text-[#404552] text-center text-2xl">
                {testimonio.name}
              </h2>
              <p className="text-gray-600 font-normal text-center mt-4 text-base">
                &quot;{testimonio.description}&quot;
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {flag && (
        <button
          onClick={handlePrev}
          className="absolute h-[64px] w-[64px] left-5 top-1/3 transform -translate-y-1/2 bg-[#FADBC7] p-2 rounded-full"
        >
          <Image
            src={arrow}
            alt={`Next arrow`}
            height={20}
            width={20}
            className="w-[16.74px] h-[35.56px] rotate-180 ml-4"
          />
        </button>
      )}
      <button
        onClick={handleNext}
        className="absolute h-[64px] w-[64px] right-5 top-1/3 transform -translate-y-1/2 bg-[#FADBC7] p-2 rounded-[35px]"
      >
        <Image
          src={arrow}
          alt={`Next arrow`}
          height={20}
          width={20}
          className="w-[16.74px] h-[35.56px] ml-4"
        />
      </button>
    </div>
  );
};
