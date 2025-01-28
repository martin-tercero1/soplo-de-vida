import React from 'react';

export const Card = ({ image, name, age, onClick }) => {
    return (
        <div id='animal-card'
            className="border border-violet rounded-[10px] p-[8px] overflow-hidden cursor-pointer transition-transform transform hover:scale-105  flex flex-col gap-[8px] w-[136px] h-[151px] sm:w-[150px] sm:h-[165px] md:w-[180px] md:h-[200px]" 
            onClick={onClick}
        >
            <img id='image-card' 
            src={image} 
            alt={`${name}`} 
            className="border-none rounded-lg w-[120px] h-[95px] object-cover sm:w-[140px] sm:h-[110px] md:w-[160px] md:h-[130px]" />

            <div id='content-card'>
                <h2 className="text-sm text-violet font-sans sm:text-base md:text-lg">{name}</h2>
                <p className="text-sm text-gray-600 sm:text-base md:text-lg">{age}</p>
            </div>
        </div>
    );
};