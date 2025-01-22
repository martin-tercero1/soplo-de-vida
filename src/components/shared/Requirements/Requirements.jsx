import Image from "next/image";
import { Button } from "@/components/shared/Button";

export default function Requirements() {
  return (
    <>
      <h2 className="desktop:text-2xl text-grey font-bold">
        Requisitos de Adopción
      </h2>
      <p className=" desktop:text-base desktop:text-grey desktop:font-normal">
        Adoptar es un acto de amor y compromiso que transforma vidas, tanto la
        de tu nuevo compañero como la tuya. Al elegir adoptar, no solo le das un
        hogar a un ser lleno de cariño, sino que también asumes la
        responsabilidad de brindarle una vida llena de cuidados, respeto y
        dedicación. Si estás listo para ofrecerle un futuro lleno de amor y
        aventuras, recuerda que la adopción es un compromiso que dura toda la
        vida. ¡Haz la diferencia, adopta con el corazón y la responsabilidad que
        se merecen! En nuestro catálogo de adopción, descubrirás a mascotas
        llenas de amor, listos para formar parte de tu familia.
      </p>

      <div className="flex flex-row justify-center w-[100%]  desktop:mx-5">
        <div className="flex flex-col justify-center">
          <p className=" desktop:text-base desktop:text-grey desktop:font-normal">
            En nuestro catálogo de adopción, descubrirás a mascotas llenas de
            amor, listos para formar parte de tu familia.
          </p>
          <ul className="list-disc">
            <li className=" desktop:text-base desktop:text-grey desktop:font-normal">
              Formulario de Pre-adopción: El primer paso es completar un
              formulario, para conocerte mejor y asegurarnos de que la adopción
              sea adecuada para ambos.
            </li>
            <li className=" desktop:text-base desktop:text-grey desktop:font-normal">
              Revisión y Entrevista: Después de recibir el formulario, Soplo de
              Vida se pondrá en contacto contigo para coordinar una entrevista.
              Este espacio es para resolver tus dudas y asegurarnos de que estás
              preparado para dar a tu nuevo amigo un hogar.
            </li>
            <li className=" desktop:text-base desktop:text-grey desktop:font-normal">
              Compromiso de Seguimiento: Al adoptar, te comprometés a
              mantenernos informados sobre el bienestar de tu mascota. Te
              pediremos que envíes fotos y videos para seguir su crecimiento y
              asegurarnos de que está bien.
            </li>
            <li className=" desktop:text-base desktop:text-grey desktop:font-normal">
              Actualización de Datos: Es importante que mantengas tus datos de
              contacto actualizados. Ante la falta de comunicación o alteración
              de los datos personales del adoptante, el refugio se reserva el
              derecho de retirar al animal por su seguridad.
            </li>
            <li className=" desktop:text-base desktop:text-grey desktop:font-normal">
              Atenciones Médicas y Responsabilidades: Mantener al día las
              desparasitaciones y vacunaciones, colocar una chapita
              identificatoria y castrar a tu mascota una vez que cumpla un año.
            </li>
          </ul>
          <Button
            size="large"
            variant="primary"
            customStyles={[
              "mobile:w-auto  desktop:w-[300px]",
              "outline-transparent",
              "font-semibold",
              "mobile:text-base",
            ]}
            text="Quiero Aliarme"
            link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
          ></Button>
        </div>
        <div>
          <Image
            className=""
            width={500}
            height={500}
            src="/shared/requirements.png"
            alt="Equipo de soplo de vida"
          />
        </div>
      </div>
    </>
  );
}
