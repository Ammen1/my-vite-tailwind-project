import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container mb-4 max-sm:mt-12'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <p>Get <span className=" text-orange-500">Appropriate</span> </p>
        <h2 className='text-4xl font-palanquin font-bold'>
           Search Job By Industry
           
        </h2>
      </div>

      <div className='max-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 '>
        {products.map((product) => (
          <PopularProductCard key={product.name} { ... product}  />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
