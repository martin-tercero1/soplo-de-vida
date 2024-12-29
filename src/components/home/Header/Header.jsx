import { Antonio } from "next/font/google";
import { Button } from "@/components/shared/Button";

const antonio = Antonio({subsets: ['latin']})

export const Header = ({ togglePopUp }) => {

  return (
    <>
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
                <a
                  className="font-normal leading-5 text-base hover:font-bold text-primary"
                  href="#nosotros"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  className="font-normal leading-5 text-base hover:font-bold text-primary"
                  href="#testimonios"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  className="font-normal leading-5 text-base hover:font-bold text-primary"
                  href="#ayudar"
                >
                  Cómo Ayudar
                </a>
              </li>
              <li>
                <a
                  className="font-normal leading-5 text-base hover:font-bold text-primary"
                  href="#contactar"
                >
                  Contactarme
                </a>
              </li>
              <Button
                size="medium"
                variant="secondary"
                text="Donar"
                onClick={togglePopUp}
              ></Button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
