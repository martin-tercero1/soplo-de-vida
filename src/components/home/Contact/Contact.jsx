import { Button } from "@/components/shared/Button";
export const Contact = () => {
  return (
    <section
      id="contactar"
      className="flex flex-col items-center justify-center  gap-[18px] laptop:h-[480px] mobile:h-auto bg-light-yellow tablet:px-4 tablet:py-4 mobile:px-2 mobile:py-2"
    >
      <div>
        <h2 className="laptop:text-xl tablet:text-md mobile:text-md tablet:text-grey mobile:text-grey font-bold">¡Contactate con nosotros!</h2>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <span className="laptop:text-md tablet:text-base mobile:text-base laptop:font-bold mobile:font-normal text-grey text-center">
          Llená el formulario y envianos tu contacto para que podamos
          comunicarnos con vos.
        </span>
        <Button
          size="large"
          variant="primary"
          customStyles={["w-auto", "underline", "font-bold", "mobile:text-base"]}
          text="Ir a formulario de adopciones"
          link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
        ></Button>
        
        <div className="flex flex-col items-center">
          <p className="laptop:text-md tablet:text-base mobile:text-base text-grey font-semibold">O escribinos a:</p>
          <Button
          size="large"
          variant="tertiary"
          customStyles={["w-auto", "underline", "font-medium", "laptop:outline-[1px] tablet:outline-[1px] mobile:outline-[0px]", "text-[#0082D8]", "mobile:text-base"]}
          text="info@soplodevida.org"
          link="mailto:info@soplodevida.org"
        ></Button>
        </div>
        
      </div>
    </section>
  );
}; 