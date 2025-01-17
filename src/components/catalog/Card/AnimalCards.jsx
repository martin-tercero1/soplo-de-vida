import React from 'react';
import { Card } from '@/components/catalog/Card/Card';

const AnimalCards = () => {

    //Hardodeado, eliminar cuando conecte a API
    const animals = [
            { image: 'https://placehold.co/600x400', name: 'Gato', age: 1 },
            { image: 'https://placehold.co/600x400', name: 'Perro', age: 2 },
            { image: 'https://placehold.co/600x400', name: 'Gato jorge', age: 3 },
            { image: 'https://placehold.co/600x400', name: 'Perro pepe', age: 1 },
    ];
    
  return (
    <div id='cards-section' className="grid grid-cols-2 grid-rows-4 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      {animals.map((animal, index) => (
        <Card
          key={index}
          image={animal.image}
          name={animal.name}
          age={animal.age}
        />
      ))}
    </div>
  );
};

export default AnimalCards;