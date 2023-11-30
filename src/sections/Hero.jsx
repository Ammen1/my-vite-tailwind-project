import React, { useState } from 'react';
import { bbb } from '../assets/images';

const Hero = (props) => {
  const [state, setState] = useState({
    description: '',
    location: '',
    category: '',
    full_time: false,
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
    backgroundImage:
      'url("https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '3px solid #EBEEF3', // Adjust the border size and color
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)', // Add a box shadow for a subtle glow
  };

  return (
    <section id="home" className="h-screen w-screen flex flex-col" style={sectionStyle}>
      <div className="pt-8 mt-10 md:pt-16 lg:pt-24 justify-center items-center text-white w-full h-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          <span className="text-coral-red font-poppins">Empowering,</span>{' '}
          <span className="text-orange-500">Inspiring,</span> Rising
        </h2>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-palanquin font-bold text-center">
          Recruitment <span className="text-orange-500">& </span>Staffing Agency
        </h1>
      </div>

      <div className="flex justify-center items-center mt-10 md:mt-8 lg:mt-12 group-hover:text-white font-semibold text-slate-900">
        <form className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto justify-center items-center " onSubmit={handleSearch}>
          <div className="md:flex ">
            <div className="md:w-1/4 ">
              <div className=" p-2 px-4 ">
                <input
                  type="text"
                  name="description"
                  value={state.description || ''}
                  placeholder="Keywords"
                  onChange={handleInputChange}
                  className=" w-72 p-3"
                />
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="p-2">
                <select
                  name="location"
                  value={state.location || ''}
                  onChange={handleInputChange}
                  className="w-72 p-3"
                >
                  <option value="">Select Location</option>
                  {/* Add your location options here */}
                </select>
              </div>
            </div>
            <div className="md:w-1/4  ">
              <div className="p-2">
                <select
                  name="category"
                  value={state.category || ''}
                  onChange={handleInputChange}
                  className=" w-72 p-3 "
                >
                  <option value="">Select Category</option>
                  {/* Add your category options here */}
                </select>
              </div>
            </div>
            <div className="md:w-1/4 p-2 px-2  ml-2  flex items-center justify-center  hover:bg-black  text-center bg-orange-500 text-xl text-white  focus:ring-4 focus:ring-green-900 focus:ring-opacity-50 transition duration-50  ">
              <button type="submit" className=" w-72 p-1 ">
                Search Job
              </button>
              
            </div>
          </div>
        </form>
      </div>

      <div className="text-center text-sm md:text-md lg:text-lg text-white font-palanquin font-thin mt-2">
        Popular Search: <span className="">Designer, Django Developer,...</span>
      </div>
    </section>
  );
};

export default Hero;
