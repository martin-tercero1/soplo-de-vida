import { useEffect, useState } from "react"; // Import useState and useEffect hooks
import { HelpUsCards } from "./HelpUsCards";
import image1 from "../../../../public/home/help-us-1.png";
import image2 from "../../../../public/home/help-us-2.png";
import image3 from "../../../../public/home/help-us-3.png";
import image4 from "../../../../public/home/help-us-4.png";

export const HelpUs = ({ togglePopup }) => {
  const [isLargeDevice, setIsLargeDevice] = useState(false); // State to manage client-side media query result

  useEffect(() => {
    const mediaQuery = window.matchMedia("only screen and (min-width: 1023px)");
    setIsLargeDevice(mediaQuery.matches); // Set the media query result on component mount

    const handleResize = () => {
      setIsLargeDevice(mediaQuery.matches); // Update state on window resize
    };

    // Add event listener to update the state when the window is resized
    mediaQuery.addEventListener("change", handleResize);

    // Clean up event listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <section
      id="ayudar"
      className="flex flex-col items-center justify-center gap-[18px] h-fit laptop:bg-secondary p-5 mobile:p-1"
    >
      <h2 className="text-xl font-bold mobile:text-md">¿Cómo ayudar?</h2>
      <div className="overflow-hidden w-full h-fit flex flex-row justify-center flex-wrap gap-3 pb-1">
        <HelpUsCards
          imageUrl={image1}
          title={"Donaciones"}
          text={
            isLargeDevice
              ? "Todas las donaciones se utilizan para el mantenimiento del refugio, tratamientos de salud y cuidado de los animales rescatados. Los comprobantes de pago son publicados."
              : "Ayudá a un soplito económicamente"
          }
          buttonText={"Donar"}
          togglePopup={togglePopup}
        />
        <HelpUsCards
          imageUrl={image2}
          title={"Voluntariados"}
          text={
            isLargeDevice
              ? "Los voluntarios ayudan en el cuidado, traslado y gestión de los animales. También en comunicación y actividades del refugio como capacitaciones."
              : "Participá en el refugio"
          }
          buttonText={"Ser voluntario"}
          link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
        />
        <HelpUsCards
          imageUrl={image3}
          title={"Adopciones"}
          text={
            isLargeDevice
              ? "Adoptando un soplito podés cambiarle la vida para siempre y ayudás a que otros animales callejeros puedan ingresar al refugio."
              : "Cambiale la vida a un soplito para siempre"
          }
          buttonText={"Quiero adoptar"}
          link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
        />
        <HelpUsCards
          imageUrl={image4}
          title={"Tránsitos"}
          text={
            isLargeDevice
              ? "Transitar es darle un hogar temporal a animales que no pueden quedarse en nuestro refugio. Así podemos cuidarlos hasta que una familia los adopte para siempre."
              : "Dale un hogar temporal a un soplito"
          }
          buttonText={"Quiero transitar"}
          link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
        />
      </div>
      <div className="hidden laptop:flex w-[619px] h-fit bg-white flex-col rounded-lg m-2 items-center shadow-md p-1">
        <h3 className="font-bold text-[#404552] text-[18px]">
          ¡Agradecemos tu colaboración!
        </h3>
        <p className="text-gray-600 font-small">
          Con un pequeño gesto ayudás a varios soplitos a ser felices
        </p>
      </div>
    </section>
  );
};
