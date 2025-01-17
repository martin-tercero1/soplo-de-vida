"use client"

import AnimalCards from '@/components/catalog/Card/AnimalCards';
import { Header } from "@/components/home/Header";
import React, {useState} from 'react'
import Image from 'next/image';
import backIcon from '/public/icons/back.svg';
import filterIcon from '/public/icons/filter.svg';
import FilterCard from '@/components/catalog/Filter/FilterCard';
import FiltersSection from '@/components/catalog/Filter/FiltersSection';

export default function Catalog () {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible((prevValue) => !prevValue);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
 
  };

  const handleClearFilters = () => {
  };

  //Listado de filtros de animales (escalable :D)
  const filters = [
    { type: 'Perro', image: '/home/slide-image-1.png' },
    { type: 'Gato', image: '/home/voluntariados.jpg' }
  ];

  return (
    <>
      <Header togglePopUp={togglePopUp} />

      <div className='p-2 font-sans'>
        <button id='back-button' className="flex sm:hidden ">
          <Image src={backIcon} alt="Volver" className="mr-[9px] " />
          Volver
        </button>
        <h2 className='py-2 font-bold text-[18px]'>Nuestros soplitos</h2>

      {/**Search-bar*/}
        <div className="mb-[8px]">
          <input
          id='search-bar'
          type='text'
          placeholder='Buscar'
          className='px-2 border border-[#cecece] rounded-[10px] w-[95%] focus:border-primary'>
          </input>
        </div>

        <FiltersSection filters={filters} onFilterClick={handleFilterClick} onClearFilters={handleClearFilters} />
        <AnimalCards/>
      </div>
    </>
  )
}
