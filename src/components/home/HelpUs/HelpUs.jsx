import { HelpUsCards } from "./HelpUsCards";
import image1 from "../../../../public/help-us-1.png";
import image2 from "../../../../public/help-us-2.png";
import image3 from "../../../../public/help-us-3.png";
import image4 from "../../../../public/help-us-4.png";

export const HelpUs = () => {
    return <section
        id="ayudanos"
        className="flex flex-col items-center justify-center gap-[18px] h-fit bg-secondary p-5"
        >
        <h2 className="text-xl font-bold ">¿Cómo ayudar?</h2>
        <div className="overflow-hidden w-full h-fit flex flex-row justify-evenly flex-wrap gap-x-1 gap-y-3">
            <HelpUsCards
                imageUrl={image1}
                title={'Donaciones'}
                text={'Todas las donaciones se utilizan para el mantenimiento del refugio, tratamientos de salud y cuidado de los animales rescatados. Los comprobantes de pago son publicados.'}
                buttonText={'Donar'}
            />
            <HelpUsCards
                imageUrl={image2}
                title={'Voluntariados'}
                text={'Los voluntarios ayudan en el cuidado, traslado y gestión de los animales. También en comunicación y actividades del refugio como capacitaciones.'}
                buttonText={'Ser voluntario'}
            />
            <HelpUsCards
                imageUrl={image3}
                title={'Adopciones'}
                text={'Adoptando un soplito podés cambiarle la vida para siempre y ayudás a que otros animales callejeros puedan ingresar al refugio.'}
                buttonText={'Quiero adoptar'}
            />
            <HelpUsCards
                imageUrl={image4}
                title={'Tránsitos'}
                text={'Transitar es darle un hogar temporal a animales que no pueden quedarse en nuestro refugio. Así podemos cuidarlos hasta que una familia los adopte para siempre.'}
                buttonText={'Quiero transitar'}
            />
        </div>
        <div className="w-[619px] h-fit bg-white flex flex-col rounded-lg m-2 items-center shadow-md p-1">
            <h3 className="font-bold text-[#404552] text-[18px]">¡Agradecemos tu colaboración!</h3>
            <p className="text-gray-600 font-small">Con un pequeño gesto ayudás a varios soplitos a ser felices</p>
        </div>
    </section>;
};
