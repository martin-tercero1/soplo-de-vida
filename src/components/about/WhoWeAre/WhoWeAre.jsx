import Image from "next/image";

export default function WhoWeAre(){

    return(
        <>
            <section id="whoweare" className="flex flex-col gap-4 m-4">
                <div className='w-[100%] h-[200px] relative'>
                    <Image 
                        className="w-full rounded-xl"
                        fill={true}
                        src= "/about/voluntariados.png"
                        alt=''
                    />
                </div>
                <div>
                    <h2 className="text-md text-black font-medium mb-[10px]">¿Quiénes Somos?</h2>
                    <p className="font-light text-grey text-base">
                        En Soplito de Vida, creemos que cada animalito merece una segunda oportunidad para ser feliz. 
                        Somos un grupo de 14 mujeres organizadas en esta ONG que trabaja incansablemente para mejorar
                        la salud y el bienestar de animales que han sido abandonados, maltratados o que están en 
                        situación de calle.
                    </p>
                    <p className="font-light text-grey text-base">
                        Nuestra misión es brindarles los cuidados necesarios para que recuperen su salud y confianza, 
                        mientras buscamos hogares amorosos y responsables donde puedan tener la vida digna que merecen.
                    </p>
                </div>
            </section>
        </>
    );
}