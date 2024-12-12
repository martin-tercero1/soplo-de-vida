
import Image from "next/image";
export default function HowWeDoIt(){
    const cardsInfo = [
        {
            title: "Rescate y recuperación",
            description:"Salvamos animales en riesgo, brindándoles atención médica, alimento y un lugar seguro de forma transitoria.",
            imageSrc: "/about/rescate-cachorros.webp",
            imageAlt: "Rescate de perritos"
        },
        {
            title: "Cuidados especializados",
            description: "Veterinarios y voluntarios ayudan a los soplitos a recuperar su salud con tratamientos y mucho amor.",
            imageSrc: "/about/cat.png",
            imageAlt: "Gato siendo atendido"
        },
        {
            title: "Búsqueda de hogares",
            description: "Conectamos animales con familias que les ofrecen un hogar lleno de cariño y compromiso.",
            imageSrc:"/about/sleptDogs.png",
            imageAlt: "Perritos durmiendo"
        },
        {
            title: "Educación y concientización",
            description: "Promovemos el cuidado responsable de animales a través de todas nuestros medios de comunicación.",
            imageSrc: "/about/womanSpeaker.jpeg",
            imageAlt: "Charla sobre el refugio"
        }
    ];

    return(
        <>
            <section id="howwedoit" className="mobile:m-4 desktop:mx-5">
                <div>
                    <h2 className="text-md text-black font-medium desktop:font-bold mb-[10px]">¿Cómo lo hacemos?</h2>
                </div>
                <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 gap-x-3">
                    {cardsInfo.map( (card, index) => (
                        <>
                            <div className="border border-[#CECECE] rounded-xl p-2 mobile:mb-4 flex mobile:flex-col desktop:flex-row gap-2">
                                 <div className="mobile:w-[100%] h-[164px] relative">
                                    <Image
                                        className="object-cover rounded-xl"
                                        fill={true}
                                        src={card.imageSrc}
                                        alt={card.imageAlt}
                                    />
                                 </div>
                                 <div>
                                    <h3 className="text-base text-primary mobile:font-bold tablet:font-semibold mt-1">{card.title}</h3>
                                    <p className="text-sm text-black mobile:font-bold tablet:font-normal">{card.description}</p>
                                 </div>
                            </div>
                        </>                        
                    ))}
                </div>
            </section>

        </>
    );
}