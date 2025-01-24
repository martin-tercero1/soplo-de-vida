import React from 'react';
import { Card } from '@/components/catalog/Card/Card';
import useAnimals from '@/hooks/useAnimals';
import { useState } from 'react';
import { useEffect } from 'react';

const AnimalCards = () => {
 
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedAnimals, setDisplayedAnimals] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { animals, loading, error } = useAnimals(20,currentPage);

  useEffect(() => {
    if (animals.length > 0) {
      setDisplayedAnimals((prevAnimals) => [...prevAnimals, ...animals]);
      setHasMore(animals.length === 10);
    }
  }, [animals]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) {
      return;
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  //Cambiar por componente loader cuando haya (o lo cree)
  if (loading) {
    return <div>Loading...</div>;
  }

  //Cambiar por componente de error cuando haya (o lo cree)
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const isMobileOrTablet = window.innerWidth < 1024;

  return (
    <div id='cards-section' className="grid grid-rows-4 gap-y-1 gap-x-2 
    mobile:grid-cols-2 
    tablet:grid-cols-3 tablet:gap-y-2 
    laptop:grid-cols-4 laptop:gap-y-4 
    desktop:grid-cols-4 desktop:gap-y-4 desktop:gap-x-3">
      {displayedAnimals.map((animal) => (
        <Card
          key={animal.id}
          image={animal.images[0]}
          name={animal.name}
          age={animal.age}
        />
      ))}
      {!isMobileOrTablet && (
        <div className="pagination">
          <button onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)} disabled={!hasMore}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AnimalCards;