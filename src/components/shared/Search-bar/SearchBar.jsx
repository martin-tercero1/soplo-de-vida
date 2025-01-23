import React from 'react';
import Image from 'next/image';
import searchIcon from '/public/icons/search.svg';
import sendIcon from '/public/icons/send.svg';

const SearchBar = () => {
  return (
    <div className="relative mb-[8px] w-[212px] sm:w-[70%] grid grid-cols-[auto_1fr_auto] items-center gap-2 border border-[#cecece] rounded-[10px] focus-within:border-primary">
    <div className="pl-2 flex items-center">
      <Image src={searchIcon} alt="Buscar" className="search-icon" />
    </div>
    <input
      id='search-bar'
      type='text'
      className='py-[8px] border-none rounded-[10px] w-full focus:outline-none'
      onFocus={(e) => e.target.previousSibling.firstChild.classList.add('invisible')}
      onBlur={(e) => e.target.previousSibling.firstChild.classList.remove('invisible')}
    />
      <button className="absolute right-[-56px] top-1/2 transform -translate-y-1/2">
        <Image src={sendIcon} alt="Enviar" />
      </button>
  </div>
  );
};

export default SearchBar;