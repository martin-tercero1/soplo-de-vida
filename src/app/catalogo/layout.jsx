"use client"

import { Header } from "@/components/home/Header";
import { useState } from "react";


export default function CatalogLayout({ children }) {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <Header togglePopUp={togglePopUp} />
      {children}
    </>
  );
}
