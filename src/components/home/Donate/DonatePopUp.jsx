import { Button } from "@/components/shared/Button";

export const DonatePopUp = () => {
  const customButtonStyles = ["px-2", "py-1", "font-bold", "text-[16.5px]", "self-center"];

  return (
    <div className="flex flex-col items-center rounded-2xl w-[700px] border border-x-grey/50 py-1 px-[27px]">
      <div className="hidden flex flex-col items-center gap-2">
        <p className="font-semibold text-base leading-5 text-center">
          ¡Gracias!
        </p>
        <p className="font-normal text-base leading-5 text-center">
          Gracias por colaborar con Soplo de Vida. Todas las donaciones
          recibidas son para el cuidado de los perritos y gatitos del refugio.
        </p>
      </div>

      <div className="hidden flex flex-col items-center gap-2">
        <p className="font-semibold text-base leading-5 text-center">
          ¡Copiado!
        </p>
        <p className="font-normal text-base leading-5 text-center">
          Los datos han sido copiados con éxito. Podés hacer una transferencia
          por Banco o Billetera Virtual.
        </p>
      </div>

      <span className="place-self-end">
        <img src="/close.svg" alt="" />
      </span>
      <h4 className="text-primary text-xl font-bold leading-3">Donar</h4>
      <div className="flex mt-5 w-full pb-3">
        <div className="w-1/2">
          <div className="flex flex-col w-full border-r border-secondary gap-1">
            <p className="text-center font-medium text-md leading-8 mb-1">
              Transferencia
            </p>
            <p className="font-normal text-md leading-8">
              Nombre:{" "}
              <span className="font-bold leading-5 text-base">
                FUND SOPLO DE VIDA
              </span>
            </p>
            <p className="font-normal text-md leading-8">
              Banco:{" "}
              <span className="font-bold leading-5 text-base">MACRO</span>
            </p>
            <p className="font-normal text-md leading-8">
              CBU:{" "}
              <span className="font-bold leading-5 text-base">
                2590095010349204910083
              </span>
              <button className="ml-[8px]">
                <img src="/copy.svg" alt="" />
              </button>
            </p>
            <p className="font-normal text-md leading-8">
              Alias:{" "}
              <span className="font-bold leading-5 text-base">
                FUND.SOPLO.DE.VIDA
              </span>
              <button className="ml-[8px] ">
                <img src="/copy.svg" alt="" />
              </button>
            </p>

            <Button
              variant="secondary"
              size="large"
              text="Copiar todos los datos"
              customStyles={customButtonStyles}
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex flex-col w-full gap-1">
            <p className="text-center font-medium text-md leading-8 mb-1">
              Mercado Pago
            </p>
            <Button
              variant="secondary"
              size="large"
              text="Donar $1.000"
              customStyles={customButtonStyles}
            />
            <Button
              variant="secondary"
              size="large"
              text="Donar %5.000"
              customStyles={customButtonStyles}
            />
            <Button
              variant="secondary"
              size="large"
              text="Donar $10.000"
              customStyles={customButtonStyles}
            />
            <Button
              variant="primary"
              size="large"
              text="Otro monto"
              customStyles={customButtonStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
