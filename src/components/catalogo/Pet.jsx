import { Label } from "@/components/catalogo/PetMobile/Label";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { ShareIcon } from "@/components/catalogo/ShareIcon";
import Link from "next/link";

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

export function Pet({ pet }) {
  return (
    <section className="w-screen ">
      <div className="mx-[40px] mb-4 flex items-center justify-between">
        <div className="flex gap-3-">
          {/* <Image/> */}
          <h2 className="font-bold leading-[65px] text-2xl text-grey/90">
            {pet.name}
          </h2>
        </div>
        <Link className="flex flex-col items-center">
          <ShareIcon
            strokeColor="currentColor"
            className="w-5 h-5 text-primary"
          />
          <span className="font-medium text-base leading-[21px] text-grey">Compartir</span>
        </Link>
      </div>
      <article className="my-4 mx-[40px] text-pr">
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
