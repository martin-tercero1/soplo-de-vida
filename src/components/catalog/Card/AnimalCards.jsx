import React, { useEffect, useState, useRef } from 'react';
import useAnimals from '@/hooks/useAnimals';
import RenderAnimals from './RenderAnimals.jsx';

const AnimalCards = () => {
  const [state, setState] = useState({
    currentPage: 1,
    displayedAnimals: [],
    hasMore: true,
  });
  const { animals, loading, error } = useAnimals(20, state.currentPage);
  const observer = useRef(null);

  const { currentPage, displayedAnimals, hasMore } = state;

  useEffect(() => {
    if (animals.length > 0) {
      const sortedAnimals = [...animals].sort((a, b) => b.urgency - a.urgency);
      setState((prevState) => ({
        ...prevState,
        displayedAnimals: [...prevState.displayedAnimals, ...sortedAnimals],
        hasMore: animals.length === 10,
      }));
    }
  }, [animals]);

  useEffect(() => {
    const element = document.querySelector('#scroll-anchor');
    if (!element) return;

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        setState((prevState) => ({
          ...prevState,
          currentPage: prevState.currentPage + 1,
        }));
      }
    });

    observer.current.observe(element);

    return () => observer.current?.disconnect();
  }, [hasMore]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const urgentAnimals = displayedAnimals.filter((animal) => animal.urgency);
  const nonUrgentAnimals = displayedAnimals.filter((animal) => !animal.urgency);

  return (
    <div id="cards-section">
      {urgentAnimals.length > 0 && (
        <div className="w-full bg-[#fadbc7] py-[18px] mb-4 col-span-full">
          <h2 className="font-bold pl-[30px]">Más urgentes</h2>
          <RenderAnimals animals={urgentAnimals} />
        </div>
      )}
      <RenderAnimals animals={nonUrgentAnimals} />
      <div id="scroll-anchor" />
    </div>
  );
};

export default AnimalCards;
