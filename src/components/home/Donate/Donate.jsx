import Image from "next/image";
import { DonatePopUp } from "./DonatePopUp";
import { Button } from "@/components/shared/Button";

export const Donate = ({togglePopup}) => {
  const customButtomStyles = [
    "w-[284px]",
    "h-[35px]",
    "tablet:w-[155px]",
    "tablet:h-[49px]",
    "laptop:w-[298px]",
    "laptop:h-[72px]",
  ];

  return (
    <>
      <section
        id="nosotros"
        className="grid grid-cols-1 gap-[19px] w-screen h-[594px] tablet:h-[385px] tablet:grid-cols-2 tablet:grid-rows-3 tablet:mt-4 tablet:gap-x-[1px] tablet:place-items-center laptop:max-w-[1216px] laptop:grid-rows-1 laptop:px-[40px] laptop:gap-x-[24px] laptop:gap-y-[1px]"
      >
        <div className="min-h-[222px] max-h-[289px] tablet:h-[289px] w-[320px] laptop:w-full laptop:h-[465px] tablet:row-span-2 laptop:row-span-2 place-self-center relative  ">
          <Image
            src="/home/nosotros.png"
            alt="Foto de equipo Soplo de Vida"
            fill
            objectFit="cover"
            className="h-auto w-full rounded-[8px] laptop:rounded-[14px]"
          />
        </div>

        <div className="flex flex-col gap-[8px] px-[16.5px] tablet:row-span-2 tablet:col-start-2 laptop:gap-[24px] tablet:max-w-[334px] laptop:max-w-full laptop:row-span-1">
          <h2 className="font-medium text-[20px] text-[#404542] leading-[25px] tablet:text-[18.64px] laptop:font-bold laptop:text-xl">
            Soplo de Vida
          </h2>
          <p className="font-normal text-[12px] leading-4 text-[#404542] tablet:text-[16px]">
            Soplo de Vida es una fundación de animales que al momento alberga
            más de 120 perros y gatos rescatados en pésimas condiciones. Todos
            ellos esperan ser adoptados por una familia.
          </p>
          <p className="font-normal text-[12px] leading-4 text-[#404542] tablet:text-[16px]">
            Además de este predio, contamos con voluntarios que ofrecen sus
            hogares para cuidar transitoriamente de los animales rescatados
            hasta su adopción. Los costos de ambas modalidades siempre corren
            por parte del refugio.
          </p>
          <p className="font-normal text-[12px] leading-4 text-[#404542] tablet:text-[16px]">
            La palabra HOGAR es sinónimo de seguridad, de calma. Nos remite
            instantáneamente a una atmósfera cálida repleta de respeto, paz y
            amor.
          </p>
        </div>

        <div className="px-[16.5px] flex flex-col gap-[19px] tablet:flex-row tablet:gap-[13px] tablet:h-1/3 tablet:row-start-3 laptop:row-start-2 tablet:col-start-1 laptop:col-start-2 laptop:flex-row-reverse laptop:w-full">
          <Button
            text={{
              mobile: "Quiero ser voluntario",
              tablet: "Ser voluntario",
              desktop: "Ser voluntario",
            }}
            link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
            customStyles={customButtomStyles}
          />
          <Button
            text={{
              mobile: "Quiero donar",
              tablet: "Donar",
              desktop: "Donar",
            }}
            onClick={togglePopup}
            variant="primary"
            customStyles={customButtomStyles}
          />
        </div>
      </section>
      <section className="w-full bg-secondary py-[8px] px-3 laptop:bg-transparent tablet:h-[90px] laptop:h-[170px] mb-3 tablet:mb-[42px] laptop:mb-[64px] mt-[64px]">
        <div className="flex items-center justify-center laptop:flex-row-reverse">
          <div className="max-w-[209px] laptop:max-w-[499px]">
            <p className="text-[#404552] font-normal text-[12px] leading-4 laptop:font-medium laptop:leading-6 laptop:text-md">
              Actualmente hay más de
            </p>
            <p className="font-bold text-[#404552] tracking-[0.2em] text-[16px] leading-5 tablet:font-black laptop:text-xl laptop:leading-10">
              130 perros y gatos en el refugio
            </p>
          </div>

          <div className="flex tablet:ml-2 laptop:mr-[18px]">
            <div className="min-w-[25px] min-h-[63px] laptop:min-w-[41px] laptop:min-h-[120px] flex relative mr-[5px]">
              <Image
                src="/home/Group 4.png"
                alt="Imagen de referencia"
                fill={true}
                className=""
              />
            </div>
            <div className="min-w-[25px] min-h-[70px] laptop:min-w-[42px] laptop:min-h-[139px] flex relative">
              <Image
                src="/home/Group 3.png"
                alt="Imagen de referencia"
                fill={true}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-8 py-5 bg-[#FAF5E3]">
        {/* sección principal con imagen y descripción 
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2  md:mb-0">
            <div className="rounded-lg overflow-hidden w-[515px] h-[557px]">
              <Image
                className="mx-auto justify-center object-cover w-full h-full rounded-lg"
                fill={true}
                src="/home/Vector 6.png"
                alt="Foto de equipo Soplo de Vida"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-4 self-center">
            <h2 className="text-[48px] font-medium text-[#404552] ml-2">
              Soplo de Vida
            </h2>
            <p className="mb-4 text-[#404552] ml-2 mr-3 mt-3 text-base">
              Soplo de Vida es una fundación de animales que al momento alberga
              más de 120 perros y gatos rescatados en pésimas condiciones. Todos
              ellos esperan ser adoptados por una familia. Además de este
              predio, contamos con voluntarios que ofrecen sus hogares para
              cuidar transitoriamente de los animales rescatados hasta su
              adopción. Los costos de ambas modalidades siempre corren por parte
              del refugio.
            </p>
            <p className="mb-4 text-[#404552] ml-2 pr-6 text-base">
              La palabra HOGAR es sinónimo de seguridad, de calma. Nos remite
              instantáneamente a una atmósfera cálida repleta de respeto, paz y
              amor.
            </p>
            <div className="flex justify-center md:justify-start gap-4 ml-2">
              <Button variant="primary" size="large" text="Donar" />
              {/* <a
                href="#"
                className=" text-[#404552] text-[24px] w-[209px] h-[65px] text-center pt-3 ml-2 mt-12 bg-transparent border border-[#50276A] text-black px-4 py-2 rounded-md hover:bg-[#E3DBEB] hover:text-black
           "
              >
                Ser voluntario
              </a> 
              <Button variant="secondary" size="large" text="Ser voluntario" />
              {/* <a
                href="#"
                className="text-[#404552] text-[24px] w-[209px] h-[65px] text-center pt-3 mt-12 bg-[#50276A] text-white px-4 py-2 rounded-md hover:bg-[#E3DBEB] hover:text-black border border-[#50276A]
           "
              >
                Donar
              </a> 
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
//comentario de prueba
