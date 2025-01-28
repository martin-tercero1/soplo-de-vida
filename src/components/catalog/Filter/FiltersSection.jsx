import React from 'react';
import FilterCard from '@/components/catalog/Filter/FilterCard';
import Image from 'next/image';
import filterIcon from '/public/icons/filter.svg';

const FiltersSection = ({ filters, onFilterClick, onClearFilters }) => {
  return (
    <>
      <div id='filter-cards' className='flex gap-4'>
        {filters.map((filter, index) => (
          <FilterCard
            key={index}
            filter={filter.type}
            image={filter.image}
            onFilterClick={onFilterClick}
          />
        ))}
      </div>

      <div id='filter-section' className='flex my-[13.5px]'>
        <button id='filter-button' className='flex font-bold text-[14px]'>
          <Image src={filterIcon} alt="Filtros" className="mr-[9px]" />
          Filtros
        </button>
        <button id='clear-filters' className='underline font-normal text-[9px] ml-[9px]' onClick={onClearFilters}>
          Limpiar filtros
        </button>
      </div>
    </>
  );
};

export default FiltersSection;