"use client"

import AnimalCards from '@/components/catalog/Card/AnimalCards';
import React from 'react'
import Image from 'next/image';
import backIcon from '/public/icons/back.svg';
import FiltersSection from '@/components/catalog/Filter/FiltersSection';
import  SearchBar  from '@/components/shared/Search-bar/SearchBar';
import { Requirements } from "@/components/shared/Requirements";

export default function Catalog () {


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
      <section className='font-sans'>
        <div className='p-2'>
          <button id='back-button' className="flex sm:hidden ">
            <Image src={backIcon} alt="Volver" className="mr-[9px] " />
            Volver
          </button>
          <h2 className='py-2 font-bold text-[18px]'>Nuestros soplitos</h2>

          <FiltersSection filters={filters} onFilterClick={handleFilterClick} onClearFilters={handleClearFilters} />
        </div>
        <AnimalCards/>

        <Requirements/>
      </section>
    </>
  )
}
