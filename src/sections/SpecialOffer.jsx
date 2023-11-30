import { FormCheck } from "react-bootstrap";
import { arrowRight } from "../assets/icons";
import { services02 } from "../assets/images";
import { Button } from "../components";
// import { FormCheck } from 'react-bootstrap';
import Hero from "./Hero";


const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-row-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={services02}
          alt='Shoe Promotion'
          width={100}
          height={100}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-xl font-palanquin font-bold'>
          <span className='text-coral-red'>Choose </span>
          Any 
        </h2>
        <h1 className="text-4xl font-palanquin font-bold ">Job Seeker!</h1>
        <p className='mt-4 info-text'>
          Our mission is to connect people to jobs at scale. 
          In order for businesses to hire the best talent, people 
          deserve to easily find a job they want to do. 
          Start applying to the 5,000+ companies in our network.
          
        </p>
        <div>
          {/* <FormCheck>
          
          </FormCheck> */}
          <div className="space-y-2">
      <div className="flex items-center space-x-2 ">
        <input
          type="checkbox"
          value="Our mission is to connect people to jobs at scale."
          // onChange={handleCheckBox}
          checked={true}
          className="text-orange-500 bg-orange-500"
        />
        <span className="text-black">Our mission is to connect people to jobs at scale.</span>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          value="We automatically complete profile with your professional experience"
          // onChange={handleCheckBox}
          checked={true}
          className="text-orange-500 bg-orange-500"
        />
        <span className="text-black">We automatically complete profile with your professional experience</span>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          value="Other"
          // onChange={handleCheckBox}
          checked={true}
          className="text-orange-500 bg-orange-500"
        />
        <span className="text-black">Other questions & have already applied through the This platform</span>
      </div>
    </div>
         
        </div>
        <div className='mt-11 bg-white '>
          <Button label='Find A Jobs!' iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
