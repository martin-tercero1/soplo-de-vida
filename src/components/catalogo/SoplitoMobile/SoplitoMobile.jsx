"use client";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { Label } from "@/components/catalogo/SoplitoMobile/Label";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const petSample = {
  name: "Chupetín",
  description:
    "Hace 4 años que Stompi espera ❤️‍🩹 Despues de todo lo que sufrió y superó, mercer una familia. En el 2020, 5 dias antes de que empiece la cuarentena, lo fuimos a buscar a La Plata. Un perro lo había mordido en la cara y a su familia no le habia importado. Con el pasar de las semanas, una gran bichera le saco la mitad de su carita 🥺 Cuando llegamos, Stompi ya no comia, pesaba la mitad de su peso normal: estaba dándose por vencido. Corrimos a la veterinaria. Lamentablemente perdió su ojito izquierdo y para tapar su hueso tuvimos que hacerle 2 cirugias reconstructivas Imaginense las heridas que le quedaron al pobre gordo, no solo fisicas, sino tambien emocionales. Stompi tardo mucho en volver a confiar en los humanos despues de que lo abandonaran asi❤️‍🩹 Pero hoy confiamos en que el gordo esta listo para una familia. Puede ir con otros perros tranquilos sin problema🤭 Para su adaptación saldría con adiestrador y etologo, cubierto por nosotras. En casos como los de él hacemos un acompañamiento constante y cubrimos los gastos hasta terminar su adaptación. Queremos que sea el próximo en dejar el canil, en encontrar una familia. Por favor ayudennos a lograrlo❤️‍🩹",
  age: "4 años",
  gender: "Macho",
  personality: "Muy juguetón",
  health_condition: "Buen estado",
  images: ["/pet/sample.jpeg"],
};

export function SoplitoMobile({ pet }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="h-screen w-screen relative">
      <div
        className="h-[320px] w-full relative bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${pet.images[0]}` }}
      >
        <div className="z-20 w-full h-full bg-gradient-to-br from-[#cccdd3b3] via-transparent to-transparent"></div>
      </div>
      <motion.div
        className="bg-white rounded-[24px] z-10 absolute bottom-0 w-full"
        animate={{ height: isExpanded ? "95%" : "67%" }}
        initial={{ height: "50%" }}
        transition={{ duration: 0.3 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, info) => {
          if (info.offset.y < -50) {
            setIsExpanded(true);
          } else if (info.offset.y > 50) {
            setIsExpanded(false);
          }
        }}
      >
        <div className="h-full p-2 flex flex-col gap-2 items-center bg-none">
          <div className="bg-grey w-[80px] h-[4px] rounded-[4px]"></div>
          <div className="w-full flex justify-between items-center">
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
          <div className="flex flex-wrap gap-[4px]">
            <Label text={petSample.gender} />
            <Label text={petSample.gender} />
            <Label text={petSample.personality} />
            <Label text={petSample.health_condition} />
          </div>
          <div className="overflow-y-scroll">
            <p className="text-black text-[18px] font-bold leading-[25px]">
              Su historia
            </p>
            <p className="text-black text-[14px] font-normal leading-[21px]">
              {petSample.description}
            </p>
          </div>
        </div>
      </motion.div>

      <button className="z-10 absolute bottom-0 bg-primary w-screen h-5 font-normal text-[11px] text-white leading-[16px]">
        Adoptar
      </button>
    </div>
  );
}
