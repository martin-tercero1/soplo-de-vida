import { PetMobile } from "@/components/catalogo/PetMobile";
import { Pet } from "@/components/catalogo/Pet";
import { Aliado } from "@/components/nosotros/Aliado";
import { Requirements } from "@/components/shared/Requirements";
import { notFound } from "next/navigation";

export default async function page({ params }) {
  const { id } = await params;
  // const res = await fetchPet(id);
  // const pet = res.pet;
  // if (!res) {
  //   notFound();
  // }

  return (
    <div className="w-full tablet:px-[40px] laptop:px-[89px]">
      <PetMobile id={id}/>
      <Pet id={id}/>
      <Aliado />
      <Requirements />
    </div>
  );
}
