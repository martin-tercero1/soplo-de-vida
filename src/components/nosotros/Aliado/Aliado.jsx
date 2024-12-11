import { Button } from "@/components/shared/Button";

export const Aliado = () => {
  return (
    <section className="w-screen bg-secondary px-2 py-[27px] flex flex-col gap-3 mb-2 tablet:items-center laptop:mx-[91px] laptop:my-4 laptop:rounded-lg laptop:w-auto laptop:flex-row laptop:justify-around">
      <div className="flex flex-col gap-3 items-center">
        <h5 className="text-[20px] font-semibold leading-7 tablet:text-xl tablet:font-bold tablet:leading-10">
          ¿Querés sumarte como Aliado?
        </h5>
        <p className="font-semibold leading-5">
          Buscamos empresas que quieran colaborar en el refugio
        </p>
      </div>
      <Button
        variant="primary"
        customStyles={[
          "w-full",
          "py-[9px]",
          "text-[20px]",
          "tablet:max-w-[308px]",
          "outline-none"
        ]}
        text="Quiero Aliarme"
      />
    </section>
  );
};
