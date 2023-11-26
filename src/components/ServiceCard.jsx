import React from 'react';

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 bg-white'>
      <div className='md:w-1/2 overflow-hidden'>
        <img
          src={imgURL}
          alt={label}
          className='w-full h-auto object-cover transform transition-transform hover:scale-105'
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h3 className='font-palanquin text-xl leading-normal font-bold mt-4 md:mt-0'>
          {label}
        </h3>
        <p className='break-words font-montserrat text-lg leading-normal text-slate-gray mt-2'>
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
