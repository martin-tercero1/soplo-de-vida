"use client"
import { Button } from "@/components/shared/Button";
import { CopyInformation } from "./CopyInformation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const DonatePopUp = ({ togglePopUp }) => {
  const router = useRouter();

  const customButtonStyles = [
    "px-2",
    "py-1",
    "font-bold",
    "text-[16.5px]",
    "self-center",
    "mb-[8px]",
    "tablet:mb-0"
  ];

  const [isCopied, setIsCopied] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

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
    <div className="z-20 fixed ml-[-144px] mt-[-100px] tablet:mt-[-300px] tablet:ml-[-350px] left-1/2 top-1/2 flex flex-col items-center rounded-2xl w-[288px] h-[200px] tablet:h-auto tablet:w-[700px] border border-grey/50 py-1 px-[27px] bg-white">
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
          <p className="font-semibold text-[20px] tablet:text-base leading-[30px] tablet:leading-5 text-center">
            ¡Gracias por tu aporte!
          </p>
          <p className="font-normal text-base leading-6 tablet:leading-5 text-center">
            Gracias por colaborar con Soplo de Vida. Todas las donaciones
            recibidas son para el cuidado de los perritos y gatitos del refugio.
          </p>

          <Button
            variant="primary"
            size="large"
            customStyles={customButtonStyles}
            text="Cerrar"
          />
        </div>
      ) : (
        <>
          <span onClick={togglePopUp} className="cursor-pointer place-self-end">
            <img src="/icons/close.svg" alt="" />
          </span>
          <h4 className="text-primary tablet:text-xl text-base font-bold leading-5 tablet:leading-3 mb-1 tablet:mb-0">
            Donar
          </h4>
          <Button
            variant="primary"
            size="large"
            customStyles={[...customButtonStyles, "tablet:hidden"]}
            text="Mercado Pago"
            link="https://link.mercadopago.com.ar/soplodevida"
          />
          <Button
            variant="secondary"
            size="large"
            customStyles={[...customButtonStyles, "tablet:hidden"]}
            text="Transferencia"
            onClick={() => router.push("/transferir")}
          />
          <div className="hidden tablet:inline-flex mt-5 w-full pb-3">
            <CopyInformation setIsCopied={setIsCopied}></CopyInformation>

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
