import React from 'react';

const FilterCard = ({ filter, image, onFilterClick }) => {
  return (
    <button
      className="relative border border-transparent rounded-[10px] p-[8px] overflow-hidden cursor-pointer transition-transform transform hover:scale-105 flex flex-col gap-[8px] 
      w-[136px] h-[96px]
      mobile:w-[136px] mobile:h-[96px]
      tablet:w-[296px] tablet:h-[158px]
      laptop:w-[324px] laptop:h-[152px]
      desktop:w-[324px] desktop:h-[152px]"
      onClick={() => onFilterClick(filter)}
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <span className="absolute border border-primary rounded-lg bottom-[8px] right-[8px] bg-white bg-opacity-50 px-[11.5px] py-[2.5px] font-sans text-sm font-semibold text-primary">
        {filter}
      </span>
    </button>
  );
};

export default FilterCard;