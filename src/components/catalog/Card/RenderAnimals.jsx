import React from "react";
import { Card } from "./Card";

const RenderAnimals = ({ animals }) => {
  if (!animals || animals.length === 0) {
    return <div>No hay animales para mostrar.</div>;
  }

  const gridClasses = `
    grid gap-y-1 gap-x-2 
    mobile:grid-cols-2 
    tablet:grid-cols-3 tablet:gap-y-2 
    laptop:grid-cols-4 laptop:gap-y-4 
    desktop:grid-cols-4 desktop:gap-y-4 desktop:gap-x-3
  `;

  return (
    <div className={gridClasses}>
      {animals.map((animal) => (
        <Card
          key={animal.id}
          image={animal.images[0]}
          name={animal.name}
          age={animal.age}
          onClick={undefined}
        />
      ))}
    </div>
  );
};

export default RenderAnimals;
