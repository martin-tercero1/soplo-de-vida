import { Button } from "@/components/shared/Button";
export const Contact = () => {
  return (
   <section className="flex flex-col items-center justify-center  gap-[18px] h-[480px] bg-light-yellow">
      <div>
        <h2 className="text-xl font-bold ">¡Contactate con nosotros!</h2>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <span className="text-md text-grey ">
        Llená el formulario y envianos tu contacto para que podamos comunicarnos con vos.
        </span>
        <Button variant="primary" customStyles={["px-[24px]", "py-[16px]", "whitespace-nowrap, text-md"]} text="Ir a formulario de adopciones" ></Button>
        <div className="flex flex-col items-center">
          <p className="text-md text-grey">O escribinos a:</p>
          <a className="text-md text-primary" href="#">info@soplodevida.org</a>
        </div>
      </div>
   </section>
  );
}; 