import React, { useState } from 'react';
import { star } from "../assets/icons";
import { services01 } from '../assets/images';

const PopularProductCard = ({ imgURL, logoURL, name, price, namecompany, job }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative overflow-hidden border-1 bg-white shadow-2xl hover:accent-emerald-500 transition duration-500 ease-out transform hover:-translate-x-1 hover:scale-1'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          <img src={services01} alt={name} className='border-1 bg-slate-300 ' />
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center'>
              <img src={imgURL} alt={namecompany} className='w-[70px] h-[60px] border-1 bg-slate-300 mt-3' />
            {/* <img src={star} alt="Star" className='' /> */}
            <p className='mt-2 text-xl leading-normal font-semibold font-montserrat text-white'>
              {name}
            </p>
             <h3 className='mt-2 text-lg leading-normal font-montserrat text-white'>
            {namecompany}
          </h3>
          <h3 className='mt-2 text-sm leading-normal font-semibold font-montserrat text-white'>
            {job}
          </h3>
          </div>
        </>
      ) : (
        <div className='ml-20'>
          <img src={imgURL} alt={namecompany} className='w-[70px] h-[60px] border-1 bg-slate-300 mt-6 ' />
          <div className='mt-4 flex justify-start'>
            <p className='mt-2 text-xl leading-normal font-semibold font-montserrat '>
              {name}
            </p>
          </div>
          <h3 className='break-words font-montserrat text-lg leading-normal text-slate-gray mt-2'>
            {namecompany}
          </h3>
          <h3 className='mt-2 text-sm leading-normal font-semibold font-montserrat'>
            {job}
          </h3>
          <p className='mt-2 font-montserrat text-black text-xl leading-normal'>
            {price}
          </p>
        </div>
      )}
    </div>
  );
};

export default PopularProductCard;
