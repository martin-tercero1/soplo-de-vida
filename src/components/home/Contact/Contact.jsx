import { Button } from "@/components/shared/Button";
export const Contact = () => {
  return (
    <section
      id="contactar"
      className="flex flex-col items-center justify-center  gap-[18px] h-[480px] bg-light-yellow"
    >
      <div>
        <h2 className="text-xl font-bold ">¡Contactate con nosotros!</h2>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <span className="text-md font-bold text-grey text-center">
          Llená el formulario y envianos tu contacto para que podamos
          comunicarnos con vos.
        </span>
        <Button
          size="large"
          variant="primary"
          customStyles={["w-auto", "underline", "font-bold"]}
          text="Ir a formulario de adopciones"
          link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
        ></Button>
        <div className="flex flex-col items-center">
          <p className="text-md text-grey font-semibold">O escribinos a:</p>
          <a
            className="text-md text-[#0082D8]"
            href="mailto:info@soplodevida.org"
          >
            info@soplodevida.org
          </a>
        </div>
      </div>
    </section>
  );
}; 