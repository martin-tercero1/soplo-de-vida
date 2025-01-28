import React, { useState } from 'react';
import Image from 'next/image';
import searchIcon from '/public/icons/search.svg';
import sendIcon from '/public/icons/send.svg';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-[8px] w-[212px] sm:w-[70%]">
      <div className={`relative flex items-center border border-[#cecece] rounded-[10px] focus-within:border-primary transition-all duration-300 ease-in-out ${isFocused ? 'w-[calc(100%+38px)]' : 'w-full'}`}>
        <div className="pl-[10px] flex items-center">
          <Image src={searchIcon} alt="Buscar" className="search-icon" />
        </div>
        <input
          id='search-bar'
          type='text'
          className='pl-[10px] py-[8px] border-none rounded-[10px] w-full focus:outline-none'
          onFocus={(e) => {
            setIsFocused(true);
            e.target.previousSibling.classList.add('hidden');
          }}
          onBlur={(e) => {
            setIsFocused(false);
            e.target.previousSibling.classList.remove('hidden');
          }}
        />
      </div>
      <button className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${isFocused ? 'right-[-94px]' : 'right-[-56px]'}`}>
        <Image src={sendIcon} alt="Enviar" width={25} height={25} />
      </button>
    </div>
  );
};

export default SearchBar;