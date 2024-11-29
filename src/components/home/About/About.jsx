import { Button } from "@/components/shared/Button";

export const About = () => {
  return (
      <section id="nosotros" className="p-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="text-center">
            <div className="bg-[#FADBC7] px-7 py-6 rounded-xl">
              <img
                className="mx-auto"
                src="/home/hiking.png"
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
                src="/home/public.png"
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
  );
};
