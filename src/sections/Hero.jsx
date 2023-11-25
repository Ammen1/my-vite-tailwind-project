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
    border: '3px solid   // paddingTop: 10, #EBEEF3', // Adjust the border size and color
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)', // Add a box shadow for a subtle glow
 
    
  };

  return (
    <section
      id='home'
      className='h-screen flex flex-col'
      style={sectionStyle}
     
    >
     
      <div className=' pt-44 justify-center items-center text-white '>
        <h2 className='text-3xl  font-bold text-center '>
          <span className='text-coral-red font-poppins '>Empowering,</span>{' '}
          <span className=' text-orange-500'>Inspiring,</span> Rising
        </h2>
        <h1 className='justify-center items-center text-center text-4xl font-palanquin font-bold '>
          Recruitment <span className=' text-orange-500'>& </span>Staffing Agency
        </h1>
      </div>
      <div className='flex justify-center items-center mt-12 group-hover:text-white font-semibold text-slate-900 '>
        <form className="flex w-full h-24 justify-center items-center " onSubmit={handleSearch}>
          <div className="md:flex md:gap-1 ">
            <div className="md:w-1/4 ">
              <div className=" p-2 ">
                <input
                  type="text"
                  name="description"
                  value={state.description || ''}
                  placeholder="Keywords"
                  onChange={handleInputChange}
                  className=" w-52 p-3"
                />
              </div>
            </div>
            <div className="md:w-1/4 p-2 px-2">
              <div className="mb-4">
                <select
                  name="location"
                  value={state.location || ''}
                  onChange={handleInputChange}
                  className="w-52 p-3"
                >
                  <option value="">Select Location</option>
                  {/* Add your location options here */}
                </select>
              </div>
            </div>
            <div className="md:w-1/4 px-2 p-2">
              <div className="mb-4">
                <select
                  name="category"
                  value={state.category || ''}
                  onChange={handleInputChange}
                  className=" w-52 p-3 "
                >
                  <option value="">Select Category</option>
                  {/* Add your category options here */}
                </select>
              </div>
            </div>
            <div className="md:w-1/4 p-2 px-2 mb-4 ml-2  flex items-center justify-center  hover:bg-black  text-center bg-orange-500 text-xl text-white  focus:ring-4 focus:ring-green-900 focus:ring-opacity-50 transition duration-50 ease-in-out transform hover:-translate-x-1 hover:scale-10 ">
              <button type="submit" className=" w-52 p-2 ">
                Search Job
              </button>
              
            </div>
          </div>
        </form>
     
      </div>
         <div className='text-center text-md text-white font-palanquin font-thin'>Popular Search: 
         <span className=' '>Designer, Django Developer,...</span> </div>
         
    </section>
  );
};

export default Hero;
