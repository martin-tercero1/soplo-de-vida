"use client"
import { Button } from "@/components/shared/Button";
import { useState, useEffect } from "react";
import copy from "clipboard-copy";

export const DonatePopUp = ({ togglePopUp }) => {
  const customButtonStyles = [
    "px-2",
    "py-1",
    "font-bold",
    "text-[16.5px]",
    "self-center",
  ];

  const [isCopied, setIsCopied] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const bankAccountText =
    "Nombre: FUND SOPLO DE VIDA \n Banco: MACRO \n CBU: 2590095010349204910083 \n Alias: FUND.SOPLO.DE.VIDA";

  const handleCopyClick = async (text) => {
    try {
      await copy(text);
      setIsCopied(true);
    } catch (error) {
      console.log("Failed to copy");
      console.log(error);
    }
  };

  const handleLinkClick = () => {
    setIsLinkClicked(true);
  };

  // useEffect to automatically hide messages after 5 seconds
  useEffect(() => {
    if (isCopied || isLinkClicked) {
      const timer = setTimeout(() => {
        setIsCopied(false);
        setIsLinkClicked(false);
        togglePopUp()
      }, 5000); // 5000 ms = 5 seconds

      // Cleanup function to clear the timeout if component unmounts
      return () => clearTimeout(timer);
    }
  }, [isCopied, isLinkClicked]);

  return (
    <div className="z-20 fixed ml-[-350px] left-1/2 top-1/2 top-[250px] flex flex-col items-center rounded-2xl w-[700px] border border-grey/50 py-1 px-[27px] bg-white">
      {isCopied ? (
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold text-base leading-5 text-center">
            ¡Copiado!
          </p>
          <p className="font-normal text-base leading-5 text-center">
            Los datos han sido copiados con éxito. Podés hacer una transferencia
            por Banco o Billetera Virtual.
          </p>
        </div>
      ) : isLinkClicked ? (
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold text-base leading-5 text-center">
            ¡Gracias!
          </p>
          <p className="font-normal text-base leading-5 text-center">
            Gracias por colaborar con Soplo de Vida. Todas las donaciones
            recibidas son para el cuidado de los perritos y gatitos del refugio.
          </p>
        </div>
      ) : (
        <>
          <span onClick={togglePopUp} className="cursor-pointer place-self-end">
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
                  <button
                    onClick={() => handleCopyClick("2590095010349204910083")}
                    className="ml-[8px]"
                  >
                    <img src="/copy.svg" alt="" />
                  </button>
                </p>
                <p className="font-normal text-md leading-8">
                  Alias:{" "}
                  <span className="font-bold leading-5 text-base">
                    FUND.SOPLO.DE.VIDA
                  </span>
                  <button
                    onClick={() => handleCopyClick("FUND.SOPLO.DE.VIDA")}
                    className="ml-[8px] "
                  >
                    <img src="/copy.svg" alt="" />
                  </button>
                </p>

                <Button
                  variant="secondary"
                  size="large"
                  customStyles={customButtonStyles}
                  text="Copiar todos los datos"
                  onClick={() => handleCopyClick(bankAccountText)}
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
                  onClick={handleLinkClick}
                  link="https://www.mercadopago.com/mla/checkout/start?pref_id=399791858-3ce763ad-4a54-4f3f-b8f5-58a8882f189a"
                  customStyles={customButtonStyles}
                />
                <Button
                  variant="secondary"
                  size="large"
                  text="Donar $5.000"
                  link="https://mpago.la/33iDiF2"
                  onClick={handleLinkClick}
                  customStyles={customButtonStyles}
                />
                <Button
                  variant="secondary"
                  size="large"
                  text="Donar $10.000"
                  onClick={handleLinkClick}
                  link="https://mpago.la/2sV7mGx"
                  customStyles={customButtonStyles}
                />
                <Button
                  variant="primary"
                  size="large"
                  text="Otro monto"
                  onClick={handleLinkClick}
                  link="https://link.mercadopago.com.ar/soplodevida"
                  customStyles={customButtonStyles}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
