import { Button } from "@/components/shared/Button";
import Image from "next/image";

export const Adopta = () => {
  return (
    <section className="w-screen py-2 px-[20.5px] tablet:px-[39px] tablet:py-4">
      <article className="p-2 flex flex-col gap-2 border border-[#CECECE] bg-white rounded-[10px] w-full tablet:flex-row laptop:w-[1005px] laptop:mx-auto">
        <div className="relative w-full h-[247px] tablet:w-[249px] tablet:h-[195px] laptop:w-[278px] laptop:h-[214px]">
          <Image
            fill
            alt="Foto de un soplito"
            src="/about/perro-adopcion.webp"
            className="rounded-lg tablet:object-cover tablet:object-top"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex flex-col gap-[8px] grow">
            <span className="font-medium text-[20px] leading-7">
              Adoptá un Solito
            </span>
            <p className="text-grey text-base font-light leading-5 tablet:hidden">
              Conocé a nuestros soplitos y animate a cambiar tu vida
            </p>
            <p className="text-grey text-base font-light leading-5 hidden tablet:inline-block">
              Conocé a nuestros soplitos y animate a cambiar tu vida. Tenemos
              muchos animales esperando una familia y un hogar donde crecer. ¡No
              pierdas la oportunidad de conocer a tu mejor amigo!
            </p>
          </div>
          <Button
            text="Adoptar"
            variant="secondary"
            size="medium"
            customStyles={["w-full", "text-md", "font-bold", "bg-secondary", "laptop:w-[283px]"]}
          />
        </div>
      </article>
    </section>
  );
};
