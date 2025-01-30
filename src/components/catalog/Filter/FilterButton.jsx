import React from 'react';
import Image from 'next/image';
import filterIcon from '/public/icons/filter.svg';

const FilterButton = ({ onClearFilters }) => {
  return (
    <div id='filter-section' className='flex my-[13.5px]'>
      <button id='filter-button' className='flex font-bold text-[14px]'>
        <Image src={filterIcon} alt="Filtros" className="mr-[9px]" />
        Filtros
      </button>
      <button id='clear-filters' className='underline font-normal text-[9px] ml-[9px]' onClick={onClearFilters}>
        Limpiar filtros
      </button>
    </div>
  );
};

export default FilterButton;