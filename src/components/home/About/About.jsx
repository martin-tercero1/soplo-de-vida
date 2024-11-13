import { Button } from "@/components/shared/Button";

export const About = () => {
  return (
    <>
      <section className="p-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="text-center">
            <div className="bg-[#FADBC7] px-7 py-6 rounded-xl">
              <img
                className="mx-auto"
                src="/hiking.png"
                alt="imagen de referencia"
              />
            </div>
            <h3 className="font-bold mt-2.5 text-[#404552] text-[18px]">
              Misión
            </h3>
            <p className="mt-2 text-[#404552] text-base">
              Ser el nexo entre el pasado y el futuro de perros y gatos sin
              hogar.  Encontrar el HOGAR para todos los animales que buscan
              crecer felices. .
            </p>
            <p className="mt-2 font-semibold text-[#404552]">
              ¡Nuestros &apos;soplitos&apos; cuentan con ustedes!
            </p>
          </div>
          <div className="text-center">
            <div className="bg-[#D6EDF0] px-7 py-6 rounded-xl">
              <img
                className="mx-auto"
                src="/public.png"
                alt="imagen de referencia"
              />
            </div>
            <h3 className="font-bold mt-2.5 text-[#404552] text-[18px]">
              Visión
            </h3>
            <p className="mt-2 text-[#404552] text-base">
              Concientizar con la ACCIÓN para que todos trabajemos juntos
              intentando un mundo más justo para los más vulnerables.
            </p>
            <p className="mt-2 font-semibold text-[#404552]">¡Juntos podemos más!</p>
          </div>
          <div className="text-center">
            <div className="bg-[#FAF5E3] px-7 py-6 rounded-xl">
              <img
                className="mx-auto"
                src="/Vector.png"
                alt="imagen de referencia"
              />
            </div>
            <h3 className="font-bold mt-2.5 text-[#404552] text-[18px]">
              Valores
            </h3>
            <p className="mt-2 text-[#404552] text-base">
              La palabra HOGAR es sinónimo de seguridad, de calma. Todos
              merecemos un hogar para no pasar frío, hambre y miedo.
            </p>
            <p className="mt-2 font-semibold text-[#404552]">
              ¡Todos los ‘soplitos’ merecen un hogar!
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#E3DBEB] px-7 py-6 rounded-xl">
              <img
                className="mx-auto"
                src="/pets.png"
                alt="imagen de referencia"
              />
            </div>
            <h3 className="font-bold mt-2.5 text-[#404552] text-[18px]">
              Adopciones
            </h3>
            <p className="mt-2 text-[#404552] text-base">
              Adoptar es dar otra oportunidad, amar incondicionalmente y crecer
              con otro. Por eso, es nuestro pilar e incentivamos la adopción.
            </p>
            <p className="mt-2 font-semibold text-[#404552]">¡Animate a adoptar!</p>
          </div>
        </div>
      </section>
      {/* <!--sección principal con imagen y descripción--> */}
      <section className="px-8 py-5 bg-[#FAF5E3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2  md:mb-0">
            <div className="rounded-lg overflow-hidden w-[515px] h-[557px]">
              <img
                className="mx-auto justify-center object-cover w-full h-full rounded-lg"
                src="/Vector 6.png"
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
              </a> */}
              <Button variant="secondary" size="large" text="Ser voluntario" />
              {/* <a
                href="#"
                className="text-[#404552] text-[24px] w-[209px] h-[65px] text-center pt-3 mt-12 bg-[#50276A] text-white px-4 py-2 rounded-md hover:bg-[#E3DBEB] hover:text-black border border-[#50276A]
           "
              >
                Donar
              </a> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--sección de estadísticas--> */}
      <section className="py-6.5 bg-white">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="flex justify-center">
            <img
              className="pl-[240px]"
              src="/Group 4.png"
              alt="imagen de referencia"
            />
            <img
              className="ml-4"
              src="/Group 3.png"
              alt="imagen de referencia"
            />
          </div>
          <div className="md:text-left">
            <p className="text-lg text-[#404552] ml-6 text-base">
              Actualmente hay más de
            </p>
            <p className="text-4xl font-bold text-[#404552] mt-10 tracking-[0.2em] ml-6 text-[24px]">
              1,500 perros y gatos en el refugio
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
