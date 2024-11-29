'use client';
import { Button } from "@/components/shared/Button";
import { useMediaQuery } from "@uidotdev/usehooks";

export const Footer = () => {
  const isSmallDevice = useMediaQuery(
    "only screen and (max-width : 1439px)"
  );
  console.log(isSmallDevice)
  const isDesktop = useMediaQuery(
    "only screen and (min-width : 1440px)"
  );

  return <footer className="w-full bg-grey desktop:bg-secondary flex flex-col justify-evenly p-4 gap-5 items-start desktop:items-center">
    <div className="w-full flex flex-col tablet:flex-row justify-between items-center gap-1 tablet:items-start">
      <div className="flex tablet:flex-row flex-row-reverse w-[100%] tablet:w-auto desktop:w-2/6 justify-between desktop:justify-center gap-5">
        {
          isSmallDevice
            ? <img
              className="w-[57px] h-[52px]"
              src="/logo-soplo-de-vida.png"
              alt="soplo-de-vida-logo"
            />
            : <img
              className="mx-1"
              src="/logo-texto.png"
              alt="soplo-de-vida-logo"
            />
        }
        <div className="flex flex-col justify-between desktop:p-1 gap-1">
          <a
            className="font-normal leading-5 text-base hover:font-bold text-white desktop:text-grey"
            href="#nosotros"
          >Nosotros</a>
          <a
            className="font-normal leading-5 text-base hover:font-bold text-white desktop:text-grey"
            href="#testimonios"
          >Testimonios</a>
          <a
            className="font-normal leading-5 text-base hover:font-bold text-white desktop:text-grey"
            href="#ayudar"
          >Cómo ayudar</a>
          <a
            className="font-normal leading-5 text-base hover:font-bold text-white desktop:text-grey"
            href="#contactar"
          >Contactarme</a>
        </div>
      </div>
      {
        isDesktop
          ? <div className="flex flex-col items-center w-auto desktop:w-2/6 p-2">
            <h3 className="text-md font-bold ">¡Ayudá a un Soplito!</h3>
            <Button variant="primary" size="medium" text="Donar" customStyles={["m-1 w-4/6", "hover:bg-white", "hover:text-primary border-none"]} >Donar</Button>
          </div>
          : <></>
      }
      <div className="flex flex-row desktop:flex-col items-center w-[100%] tablet:w-auto desktop:w-2/6 h-fit">
        <p className="text-sm font-bold text-white desktop:text-grey w-[128px]">Seguinos en redes</p>
        <div className="flex flex-row justify-between w-fit gap-2 desktop:p-1">
          <a
            href="https://www.instagram.com/soplodevida_/?hl=es"
          >
            <img
              className="bg-primary p-1 rounded-lg w-[48px] h-[48px]"
              src="/icons/ig-logo.svg"
              alt="Instagram logo"
            />
          </a>
          <a
            href="https://www.facebook.com/SoplodeVidaAnimal/?locale=es_LA"
          >
            <img
              className="bg-[#1877F2] p-1 rounded-lg w-[48px] h-[48px]"
              src="/icons/fb-logo.svg"
              alt="Facebook logo"
            />
          </a>
          <a
            href="mailto:info@soplodevida.org"
          >
            <img
              className="bg-white p-1 rounded-lg w-[48px] h-[48px]"
              src="/icons/gmail-logo.svg"
              alt="Gmail logo"
            />
          </a>
        </div>
      </div>
    </div>
    <span className="text-sm font-bold text-white desktop:text-grey">© 2024, Fundación Soplo de Vida</span>
  </footer>;
};
