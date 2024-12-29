import { Button } from "@/components/shared/Button";

export const Footer = () => {
  return <section className="w-full bg-secondary flex flex-col justify-evenly p-4 items-center">
    <div className="w-full bg-secondary flex flex-row justify-between">
      <div className="flex flex-row w-2/6 justify-center">
        <img
          className="mx-1"
          src="/logo-texto.png"
          alt="soplo-de-vida-logo"
        />
        <div className="flex flex-col justify-between p-1">
          <a
            className="font-normal leading-5 text-base hover:font-bold text-grey"
            href="#nosotros"
          >Nosotros</a>
          <a
            className="font-normal leading-5 text-base hover:font-bold text-grey"
            href="#testimonios"
          >Testimonios</a>
          <a
            className="font-normal leading-5 text-base hover:font-bold text-grey"
            href="#ayudar"
          >Cómo ayudar</a>
          <a
            className="font-normal leading-5 text-base hover:font-bold text-grey"
            href="#contactar"
          >Contactarme</a>
        </div>
      </div>
      <div className="flex flex-col items-center w-2/6 p-2">
        <h3 className="text-md font-bold ">¡Ayudá a un Soplito!</h3>
        <Button variant="primary" size="medium" text="Donar" customStyles={["m-1 w-4/6", "hover:bg-white", "hover:text-primary"]} >Donar</Button>
      </div>
      <div className="flex flex-col items-center w-2/6">
        <p className="text-sm font-bold text-grey">Seguinos en redes</p>
        <div className="flex flex-row justify-center w-full p-1">
          <a
            href="https://www.instagram.com/soplodevida_/?hl=es"
          >
            <img
              className="mx-2 bg-primary p-1 rounded-lg w-[48px] h-[48px]"
              src="/ig-logo.svg"
              alt="Instagram logo"
            />
          </a>
          <a
            href="https://www.facebook.com/SoplodeVidaAnimal/?locale=es_LA"
          >
            <img
              className="mx-2 bg-[#1877F2] p-1 rounded-lg w-[48px] h-[48px]"
              src="/fb-logo.svg"
              alt="Facebook logo"
            />
          </a>
          <a
            href="mailto:info@soplodevida.org"
          >
            <img
              className="mx-2 bg-white p-1 rounded-lg w-[48px] h-[48px]"
              src="/gmail-logo.svg"
              alt="Gmail logo"
            />
          </a>
        </div>
      </div>
    </div>
    <span className="text-sm font-bold text-grey">© {new Date().getFullYear()}, Fundación Soplo de Vida</span>
  </section>;
};
