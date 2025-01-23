"use client"

import AnimalCards from '@/components/catalog/Card/AnimalCards';
import { Header } from "@/components/home/Header";
import React, {useState} from 'react'
import Image from 'next/image';
import backIcon from '/public/icons/back.svg';
import FiltersSection from '@/components/catalog/Filter/FiltersSection';
import SearchBar from '@/components/shared/Search-bar/SearchBar';

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
    { type: 'Gatos', image: '/filter/Gato-min.jpg' },
    { type: 'Perros', image: '/filter/Perro-min.jpg' }
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
        <SearchBar/>

        <FiltersSection filters={filters} onFilterClick={handleFilterClick} onClearFilters={handleClearFilters} />
        <AnimalCards/>
      </div>
    </>
  )
}
