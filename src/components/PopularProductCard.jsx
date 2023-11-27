import React, { useState } from 'react';
import { star } from "../assets/icons";
import { services01 } from '../assets/images';

const PopularProductCard = ({ imgURL, logoURL, name, price, namecompany, job }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative overflow-hidden border-r-2 border shadow-2xl cursor-default transition-transform transform flex flex-col items-center'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imgURL} alt={namecompany} className='w-[65px] h-[55px] border-1 bg-slate-300 mt-8 ' />
      {isHovered ? (
        <>
          <img src={services01} alt={name} className='absolute inset-0 over border-1' />
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center bg-transparent text-white'>
            <img src={imgURL} alt={namecompany} className='w-[65px] h-[55px] border-1 bg-slate-300 mt-10' />
            <p className='mt-2 text-xl leading-normal font-bold font-palanquin'>
              {name}
            </p>
            <h3 className='mt-2 text-lg leading-normal font-palanquin'>
              {namecompany}
            </h3>
            <h3 className='mt-2 text-sm leading-normal font-semibold font-palanquin'>
              {job}
            </h3>
            <p className='mt-2 font-palanquin text-black text-xl leading-normal'>
              <span className='text-orange-600'>{price}</span>
            </p>
            <img src={star} alt="Star" className='' />
          </div>
        </>
      ) : (
        <div className='justify-center items-center text-center'>
          <div className='mt-4 flex justify-center items-center'>
            <p className='mt-2 font-palanquin text-xl leading-normal font-semibold text-center'>
              {name}
            </p>
          </div>
          <h3 className='break-words font-palanquin text-lg leading-normal text-slate-gray mt-2 text-center'>
            {namecompany}
          </h3>
          <h3 className='mt-2 text-sm leading-normal font-semibold font-palanquin text-center'>
            {job}
          </h3>
          <p className='mt-2 font-palanquin text-black text-xl leading-normal text-center'>
            {price}
          </p>
        </div>
      )}
    </div>
  );
};

export default PopularProductCard;
