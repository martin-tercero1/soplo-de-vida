import { Antonio } from "next/font/google";
import { Button } from "@/components/shared/Button";

const antonio = Antonio({subsets: ['latin']})

export const Header = () => {
  return (
    <header className="flex justify-between h-[88px] p-[15px] bg-white">
      <div className="flex justify-center items-center">
        <img src="/logo.png" alt="" />
        <span
          className={`${antonio.className} ml-3 text-violet font-normal text-base`}
        >
          Soplo de vida
        </span>
      </div>
      <div className="flex items-center">
        <nav>
          <ul className="flex items-center gap-3">
            <li>
              <a className="font-normal leading-5 text-base" href="#nosotros">
                Nosotros
              </a>
            </li>
            <li>
              <a
                className="font-normal leading-5 text-base"
                href="#testimonios"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a className="font-normal leading-5 text-base" href="#ayudar">
                Cómo Ayudar
              </a>
            </li>
            <li>
              <a className="font-normal leading-5 text-base" href="#contactar">
                Contactarme
              </a>
            </li>
            <Button size="medium" variant="secondary" text="Donar"></Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};
