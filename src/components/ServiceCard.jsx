const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=' flex flex-row w-1/2 px-4 border-3 rounded-[2px] shadow-xl  py-20 gap-9  bg-white'>
      <div className='flex justify-center items-center mb-7 px-9 bg-slate-100 '>
        <img src={imgURL} alt={label} width={500} height={400} className="transition ease-in-out duration-700 hover:transform scale-150 " />
      </div>
      <div className=" justify-items-center w-full h-full items-center gap-5  ">
      <h3 className=' font-palanquin text-xl leading-normal font-bold ml-10 hover:transform scale-100 '>
        {label}
      </h3>
      <p className=' break-words font-montserrat text-lg leading-normal text-slate-gray ml-9 hover:transform scale-100 '>
        {subtext}
      </p>
      </div>
    </div>
  );
};

export default ServiceCard;
