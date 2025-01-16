"use client"

import AnimalCards from '@/components/catalog/Card/AnimalCards';
import { Header } from "@/components/home/Header";
import React, {useState} from 'react'
import Image from 'next/image';
import backIcon from '/public/icons/back.svg';
import filterIcon from '/public/icons/filter.svg';

export default function Catalog () {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <Header togglePopUp={togglePopUp} />
      <div className='p-2 font-sans'>
        <button className="flex sm:hidden ">
          <Image src={backIcon} alt="Volver" className="mr-[9px] " />
          Volver
        </button>
        <h2 className='py-2 font-bold text-[18px]'>Nuestros soplitos</h2>
      {/**Search-bar*/}
        <div className="mb-[8px]">
          <input
          type='text'
          placeholder='Buscar'
          className='px-2 border border-grey rounded-[10px] w-[95%] '>
          </input>
        </div>
        {/**Filtros*/}
        <button className='flex py-[13.5] font-bold text-[14px]'>
          <Image src={filterIcon} alt="Filtros" className="mr-[9px]"/>
          Filtros
        </button>

        <AnimalCards/>
      </div>
    </>
  )
}
