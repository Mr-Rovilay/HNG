import { useState } from 'react';
import ProductCard from '../src/components/ProductCard';
import { categories } from '../src/data';

const ShopPage = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMore = () => {

    setVisibleProducts(prev => prev + 8);
  };
  return (
    <section className="container py-16 mt">
    <h5 style={{ fontSize: '4rem' }} className='font-light'>Products</h5>
    <div className="">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center justify-center">
        {categories.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts < categories.length && (
        <div className="flex justify-center mt-8">
          <button onClick={loadMore} className="py-2 px-6 rounded-full text-[#C19A6B] border border-[#C19A6B] transition-colors duration-300 cursor-pointer hover:bg-[#C19A6B] hover:text-white">
            Load More
          </button>
        </div>
      )}
    </div>
  </section>
  )
}

export default ShopPage