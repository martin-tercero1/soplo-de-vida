import { Slide } from "./Slide";

export const HeroCarousel = () => {
  return (
    <section className="w-100vw h-[481px] bg-hero-slide-1 bg-[center_top_-270px] bg-cover bg-no-repeat flex flex-col">
      {/* <Slide
          title="Adoptá un <b>soplito</b>"
          subtitle={}
          description="Nuestros soplitos están esperando una familia que los cuide, quiera y
          les den la posibilidad de cambiar su vida. Adoptar es un acto de amor
          incondicional."
        ></Slide> */}
      <Slide
        title="Campaña "
        subtitle="de tránsitos"
        description="A veces no podemos adoptar una mascota pero podemos ayudar dando un
          hogar temporal y cariño. Transitando nos ayudás a rescatar más
          animales sin hogar."
      ></Slide>
      {/* <Slide
          title="Capacitación <b>de voluntarios</b>"
          description="Todos los voluntarios necesitan aprender sobre el funcionamiento del
          refugio y cómo tratar con distintos animales en situación de
          vulnerabilidad. ¡Participá de nuestras capacitaciones!"
        ></Slide>
        <Slide
          title="Capacitación <b>de castraciones</b>"
          description="Castrando a perros y gatos callejeros ayudamos a disminuir la cantidad
          de perros sin hogar."
        ></Slide> */}
    </section>
  );
};
