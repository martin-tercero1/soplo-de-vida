import Image from "next/image";
import { Button } from "@/components/shared/Button";

export function Requirements() {
  return (
    <section className="hidden tablet:block tablet:my-4 laptop:my-3">
      <h2 className="laptop:text-2xl text-[35px] text-grey font-bold mb-3 leading-[42px]">
        Requisitos de adopción
      </h2>
      <p className="text-sm text-grey font-normal leading-[21px] laptop:text-base">
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
      <p className=" laptop:text-base text-sm text-grey font-normal my-1 leading-[21px]">
        En nuestro catálogo de adopción, descubrirás a mascotas llenas de amor,
        listos para formar parte de tu familia.
      </p>

      <div className="flex flex-col justify-center w-[100%] laptop:flex-row">
        <div className="laptop:max-w-[780px]">
          <ul className="list-disc mx-3 space-y-2">
            <li className=" laptop:text-base text-grey font-normal text-sm leading-[21px]">
              <span className="font-bold text-primary text-base">
                Formulario de Pre-adopción:
              </span>
              &nbsp;El primer paso es completar un formulario, para conocerte
              mejor y asegurarnos de que la adopción sea adecuada para ambos.
            </li>
            <li className=" laptop:text-base text-grey font-normal text-sm leading-[21px]">
              <span className="font-bold text-primary text-base">
                Revisión y Entrevista:
              </span>
              &nbsp;Después de recibir el formulario, Soplo de Vida se pondrá en
              contacto contigo para coordinar una entrevista. Este espacio es
              para resolver tus dudas y asegurarnos de que estás preparado para
              dar a tu nuevo amigo un hogar.
            </li>
            <li className=" laptop:text-base text-grey font-normal text-sm leading-[21px]">
              <span className="font-bold text-primary text-base">
                Compromiso de Seguimiento:
              </span>
              &nbsp; Al adoptar, te comprometés a mantenernos informados sobre
              el bienestar de tu mascota. Te pediremos que envíes fotos y videos
              para seguir su crecimiento y asegurarnos de que está bien.
            </li>
            <li className=" laptop:text-base text-grey font-normal text-sm leading-[21px]">
              <span className="font-bold text-primary text-base">
                Actualización de Datos:
              </span>
              &nbsp;Es importante que mantengas tus datos de contacto
              actualizados. Ante la falta de comunicación o alteración de los
              datos personales del adoptante, el refugio se reserva el derecho
              de retirar al animal por su seguridad.
            </li>
            <li className=" laptop:text-base text-grey font-normal text-sm leading-[21px]">
              <span className="font-bold text-primary text-base">
                Atenciones Médicas y Responsabilidades:
              </span>
              &nbsp; Mantener al día las desparasitaciones y vacunaciones,
              colocar una chapita identificatoria y castrar a tu mascota una vez
              que cumpla un año.
            </li>
          </ul>
          <p className="laptop:mt-1 my-3 laptop:text-base text-grey font-normal">
            🐾 Adoptar es un acto de amor y un compromiso de por vida. Si estás
            listo para ofrecerle un hogar lleno de cariño a tu nuevo compañero,
            ¡Hacelo hoy mismo! Adoptá ahora y empiecen esta hermosa historia
            juntos. 🐾
          </p>
        </div>
        <div className="tablet:w-[237px] laptop:w-[402px] h-auto relative">
          <Image
            className=""
            fill={true}
            src="/shared/requirements.png"
            alt="Equipo de soplo de vida"
          />
        </div>
      </div>
      <div className="my-3 flex justify-center laptop:justify-start">
        <Button
          text="Ir a Preguntas Frecuentes"
          variant="secondary"
          link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
          customStyles={[
            "w-[324px]",
            "h-[56px]",
            "text-base",
            "font-bold",
            "outline-1",
            "leading-[24px]",
            "laptop:leading-[32px]",
            "laptop:w-[334px]",
            "laptop:h-[65px]",
            "laptop:text-md",
          ]}
        />
      </div>
    </section>
  );
}
