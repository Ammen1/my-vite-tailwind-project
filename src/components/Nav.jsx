import React, { useState } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo, log1, log2 } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [selectedLabel, setSelectedLabel] = useState(null);

  return (
    <header className='px-4 py-2 z-50 w-full fixed bg-orange-50 border-b-2 shadow-xl'>
      <nav className='flex justify-between items-center mb-1'>
        <a href='/' className='flex items-center ml-8'>
          <img
            src={log2}
            alt='log'
            width={70}
            height={60}
            className='rounded-full bg-black'
          />
        </a>
        
        <ul className='flex space-x-8 touch-manipulation max-lg:hidden'>
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setSelectedLabel(item.label)}
              onMouseLeave={() => setSelectedLabel(null)}
            >
              <a href={item.href} className='font-montserrat font-semibold text-gray-800 hover:text-orange-500 drop-shadow-md md:drop-shadow-xl'>
                {item.label}
              </a>
              {item.content && item.content.length > 0 && selectedLabel === item.label && (
                <div className="absolute top-full left-0 mt-1 p-0 w-56 text-justify  border bg-white text-white border-gray-300 rounded-md">
                  <ul >
                    {item.content.map((subItem, index) => (
                      <li key={index} className="py-0">
                        <a href={item.href} className='font-montserrat w-48 font-semibold text-gray-800 hover:text-orange-500'>
                          {subItem}
                          </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
 
        <div className=' mr-8 flex items-center w-32 h-12 active:bg-green-500  border-1 rounded-sm hover:bg-black justify-center text-center bg-orange-500 text-2xl text-white font-semibold max-lg:hidden focus:ring-4 focus:ring-green-900 focus:ring-opacity-500 transition  transition-duration: 500ms ease-in-out transform hover:-translate-x-1 hover:scale-10'>
          <a href='/'>Register </a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
