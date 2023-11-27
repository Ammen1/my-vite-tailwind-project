import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container mt-12'>
      <div className='flex flex-col justify-center items-center gap-3 mb-10'>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
          Get <span className="text-orange-500">Appropriate</span>
        </p>
        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-palanquin font-bold'>
          Search Job By Industry
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
