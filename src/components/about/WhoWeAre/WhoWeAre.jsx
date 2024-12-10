import Image from "next/image";

export default function WhoWeAre(){

    return(
        <>
            <section id="whoweare" className="flex mobile:flex-col tablet:flex-row gap-4 mobile:m-4 desktop:mx-5">
                <div className='w-[100%] mobile:h-[200px] tablet:h-[344px] tablet:max-h-[344px] relative'>
                    <Image 
                        className="w-full rounded-xl"
                        fill={true}
                        src= "/about/voluntariados.png"
                        alt='Equipo de soplo de vida'
                    />
                </div>
                <div className="flex flex-col justify-center w-[100%]">
                    <h2 className="mobile:text-md tablet:text-md text-black font-medium desktop:font-bold mb-[10px]">¿Quiénes Somos?</h2>
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