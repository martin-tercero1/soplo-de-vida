"use client"

import AnimalCards from '@/components/catalog/Card/AnimalCards';
import { Card } from '@/components/catalog/Card/Card'
import { Header } from "@/components/home/Header";
import React, {useState} from 'react'
import Image from 'next/image';
import backIcon from '/public/icons/back.svg';

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
      <h2 className='pt-2 pb-2 font-bold text-[18px]'>Nuestros soplitos</h2>
        <AnimalCards/>
      </div>
    </>
  )
}
