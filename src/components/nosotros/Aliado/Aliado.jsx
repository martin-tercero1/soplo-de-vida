"use client"
import { Button } from "@/components/shared/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Aliado = () => {
  const pathname = usePathname();
  const isCatalog = pathname.startsWith("/catalogo");

  return (
    <section className={`${isCatalog ? "hidden" : ""} tablet:flex w-screen bg-secondary px-2 gap-3 mb-2 tablet:items-center laptop:mx-[91px] laptop:my-4 laptop:rounded-lg laptop:w-auto laptop:flex-row laptop:justify-around`}>
      <Image src="/shared/aliado.png" width={211} height={238} alt="Ilustracion de perrito"/>
      <div className="flex flex-col gap-3 items-center">
        <h5 className="text-[20px] font-semibold leading-7 tablet:text-xl tablet:font-bold tablet:leading-10">
          ¿Querés sumarte como Aliado?
        </h5>
        <p className="font-semibold leading-5">
          Buscamos empresas que quieran colaborar en el refugio
        </p>
        <Button
          variant="primary"
          customStyles={[
            "w-full",
            "py-[9px]",
            "text-[20px]",
            "tablet:max-w-[308px]",
            "outline-none",
          ]}
          text="Quiero Aliarme"
        />
      </div>
    </section>
  );
};
