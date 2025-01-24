import { PetMobile } from "@/components/catalogo/PetMobile";
import { Pet } from "@/components/catalogo/Pet";
import { Aliado } from "@/components/nosotros/Aliado";
import { Requirements } from "@/components/shared/Requirements";
import { notFound } from "next/navigation";

async function fetchPet(id) {
  const res = await fetch(`http://localhost:3000/api/pets/${id}`);
  if (!res.ok) {
    console.error("Fetch failed with status:", res.status);
    return undefined;
  }
  return res.json();
}

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetchPet(id);
  const pet = res.pet;
  if (!res) {
    notFound();
  }

  return (
    <div>
      <div className="w-screen tablet:px-[40px] laptop:px-[89px]">
        <PetMobile />
        <Pet pet={pet} />
        <Aliado/>
        <Requirements />
      </div>
    </div>
  );
}
