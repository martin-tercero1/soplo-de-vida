import { Label } from "@/components/catalogo/PetMobile/Label";
import { motion } from "motion/react";
import Image from "next/image";
import { ShareIcon } from "@/components/catalogo/ShareIcon";
import { SmallPic } from "@/components/catalogo/SmallPic";

const petSample = {
  name: "Chupetín",
  description:
    "Hace 4 años que Stompi espera ❤️‍🩹 Despues de todo lo que sufrió y superó, mercer una familia. En el 2020, 5 dias antes de que empiece la cuarentena, lo fuimos a buscar a La Plata. Un perro lo había mordido en la cara y a su familia no le habia importado. Con el pasar de las semanas, una gran bichera le saco la mitad de su carita 🥺 Cuando llegamos, Stompi ya no comia, pesaba la mitad de su peso normal: estaba dándose por vencido. Corrimos a la veterinaria. Lamentablemente perdió su ojito izquierdo y para tapar su hueso tuvimos que hacerle 2 cirugias reconstructivas Imaginense las heridas que le quedaron al pobre gordo, no solo fisicas, sino tambien emocionales. Stompi tardo mucho en volver a confiar en los humanos despues de que lo abandonaran asi❤️‍🩹 Pero hoy confiamos en que el gordo esta listo para una familia. Puede ir con otros perros tranquilos sin problema🤭 Para su adaptación saldría con adiestrador y etologo, cubierto por nosotras. En casos como los de él hacemos un acompañamiento constante y cubrimos los gastos hasta terminar su adaptación. Queremos que sea el próximo en dejar el canil, en encontrar una familia. Por favor ayudennos a lograrlo❤️‍🩹",
  age: "4 años",
  gender: "Macho",
  personality: "Muy juguetón",
  health_condition: "Buen estado",
  images: ["", "/pet/sample.jpeg", "", ""],
};

export function Pet({ pet }) {
  return (
    <section className="hidden tablet:block">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-[24px] items-center">
          <div className="w-[80px] h-[80px] relative">
            {petSample.images[0] ? (
              <Image
                src={petSample.images[0]}
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
            {pet.name}
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <ShareIcon
            strokeColor="currentColor"
            className="w-5 h-5 text-primary"
          />
          <span className="font-medium text-base leading-[21px] text-grey">
            Compartir
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] desktop:flex-row">
        <div className="w-[320px] h-[396px] relative desktop:w-[525px] desktop:h-[495px]">
          <Image
            src={petSample.images[1]}
            className="rounded-[5px]"
            fill
            alt="Mascota foto"
          />
        </div>
        <div className="flex dekstop:flex-col gap-[14px]">
          <SmallPic image={petSample.images[2]} />
          <SmallPic image={petSample.images[3]} />
          <SmallPic image={petSample.images[4]} />
        </div>
      </div>
      <article className="my-4">
        <h3 className="font-bold leading-[42px] text-xl text-grey">
          Su historia
        </h3>
        <p className="font-normal leading-[21px] text-sm text-grey">
          {pet.description}
        </p>
      </article>
    </section>
  );
}
