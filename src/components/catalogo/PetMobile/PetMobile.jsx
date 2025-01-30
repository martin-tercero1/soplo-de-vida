"use client";
import { Label } from "@/components/catalogo/PetMobile/Label";
import { motion } from "framer-motion"; // Correct import
import Image from "next/image";
import { useState } from "react";
import useAnimal from "@/hooks/useAnimal";

const petSample = {
  name: "Chupetín",
  description: "Hace 4 años que Stompi espera ❤️‍🩹 ...", // Shortened for readability
  age: "4 años",
  gender: "Macho",
  personality: "Muy juguetón",
  health_condition: "Buen estado",
  images: ["/pet/sample.jpeg"],
};

export function PetMobile({ id }) {
  const [panelState, setPanelState] = useState("mid"); // No TypeScript types

  const { animal, loading, error } = useAnimal(id);
  console.log(animal);

  return (
    <section className="tablet:hidden h-screen w-screen relative">
      <div
        className="h-[320px] w-full relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${petSample.images[0]}` }}
      >
        <div className="z-20 w-full h-full bg-gradient-to-br from-[#cccdd3b3] via-transparent to-transparent"></div>
      </div>
      <motion.div
        className={`${
          panelState === "collapsed" ? "bg-secondary" : "bg-white"
        } rounded-[24px] z-10 absolute bottom-0 w-full`}
        animate={{
          height:
            panelState === "expanded"
              ? "90%"
              : panelState === "mid"
              ? "50%"
              : "100px",
        }}
        initial={{ height: "50%" }}
        transition={{ duration: 0.3 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, info) => {
          const dragOffset = info.offset.y;

          if (dragOffset < -60) {
            setPanelState("expanded");
          } else if (dragOffset > 60) {
            setPanelState(panelState === "expanded" ? "mid" : "collapsed");
          }
        }}
      >
        <div className="h-full p-[16px] flex flex-col gap-[16px] items-center bg-none">
          <div className="bg-grey w-[80px] h-[4px] rounded-[4px]"></div>
          <div
            className={`${
              panelState === "collapsed" ? "hidden" : ""
            } w-full flex justify-between items-center`}
          >
            <p className="text-black text-[35px] font-bold leading-[42px]">
              {petSample.name}
            </p>
            <Image
              alt="Icono de compartir"
              width={24}
              height={24}
              src="/icons/share.svg"
            />
          </div>
          <div
            className={`${
              panelState === "collapsed" ? "hidden" : ""
            } flex flex-wrap gap-[4px]`}
          >
            <Label text={petSample.gender} />
            <Label text={petSample.age} />
            <Label text={petSample.personality} />
            <Label text={petSample.health_condition} />
          </div>
          <div
            className={`${
              panelState === "collapsed" ? "hidden" : "overflow-y-scroll"
            }`}
          >
            <p className="text-black text-[18px] font-bold leading-[25px]">
              Su historia
            </p>
            <p className="text-black text-[14px] font-normal leading-[21px]">
              {petSample.description}
            </p>
          </div>
        </div>
      </motion.div>

      <button className="z-20 absolute bottom-0 bg-primary w-screen h-5 font-normal text-[11px] text-white leading-[16px]">
        Adoptar
      </button>
    </section>
  );
}
