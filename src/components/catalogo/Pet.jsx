"use client"
import { Label } from "@/components/catalogo/PetMobile/Label";
import { motion } from "motion/react";
import Image from "next/image";
import { ShareIcon } from "@/components/catalogo/ShareIcon";
import { SmallPic } from "@/components/catalogo/SmallPic";
import { Button } from "@/components/shared/Button";
import useAnimal from "@/hooks/useAnimal";

const petSample = {
  name: "Chupetín",
  description:
    "Hace 4 años que Stompi espera ❤️‍🩹 Despues de todo lo que sufrió y superó, mercer una familia. En el 2020, 5 dias antes de que empiece la cuarentena, lo fuimos a buscar a La Plata. Un perro lo había mordido en la cara y a su familia no le habia importado. Con el pasar de las semanas, una gran bichera le saco la mitad de su carita 🥺 Cuando llegamos, Stompi ya no comia, pesaba la mitad de su peso normal: estaba dándose por vencido. Corrimos a la veterinaria. Lamentablemente perdió su ojito izquierdo y para tapar su hueso tuvimos que hacerle 2 cirugias reconstructivas Imaginense las heridas que le quedaron al pobre gordo, no solo fisicas, sino tambien emocionales. Stompi tardo mucho en volver a confiar en los humanos despues de que lo abandonaran asi❤️‍🩹 Pero hoy confiamos en que el gordo esta listo para una familia. Puede ir con otros perros tranquilos sin problema🤭 Para su adaptación saldría con adiestrador y etologo, cubierto por nosotras. En casos como los de él hacemos un acompañamiento constante y cubrimos los gastos hasta terminar su adaptación. Queremos que sea el próximo en dejar el canil, en encontrar una familia. Por favor ayudennos a lograrlo❤️‍🩹",
  age: "4 años",
  size: "Mediano",
  gender: "Macho",
  personality: "Muy juguetón",
  health_condition: "Buen estado",
  images: [null, "/pet/sample.jpeg", null, null],
};

export function Pet({ id }) {
  const { animal, loading, error } = useAnimal(id);
  console.log(animal);
  // console.log(pet);
  return (
    <section className="hidden w-full tablet:block">
      {/* Name section */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-[24px] items-center">
          <div className="w-[80px] h-[80px] relative">
            {animal?.images?.length > 1 ? (
              <Image
                src={animal.images?.[0] === "" ? null : animal.images?.[0]}
                className="rounded-[8px]"
                fill
                alt="Imagen de mascota"
              />
            ) : (
              <Image
                src="/shared/mascota.png"
                width={80}
                height={80}
                className="rounded-[8px]"
                alt="Logo de mascota"
              />
            )}
          </div>

          <h2 className="font-bold leading-[65px] text-2xl text-grey/90">
            {animal?.name}
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <ShareIcon
            strokecolor="currentColor"
            className="w-5 h-5 text-primary"
          />
          <span className="font-medium text-base leading-[21px] text-grey">
            Compartir
          </span>
        </div>
      </div>

      {/* Labels section */}

      <div className="w-full flex gap-[24px]">
        <div className="flex flex-col gap-[16px] laptop:flex-row-reverse">
          <div className="w-[320px] h-[396px] relative laptop:w-[525px] laptop:h-[495px]">
            <Image
              src={animal?.images?.[1] === "" ? null : animal?.images?.[1]}
              className="rounded-[5px]"
              fill
              alt="Mascota foto"
            />
          </div>
          <div className="flex laptop:flex-col gap-[14px]">
            <SmallPic image={animal?.images?.at(2)} />
            <SmallPic image={animal?.images?.at(3)} />
            <SmallPic image={animal?.images?.at(4)} />
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <h4 className="font-bold text-[35px] leading-[42px] text-grey">
            Datos importantes
          </h4>
          <div className="flex flex-col gap-[16px] justify-between">
            <div className="w-full flex">
              <div className="flex items-center text-grey font-bold text-[28px] leading-[34px] w-[136px]">
                Sexo
              </div>
              <Label text={animal?.gender} />
            </div>

            <div className="w-full flex">
              <div className="flex items-center text-grey font-bold text-[28px] leading-[34px] w-[136px]">
                Tamaño
              </div>
              <Label text={animal?.size} />
            </div>

            <div className="w-full flex">
              <div className="flex items-center text-grey font-bold text-[28px] leading-[34px] w-[136px]">
                Edad
              </div>
              <Label text={animal?.age} />
            </div>

            <div className="w-full flex">
              <div className="flex items-center text-grey font-bold text-[28px] leading-[34px] w-[136px]">
                Salud
              </div>
              <Label
                text={`${
                  animal?.dewormed ? "Desparasitado" : "No desparacitado"
                }`}
              />
            </div>
            <div className="flex-col items-center text-grey font-bold text-[28px] leading-[34px]">
              Carácter
              <p className="text-grey text-[22px] font-semibold leading-[28px]">
                {animal?.personality}
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            text="Adoptar"
            size="large"
            customStyles={["w-full"]}
          />
        </div>
      </div>

      <article className="my-4">
        <h3 className="font-bold leading-[42px] text-xl text-grey">
          Su historia
        </h3>
        <p className="font-normal leading-[21px] text-sm text-grey">
          {animal?.description}
        </p>
      </article>
    </section>
  );
}
