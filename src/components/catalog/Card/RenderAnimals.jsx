import { useRouter } from "next/navigation";
import { Card } from "./Card";

const RenderAnimals = ({ animals }) => {
  const router = useRouter();

  if (!animals || animals.length === 0) {
    return <div>No hay animales para mostrar.</div>;
  }

  const gridClasses = `
    p-2
    grid gap-y-1 gap-x-2 
    mobile:grid-cols-2 
    tablet:grid-cols-3 tablet:gap-y-2 
    laptop:grid-cols-4 laptop:gap-y-4 
    desktop:grid-cols-4 desktop:gap-y-4 desktop:gap-x-3
  `;

  const goToAnimal = (id) => {
    console.log(`Go to animal with id: ${id}`);
    router.push(`/catalogo/${id}`);
  }

  return (
    <div className={gridClasses}>
      {animals.map((animal) => (
        <Card
          key={animal.id}
          image={animal.images[0]}
          name={animal.name}
          age={animal.age}
          onClick={() => goToAnimal(animal.id)}
        />
      ))}
    </div>
  );
};

export default RenderAnimals;
