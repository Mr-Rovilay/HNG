import { GoPlus } from "react-icons/go";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const ProductCard = ({ product }) => {
  const { id, img, title, price } = product;
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="container max-w-xs bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-500"
          src={img}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#C19A6B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-4 left-4 flex space-x-2">
            <button
              className="flex items-center justify-center text-white w-8 h-8 bg-[#C19A6B] rounded-full hover:bg-[#a48256] transition-colors duration-300"
              onClick={() => addToCart(id)}
            >
              <GoPlus className="text-2xl" />
            </button>
            <Link
              to=""
              className="hidden w-8 h-8 bg-white  items-center justify-center text-primary drop-shadow-xl rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              <BsEyeFill className="text-xl text-gray-800" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-sm font-light mb-2 text-left">{title}</h2>
        <p className="text-gray-700 mb-2 text-left">{price}</p>
        {!cartItems[id] ? (
          <button
            className="md:w-44 flex items-center justify-center duration-200 mt-6 py-2 px-4 rounded-full bg-[#C19A6B] hover:bg-gray-200 hover:text-black transition-colors text-sm text-white"
            onClick={() => addToCart(id)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex justify-between items-center">
            <button
              className="bg-[#C19A6B] text-white py-2 px-4 rounded-full hover:bg-gray-200 hover:text-black transition-colors duration-300 text-sm"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
            <span className="text-gray-700 text-sm">{cartItems[id]} in Cart</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
