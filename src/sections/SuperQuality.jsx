import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      className='justify-between items-center max-lg:flex-col gap-12 w-full max-container bg-slate-100'
    >
      <div className='flex   '>
        <h2 className='font-palanquin  capitalize ml-6 text-lg lg:max-w-lg font-bold'>
          Classic <span className='text-coral-red '> Service </span> <br />
          <span className='text-coral-red '> We Understand Needs </span>
        </h2>
        <p className='lg:max-w-lg text-right ml-96 w-full'>
          A process that involves everything from identifying,
           attracting, shortlisting, interviewing, selecting, 
           hiring, screening & onboarding employees.
        </p>
      </div>

      <div className=' flex flex-row'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain '
        />
                <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
                <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
