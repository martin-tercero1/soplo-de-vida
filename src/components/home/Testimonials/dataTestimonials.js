// import imageMaca from "../../../../public/macarena.png";
// import imageFlor from "../../../../public/flor.png";
// import imageJuli from "../../../../public/juli.png";
// import imageFran from "../../../../public/fran.png";
// import imageSabri from "../../../../public/sabri.png";

const imageMaca = "/home/macarena.png";
const imageFlor = "/home/flor.png";
const imageJuli = "/home/juli.png";
const imageFran = "/home/fran.png";
const imageSabri = "/home/sabri.png";

//SE AGREGA EL CUSTOM BORDER SOLO A LAS FOTOS CON BORDE BLANCO
const border = "shadow-gray-300 shadow-sm border-s-2";
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

    border,
  },
  {
    name: "Sabri",
    picture: imageSabri,
    description:
      "Es pura reciprocidad de cariño. Anímate y déjate enamorar por un tiempito.",
    border,
  },
];

export default testimonios;
