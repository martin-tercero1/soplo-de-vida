import Image from "next/image";
import { AboutCard } from "./AboutCard";

export const About = () => {
  const cardsInfo = [
    {
      title: "Misión",
      subTitle: " ¡Nuestros 'soplitos' cuentan con ustedes!",
      shortDescription:
        "Ser el puente hacia un hogar feliz para perros y gatos sin hogar.",
      longDescription:
        "Ser el nexo entre el pasado y el futuro de perros y gatos sin hogar. Encontrar el HOGAR para todos los animales que buscan crecer felices.",
      imageSrc: "/home/hiking.svg",
      bgColor: "FADBC7",
      imageAltText: "Imagen de referencia",
    },
    {
      title: "Visión",
      subTitle: " ¡Juntos podemos más!",
      shortDescription:
        "Actuar juntos por un mundo más justo para los vulnerables.",
      longDescription:
        "Concientizar con la ACCIÓN para que todos trabajemos juntos intentando un mundo más justo para los más vulnerables.",
      imageSrc: "/home/public.svg",
      bgColor: "D6EDF0",
      imageAltText: "Imagen de referencia",
    },
    {
      title: "Valores",
      subTitle: "¡Todos los ‘soplitos’ merecen un hogar!",
      shortDescription:
        "Todos merecemos un hogar que brinde seguridad y calma.",
      longDescription:
        "La palabra HOGAR es sinónimo de seguridad, de calma. Todos merecemos un hogar para no pasar frío, hambre y miedo.",
      imageSrc: "/home/diversity.svg",
      bgColor: "FAF5E3",
      imageAltText: "Imagen de referencia",
    },
    {
      title: "Adopciones",
      subTitle: "¡Animate a adoptar!",
      shortDescription:
        "Adoptar es dar una oportunidad de amar sin condiciones.",
      longDescription:
        "Adoptar es dar otra oportunidad, amar incondicionalmente y crecer con otro. Por eso, es nuestro pilar e incentivamos la adopción.",
      imageSrc: "/home/pets.svg", 
      bgColor: "E3DBEB",
      imageAltText: "Imagen de referencia",
    },
  ];

  return (
    <section
      id="nosotros"
      className="max-w-7xl mx-auto  scrolling-touch  laptop:overflow-x-hidden"
    >
      <div className="max-w-[1269px] bg-transparent flex flex-nowrap overflow-x-scroll px-2 py-3 gap-2 tablet:px-5 tablet:pt-5 tablet:pb-0 laptop:gap-1 laptop:px-0 laptop:py-[24px]">
        {cardsInfo.map((card, index) => (
          <AboutCard
            key={index}
            title={card.title}
            subTitle={card.subTitle}
            shortDescription={card.shortDescription}
            longDescription={card.longDescription}
            imageSrc={card.imageSrc}
            bgColor={card.bgColor}
            imageAltText={card.imageAltText}
          />
        ))}
      </div>
    </section>
  );
};
