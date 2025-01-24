import React from 'react';
import { Card } from '@/components/catalog/Card/Card';
import useAnimals from '@/hooks/useAnimals';

const AnimalCards = () => {
 
  const { animals, loading, error } = useAnimals();

  //Cambiar por componente loader cuando haya (o lo cree)
  if (loading) {
    return <div>Loading...</div>;
  }

  //Cambiar por componente de error cuando haya (o lo cree)
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id='cards-section' className="grid grid-cols-2 grid-rows-4 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      {animals.map((animal, index) => (
        <Card
          key={index.id}
          image={animal.images[0]}
          name={animal.name}
          age={animal.age}
        />
      ))}
    </div>
  );
};

export default AnimalCards;