import Image from "next/image";
import imageMaca from "./images/Macarena.png";
import imageFlor from "./images/flor.png"
import imageJuli from "./images/juli.png"
import imageFran from "./images/fran.png"
export const Testimonials = () => {
  const testimonios = [
    {
      name: "Macarena",
      picture: imageMaca,
      description:
        "En cada uno, sentí mi corazón crecer, romperse y regenerarse, porque puede ser muy duro verlos lastimados y sentir su sufrimiento, pero cada recuperación hace que el dolor desaparezca y solo quede gratitud.",
    },
    {
      name: "Flor",
      picture: imageFlor,
      description:
        "Transitar es un acto de amor hermoso y muy valioso. Es la posibilidad de abrir nuestro corazón a un animalito que quizás nunca supo lo que es un mimo, dormir calentito o escuchar una palabra con tono amigable.",
    },
    {
      name: "Juli",
      picture: imageJuli,
      description:
        "Soy parte porque sé que con Soplo de Vida les damos una nueva vida, una nueva oportunidad para que sean tan FELICES como siempre merecieron ser.",
    },
    {
      name: "Fran",
      picture: imageFran,
      description:
        "Ser voluntario me cambió la vida y sé que ayudé a cambiarle la vida a otros.",
    },
    {
      name: "Sabri",
      picture: imageMaca,
      description:
        "Es pura reciprocidad de cariño. Anímate y déjate enamorar por un tiempito.",
    },
  ];

  return (
    <div className="w-full h-[743px] flex flex-col items-center bg-red-100">
      <h1 className="font-bold text-black text-3xl mb-8 mt-4">Testimonios</h1>
      <div className="flex overflow-x-auto space-x-7 px-4">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="w-[326px] h-[570px] p-4 shadow-md rounded-lg flex-shrink-0 bg-white mt-10 ml-20"
          >
            <Image
              src={testimonio.picture}
              alt={`${testimonio.name}'s picture`}
              height={320}
              width={298}
              className="h-80 mb-4"
            />
            <h2 className="font-medium text-[#404552] text-center text-2xl">{testimonio.name}</h2>
            <p className="text-gray-600 font-normal text-center mt-4 text-base">&quot;{testimonio.description}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
};
