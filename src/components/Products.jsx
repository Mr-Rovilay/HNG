import { categories } from "../data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="py-16">
      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] mx-auto md:max-w-none md:max-0">
          {categories.map((product) => {
          return (
            <ProductCard key={product.id} product={product}/>
          )
})}
        </div>
        <div className="text-center mt-8">

        <button className="py-2 rounded-md text-[#C19A6B] border border-[#C19A6B] px-6 transition-colors duration-300 cursor-pointer">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
