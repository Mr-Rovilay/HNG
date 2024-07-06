import { useContext, useState } from 'react';

import ProductCard from "./ProductCard";
import { StoreContext } from '../../context/StoreContext';

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const {categories} = useContext(StoreContext)

  const loadMore = () => {

    setVisibleProducts(prev => prev + 8);
  };

  return (
    <section className="py-16">
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
  );
};

export default Products;
