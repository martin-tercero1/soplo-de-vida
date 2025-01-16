import { Card } from '@/components/catalog/Card/Card'
import React from 'react'

//mapear un array de animales para completar las cards por ej

export default function Catalog () {
    const animals = [
        { image: 'https://placehold.co/600x400', name: 'Gato', age: 1 },
        { image: 'https://placehold.co/600x400', name: 'Perro', age: 2 },
        { image: 'https://placehold.co/600x400', name: 'Conejo', age: 3 },
        { image: 'https://placehold.co/600x400', name: 'Hamster', age: 1 },
    ];

  return (
    <div className="p-2 grid grid-cols-2 grid-rows-4 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
    {animals.map((animal, index) => (
      <Card
        key={index}
        image={animal.image}
        name={animal.name}
        age={animal.age}
      />
    ))}
  </div>
  )
}
