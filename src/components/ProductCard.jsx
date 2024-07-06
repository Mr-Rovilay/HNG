import { GoPlus } from "react-icons/go";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { img, title, price } = product;
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-500 cursor-pointer" src={img} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-4 left-4 flex space-x-2">
            <button className="flex items-center justify-center text-white w-8 h-8 bg-[#C19A6B] rounded-full">
              <GoPlus className="text-2xl" />
            </button>
            <Link to="" className="w-8 h-8 bg-white flex items-center justify-center text-primary drop-shadow-xl rounded-full">
              <BsEyeFill className="text-xl text-gray-800" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-sm font-light mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{price}</p>
        <button className="w-full bg-[#C19A6B] text-white py-2 rounded-full hover:bg-[#C19A6B] transition-colors duration-300">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
