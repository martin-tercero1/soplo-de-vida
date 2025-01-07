"use client"
import { Button } from "@/components/shared/Button";
import copy from "clipboard-copy";

export const CopyInformation = ({setIsCopied}) => {
  const customButtonStyles = [
    "px-3",
    "py-0",
    "font-bold",
    "text-md",
    "leading-8",
    "bg-secondary",
    "outline-transparent",
    "w-[292px]",
    "h-[44px]",
    "mt-[24px]",
    "tablet:bg-primary tablet:mb-0 tablet:mb-[8px] tablet:self-center tablet:text-white tablet:text-[16.5px] tablet:font-bold tablet:py-1 tablet:px-2",
  ];

    const bankAccountText =
      "Nombre: CUENTAS CORRIENTES \n Banco: MACRO \n CBU: 2850456230034920491001 \n Alias: FUND.SOPLODEVIDA";

    const handleCopyClick = async (text) => {
      try {
        await copy(text);
        setIsCopied(true);
        console.log("copied")
      } catch (error) {
        console.log("Failed to copy");
        console.log(error);
      }
    };

  return (
    <div className="w-screen tablet:w-1/2 tablet:mx-0">
      <div className="flex flex-col w-full tablet:border-r border-secondary gap-1">
        <p className="mx-[12px] hidden tablet:inline-block text-center font-medium text-md leading-8 mb-1">
          Transferencia
        </p>
        <p className="mx-[12px] font-normal text-base tablet:text-md leading-5 tablet:leading-8">
          Nombre: <br className="tablet:hidden" />
          <span className="font-bold leading-5 text-base">
            CUENTAS CORRIENTES
          </span>
        </p>
        <p className="mx-[12px] font-normal text-base tablet:text-md leading-5 tablet:leading-8">
          Banco: <br className="tablet:hidden" />
          <span className="font-bold leading-5 text-base">MACRO</span>
        </p>
        <p className="mx-[12px] font-normal text-base tablet:text-md leading-5 tablet:leading-8">
          CBU:
          <br className="tablet:hidden" />
          <span className="font-bold leading-5 text-base">
            2850456230034920491001
          </span>
          <button
            onClick={() => handleCopyClick("2590095010349204910083")}
            className="ml-[8px]"
          >
            <img src="/icons/copy.svg" alt="" />
          </button>
        </p>
        <p className="mx-[12px] font-normal text-base tablet:text-md leading-5 tablet:leading-8">
          Alias: <br className="tablet:hidden" />
          <span className="font-bold leading-5 text-base">
            FUND.SOPLODEVIDA
          </span>
          <button
            onClick={() => handleCopyClick("FUND.SOPLO.DE.VIDA")}
            className="ml-[8px] "
          >
            <img src="/icons/copy.svg" alt="" />
          </button>
        </p>

        <Button
          variant="secondary"
          size="large"
          customStyles={customButtonStyles}
          text="Copiar datos"
          onClick={() => handleCopyClick(bankAccountText)}
        />
      </div>
    </div>
  );
};
//comentario de prueba
