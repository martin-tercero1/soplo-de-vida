"use client";
import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import { usePathname } from "next/navigation";
import { Button } from "@/components/shared/Button";
import Image from "next/image";

export const Footer = ({ urlList }) => {
  const pathname = usePathname();
  const isCatalog = pathname.startsWith("/catalogo");

  const [isSmallDevice, setIsSmallDevice] = useState(false); // State to track small device
  const [isDesktop, setIsDesktop] = useState(false); // State to track desktop size

  // useEffect to handle client-side media query check
  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(
        window.matchMedia("only screen and (max-width: 1439px)").matches
      );
      setIsDesktop(
        window.matchMedia("only screen and (min-width: 1440px)").matches
      );
    };

    handleResize(); // Check initial size on mount
    window.addEventListener("resize", handleResize); // Listen for window resize

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to only run this effect on mount

  return (
    <footer className={`${isCatalog ? "hidden": ""} w-full bg-grey desktop:bg-secondary flex flex-col justify-evenly p-4 gap-5 items-start desktop:items-center`}>
      <div className="w-full flex flex-col tablet:flex-row justify-between items-center gap-1 tablet:items-start">
        <div className="flex tablet:flex-row flex-row-reverse w-[100%] tablet:w-auto desktop:w-2/6 justify-between desktop:justify-center gap-5">
          {isSmallDevice ? (
            <img
              className="w-[57px] h-[52px]"
              src="/logo-soplo-de-vida.svg"
              alt="soplo-de-vida-logo"
            />
          ) : (
            <img
              className="mx-1"
              src="/logo-texto.svg"
              alt="soplo-de-vida-logo"
            />
          )}
          <div className="flex flex-col justify-between desktop:p-1 gap-1">
            {urlList.map((url, index) => (
              <a
                key={index}
                className="font-normal leading-5 text-base hover:font-bold text-white desktop:text-grey"
                href={url.href}
              >
                {url.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-col items-center w-auto desktop:w-2/6 p-2 hidden laptop:flex">
          <h3 className="text-md font-bold">¡Ayudá a un Soplito!</h3>
          <Button
            variant="primary"
            size="medium"
            text="Donar"
            customStyles={[
              "m-1 w-4/6",
              "hover:bg-white",
              "hover:text-primary outline-none",
            ]}
          >
            Donar
          </Button>
        </div>
        <div className="flex flex-row desktop:flex-col items-center w-[100%] tablet:w-auto desktop:w-2/6 h-fit">
          <p className="text-sm font-bold text-white desktop:text-grey w-[128px] laptop:mr-5">
            Seguinos en redes
          </p>
          <div className="flex flex-row justify-between w-fit gap-2 desktop:p-1">
            <div className="relative w-3 h-3 tablet:w-4 tablet:h-4 laptop:w-5 laptop:h-5 bg-primary rounded-lg">
              <a
                target="_blank"
                href="https://www.instagram.com/soplodevida_/?hl=es"
              >
                <Image
                  className="p-[4px] tablet:p-[8px] laptop:p-[10px]"
                  src="/icons/ig-logo.svg"
                  alt="Instagram logo"
                  fill
                />
              </a>
            </div>
            <div className="relative w-3 h-3 tablet:w-4 tablet:h-4 laptop:w-5 laptop:h-5 bg-[#1877F2] rounded-lg">
              <a
                target="_blank"
                href="https://www.facebook.com/SoplodeVidaAnimal/?locale=es_LA"
              >
                <Image
                  className="p-[4px] tablet:p-[8px] laptop:p-[10px]"
                  src="/icons/fb-logo.svg"
                  alt="Facebook logo"
                  fill
                />
              </a>
            </div>
            <div className=" bg-white relative w-3 h-3 tablet:w-4 tablet:h-4 laptop:w-5 laptop:h-5 rounded-lg">
              <a href="mailto:info@soplodevida.org" target="_blank">
                <Image
                  className="p-[4px] tablet:p-[8px] laptop:p-[10px]"
                  src="/icons/gmail-logo.svg"
                  alt="Gmail logo"
                  fill
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="text-sm font-bold text-grey">
        © {new Date().getFullYear()}, Fundación Soplo de Vida
      </span>
    </footer>
  );
};
