import { Antonio } from "next/font/google";
import { Button } from "@/components/shared/Button";
import { useState } from "react";
const antonio = Antonio({subsets: ['latin']})

export const Header = ({ togglePopUp }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between laptop:h-[88px] mobile:h-[60px] py-[15px] laptop:px-5 tablet:px-3 mobile:px-3 bg-white">
        <div className="flex justify-center items-center">
          {/* Mobile Logo */}
          <img
            src="/logo_mobile_tablet.png"
            alt="Soplo de Vida Mobile Logo"
            className="block tablet:hidden w-[34px] h-[32px]"
          />

          {/* Tablet Logo */}
          <img
            src="/logo_mobile_tablet.png"
            alt="Soplo de Vida Tablet Logo"
            className="hidden tablet:block laptop:hidden"
          />

          {/* Desktop Logo */}
          <img
            src="/logo.png"
            alt="Soplo de Vida Desktop Logo"
            className="hidden laptop:block"
          />
          <span
            className={`${antonio.className} ml-3 text-violet font-normal text-base hidden laptop:block`}
          >
            Soplo de vida
          </span>
        </div>
        
        <div className="flex items-center">
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <img src="/burger_menu.svg" alt="burger_menu" />
              </div>
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="self-end mr-3 mt-3"
                  onClick={() => setIsNavOpen(false)}
                >
                  <img src="/xicon.svg" className="w-3"/>
                </div>
                <ul className=" flex basis-4/6 flex-col items-center justify-between min-h-[250px] w-[90%] py-1">
                  <li className="bg-secondary w-full text-center p-3 rounded-md" onClick={() => setIsNavOpen(false)}>
                    <a
                      className="font-medium leading-5 text-base hover:font-bold text-black block"
                      href="#inicio"
                    >
                      Inicio
                    </a>
                  </li>
                  <li onClick={() => setIsNavOpen(false)}>
                    <a
                      className="font-medium leading-5 text-base hover:font-bold text-black"
                      href="#nosotros"
                    >
                      Nosotros
                    </a>
                  </li>
                  <li onClick={() => setIsNavOpen(false)}>
                    <a
                      className="font-medium leading-5 text-base hover:font-bold text-black"
                      href="#testimonios"
                    >
                      Testimonios
                    </a>
                  </li>
                  <li onClick={() => setIsNavOpen(false)}>
                    <a
                      className="font-medium leading-5 text-base hover:font-bold text-black"
                      href="#ayudar"
                    >
                      Cómo Ayudar
                    </a>
                  </li>
                  <li onClick={() => setIsNavOpen(false)}>
                    <a
                      className="font-medium leading-5 text-base hover:font-bold text-black"
                      href="#contactar"
                    >
                      Contactarme
                    </a>
                  </li>
                  <Button
                    size="medium"
                    variant="primary"
                    text="Donar"
                    customStyles={["w-full", ""]}
                    onClick={togglePopUp}
                  ></Button>
                </ul>
              </div>
            </section>
            <ul className="laptop:flex items-center gap-3 DESKTOP-MENU hidden space-x-1">
              <li>
                <a
                  className="font-normal leading-5 text-base hover:font-bold text-grey"
                  href="#nosotros"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  className="font-normal leading-5 text-base hover:font-bold text-grey"
                  href="#testimonios"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  className="font-normal leading-5 text-base hover:font-bold text-grey"
                  href="#ayudar"
                >
                  Cómo Ayudar
                </a>
              </li>
              <li>
                <a
                  className="font-normal leading-5 text-base hover:font-bold text-grey"
                  href="#contactar"
                >
                  Contactarme
                </a>
              </li>
              <Button
                size="medium"
                variant="primary"
                text="Donar"
                onClick={togglePopUp}
              ></Button>
            </ul>
          </nav>
        </div>
      </header>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    </>
  );
};
