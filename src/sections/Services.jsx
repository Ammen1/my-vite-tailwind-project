import React, { useState } from 'react';
import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const itemsPerPage = 4; // Two items per row, two rows per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {currentServices.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
      <div className='mt-4'>
        <ul className='flex justify-center'>
          {Array.from({ length: Math.ceil(services.length / itemsPerPage) }, (_, index) => (
            <li
              key={index}
              className={`mx-1 px-3 py-1 cursor-pointer ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
