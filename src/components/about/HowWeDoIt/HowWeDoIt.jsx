
import Image from "next/image";
export default function HowWeDoIt(){
    const cardsInfo = [
        {
            title: "Rescate y recuperación",
            description:"Salvamos animales en riesgo, brindándoles atención médica, alimento y un lugar seguro de forma transitoria.",
            imageSrc: "/about/dogs.png"
        },
        {
            title: "Cuidados especializados",
            description: "Veterinarios y voluntarios ayudan a los soplitos a recuperar su salud con tratamientos y mucho amor.",
            imageSrc: "/about/cat.png"
        },
        {
            title: "Búsqueda de hogares",
            description: "Conectamos animales con familias que les ofrecen un hogar lleno de cariño y compromiso.",
            imageSrc:"/about/sleptDogs.png"
        },
        {
            title: "Educación y concientización",
            description: "Promovemos el cuidado responsable de animales a través de todas nuestros medios de comunicación.",
            imageSrc: "/about/womanSpeaker.jpeg"
        }
    ];

    return(
        <>
            <section id="howwedoit" className="m-4">
                <div>
                    <h2 className="text-md text-black font-medium mb-[10px]">¿Cómo lo hacemos?</h2>
                </div>
                <div className="grid grid-cols-1">
                    {cardsInfo.map( (card, index) => (
                        <>
                            <div className="border border-[#CECECE] rounded-xl p-2 mb-4">
                                 <div className="w-100% h-[164px] relative">
                                    <Image
                                        className="object-cover rounded-xl"
                                        fill={true}
                                        src={card.imageSrc}
                                    />
                                 </div>
                                <h3 className="text-base text-primary font-bold mt-1">{card.title}</h3>
                                <p className="text-sm text-black font-bold">{card.description}</p>
                            </div>
                        </>                        
                    ))}
                </div>
            </section>

        </>
    );
}