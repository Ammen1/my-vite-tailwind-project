import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, namecompany, job }) => {
  return (
    <div className='flex flex-1 flex-col w-full h-80 mt-20 max-sm:w-full items-center justify-center border-1 bg-white shadow-2xl '>
      <img src={imgURL} alt={name} className='w-[70px] h-[60px]  border-1 bg-slate-300  mt-3' />
      <div className='mt-4 flex justify-start'>
        <p className='mt-2 text-xl leading-normal font-semibold font-montserrat'>
          {name}
        </p>
      </div>
      <h3 className='mt-2 text-lg leading-normal  font-montserrat '>
        {namecompany}
      </h3>
       <h3 className='mt-2 text-sm leading-normal font-semibold font-montserrat'>
        {job}
      </h3>
      
      <p className='mt-2  font-montserrat text-black  text-xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
