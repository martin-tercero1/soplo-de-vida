import React from 'react';
import FilterCard from '@/components/catalog/Filter/FilterCard';
import SearchBar from '@/components/shared/Search-bar/SearchBar';
import FilterButton from '@/components/catalog/Filter/FilterButton';

const FiltersSection = ({ filters, onFilterClick, onClearFilters }) => {
  return (
    <>
      {/* Contenedor para tablet, laptop y desktop */}
      <div id="Search-bar-Tablet-Desktop" className='hidden tablet:flex tablet:flex-row tablet:justify-center tablet:items-center gap-4 laptop:px-[40px] desktop:px-[40px]'>
        <SearchBar />
        <FilterButton onClearFilters={onClearFilters} />
      </div>

      {/* Contenedor para mobile */}
      <div id='Search-bar-Mobile' className='flex flex-col tablet:hidden gap-4 laptop:px-[40px] desktop:px-[40px]'>
        <SearchBar />
      </div>

      <div id='filter-cards' className='flex gap-4 justify-center items-center
      laptop:px-[40px] 
      desktop:px-[40px]'>
        {filters.map((filter, index) => (
          <FilterCard
            key={index}
            filter={filter.type}
            image={filter.image}
            onFilterClick={onFilterClick}
          />
        ))}
      </div>

      {/* FilterButton para mobile */}
      <div id='FilterButton-Mobile' className='flex flex-col tablet:hidden gap-4 laptop:px-[40px] desktop:px-[40px]'>
        <FilterButton onClearFilters={onClearFilters} />
      </div>
    </>
  );
};

export default FiltersSection;