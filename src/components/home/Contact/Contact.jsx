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
          <Button
          size="large"
          variant="tertiary"
          customStyles={["w-auto", "underline", "font-medium", "outline-[1px]", "text-[#0082D8]"]}
          text="info@soplodevida.org"
          link="mailto:info@soplodevida.org"
        ></Button>
        </div>
        
      </div>
    </section>
  );
}; 