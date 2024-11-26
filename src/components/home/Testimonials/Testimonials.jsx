"use client";
import Image from "next/image";
import arrow from "../../../../public/arrow.svg";
import testimonios from "./dataTestimonials";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./pagination.css";

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
    <section
      id="testimonios"
      className="w-auto tablet:h-[650px] mobile:h-[650px] flex flex-col items-center bg-white relative"
    >
      <h1 className="font-bold text-black tablet:text-xl mobile:text-md text-center tablet:mb-4 mobile:mb-2 mt-1">
        Testimonios
      </h1>

      <div className="overflow-hidden w-full relative mobile:hidden tablet:hidden laptop:flex justify-center pl-8">
        <motion.div
          ref={scrollRef}
          className={`flex space-x-3 overflow-hidden ${
            testimonios.length > 5 ? "md:pl-20 md:pr-10" : "md:ml-0 md:mr-0"
          }`}
        >
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="overflow-hidden w-[326px] tablet:h-[570px] p-1 pb-4 flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                src={testimonio.picture}
                alt={`${testimonio.name}'s picture`}
                height={250}
                width={250}
                quality={100}
                priority
                className={`laptop:h-[323px] laptop:w-[298px] mobile:h-[240px] mobile:w-[275px] rounded-lg ${
                  testimonio.border ? testimonio.border : ""
                } object-cover object-top`}
              />
              <h2 className="font-medium text-[#404552] text-center text-md mt-2">
                {testimonio.name}
              </h2>
              <p className="text-[#404552] font-normal text-center mt-2 text-base">
                &quot;{testimonio.description}&quot;
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {flag && (
        <button
          onClick={handlePrev}
          className="absolute h-[64px] w-[64px] left-5 top-1/3 transform bg-secondary/50 p-2 rounded-full mobile:hidden tablet:hidden laptop:flex items-center justify-center"
        >
          <Image
            src={arrow}
            alt={`Next arrow`}
            height={20}
            width={20}
            className="w-[16.74px] h-[35.56px] rotate-180"
          />
        </button>
      )}
      <button
        onClick={handleNext}
        className="absolute h-[64px] w-[64px] right-5 top-1/3 transform bg-secondary/50 p-2 rounded-[35px] mobile:hidden tablet:hidden laptop:flex items-center justify-center"
      >
        <Image
          src={arrow}
          alt={`Next arrow`}
          height={20}
          width={20}
          className="w-[16.74px] h-[35.56px]"
        />
      </button>

      {/* MOBILE Y TABLET */}

      <div className="overflow-hidden w-full relative laptop:hidden tablet:flex justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView="auto"
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            744: {
              slidesPerView: 3,
            },
          }}
          className="flex overflow-hidden mobile:w-[300px] mobile:h-[550px] tablet:w-auto tablet:h-auto tablet:px-[7px]"
        >
          {testimonios.map((testimonio, index) => (
            <SwiperSlide
              key={index}
              className="justify-center text-center overflow-hidden w-[326px] tablet:h-[570px] p-1 pb-4 flex-shrink-0
               border-[0.5px] border-opacity-80 border-[#CECECE] rounded-2xl tablet:mr-1"
            >
              <Image
                src={testimonio.picture}
                alt={`${testimonio.name}'s picture`}
                height={250}
                width={250}
                quality={100}
                priority
                className={`laptop:h-[323px] laptop:w-[298px] mobile:h-[240px] mobile:w-[275px] rounded-lg ${
                  testimonio.border ? testimonio.border : ""
                } object-cover object-top`}
              />
              <h2 className="font-medium text-[#404552] text-center text-md mt-2">
                {testimonio.name}
              </h2>
              <p className="text-[#404552] font-normal text-center mt-2 text-base mb-5">
                &quot;{testimonio.description}&quot;
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
