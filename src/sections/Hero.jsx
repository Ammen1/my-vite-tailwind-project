import React, { useState } from 'react';
import { bbb } from "../assets/images";

const Hero = (props) => {
  const [state, setState] = useState({
    description: '',
    location: '',
    category: '',
    full_time: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'full_time') {
      setState((prevState) => ({ ...state, [name]: !prevState.full_time }));
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(state);
    // Add your search logic here
  };

  const sectionStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '3px solid #EBEEF3', // Adjust the border size and color
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)', // Add a box shadow for a subtle glow
  };

  return (
    <section
      id='home'
      className='h-screen flex flex-col gap-6'
      style={sectionStyle}
    >
      <div className=' pt-44 justify-center items-center text-white '>
        <h2 className='text-3xl  font-bold text-center '>
          <span className='text-coral-red font-poppins'>Empowering,</span>{' '}
          <span className=' text-orange-500'>Inspiring,</span> Rising
        </h2>
        <h1 className='justify-center items-center text-center text-4xl font-palanquin font-bold '>
          Recruitment <span className=' text-orange-500'>& </span>Staffing Agency
        </h1>
      </div>
      <div className='flex justify-center items-center mt-12 group-hover:text-white font-semibold text-slate-900 '>
        <form className="flex" onSubmit={handleSearch}>
          <div className="md:flex gap-11">
            <div className="md:w-1/2 px-2">
              <div className="mb-4">
                <label htmlFor="description" className="group-hover:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10  shadow-sm " >
                </label>
                <input
                  type="text"
                  name="description"
                  value={state.description || ''}
                  placeholder="Keywords"
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full text-gray-700 "
                />
              </div>
            </div>
            <div className="md:w-1/2 px-2">
              <div className="mb-4">
                <label htmlFor="location" className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10  shadow-sm">
                </label>
                <select
                  name="location"
                  value={state.location || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  <option value="">Select Location</option>
                  {/* Add your location options here */}
                </select>
              </div>
            </div>
            <div className="md:w-1/2 px-2">
              <div className="mb-4">
                <label htmlFor="category" className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10  shadow-sm">               
                </label>
                <select
                  name="category"
                  value={state.category || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  <option value="">Select Category</option>
                  {/* Add your category options here */}
                </select>
              </div>
            </div>
            <div className="md:w-1/2 px-2 flex items-center w-32 h-11  hover:bg-black justify-center text-center bg-orange-500 text-2xl text-white font-semibold focus:ring-4 focus:ring-green-900 focus:ring-opacity-500 transition duration-500 ease-in-out transform hover:-translate-x-1 hover:scale-10 ">
              <button type="submit" className="  text-white p-2 rounded-lg">
                Search Job
              </button>
              
            </div>
          </div>
        </form>
     
      </div>
         <div className='text-center  text-lg text-white font-palanquin font-bold'>Popular Search: 
         <span className=' '>Designer, Django Developer,...</span> </div>
         
    </section>
  );
};

export default Hero;
