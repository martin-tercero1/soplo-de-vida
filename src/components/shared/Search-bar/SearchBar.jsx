import React from 'react';
import Image from 'next/image';
import searchIcon from '/public/icons/search.svg';
import sendIcon from '/public/icons/send.svg';

const SearchBar = () => {
  return (
    <div className="relative mb-[8px] w-[212px] sm:w-[70%] grid grid-cols-[auto_1fr_auto] items-center gap-2 border border-[#cecece] rounded-[10px] focus-within:border-primary">
      <div className="pl-[10px] flex items-center">
        <Image src={searchIcon} alt="Buscar" className="search-icon" />
      </div>
      <input
        id='search-bar'
        type='text'
        className='pl-[20px] py-[8px] border-none rounded-[10px] w-full focus:outline-none focus:pl-0'
        onFocus={(e) => {
          e.target.previousSibling.classList.add('hidden');
          e.target.classList.remove('pl-[10px]');
        }}
        onBlur={(e) => {
          e.target.previousSibling.classList.remove('hidden');
          e.target.classList.add('pl-[10px]');
        }}
      />
      <button className="absolute right-[-40px] top-1/2 transform -translate-y-1/2">
        <Image src={sendIcon} alt="Enviar" width={25} height={25} />
      </button>
    </div>
  );
};

export default SearchBar;