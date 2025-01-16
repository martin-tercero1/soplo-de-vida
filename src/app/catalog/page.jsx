"use client"

import AnimalCards from '@/components/catalog/Card/AnimalCards';
import { Card } from '@/components/catalog/Card/Card'
import { Header } from "@/components/home/Header";
import React, {useState} from 'react'

export default function Catalog () {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <Header togglePopUp={togglePopUp} />
      <div className='p-2'>
        <AnimalCards/>
      </div>
    </>
  )
}
