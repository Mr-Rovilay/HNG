import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart, categories } = useContext(StoreContext);
  const [showToast, setShowToast] = useState(false);

  const totalItems = Object.values(cartItems).reduce((acc, val) => acc + val, 0);

  const subtotal = Object.entries(cartItems).reduce((acc, [itemId, quantity]) => {
    const category = categories.find((cat) => cat.id === parseInt(itemId));
    if (category) {
      return (
        acc +
        quantity *
          parseFloat(category.price.replace("₦", "").replace(",", ""))
      );
    }
    return acc;
  }, 0);

  const deliveryPrice = 1000;
  const totalPrice = subtotal + deliveryPrice;

  const handleIncrease = (itemId) => {
    addToCart(itemId);
  };

  const handleDecrease = (itemId, currentQuantity) => {
    if (currentQuantity === 1) {
      setShowToast(true);
    } else {
      removeFromCart(itemId);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 mt">Cart Page</h1>
      <div className="">
        {totalItems > 0 ? (
          <div>
            <div className="overflow-auto mb-6">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr className="bg-blue-gray-50">
                    <th className="p-4 sm:p-2 border-b border-blue-gray-100">Items</th>
                    <th className="p-4 sm:p-2 border-b border-blue-gray-100">Title</th>
                    <th className="p-4 sm:p-2 border-b border-blue-gray-100">Quantity</th>
                    <th className="p-4 sm:p-2 border-b border-blue-gray-100">Price</th>
                    <th className="p-4 sm:p-2 border-b border-blue-gray-100">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => {
                    const quantity = cartItems[category.id];
                    if (quantity > 0) {
                      return (
                        <tr key={category.id}>
                          <td className="p-2 sm:p-4">
                            <div className="w-16 h-16 sm:w-24 sm:h-24 overflow-hidden rounded-lg">
                              <img
                                src={category.img}
                                alt={category.title}
                                className="w-full h-full object-cover img"
                              />
                            </div>
                          </td>
                          <td className="p-4 sm:p-2 border-b border-blue-gray-100">{category.title}</td>
                          <td className="p-4 sm:p-2 border-b border-blue-gray-100">
                            <button
                              onClick={() => handleDecrease(category.id, quantity)}
                              className={`bg-gray-200 px-3 py-1 rounded-lg ${quantity === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-300'}`}
                              disabled={quantity === 1}
                            >
                              -
                            </button>
                            <span className="mx-2">{quantity}</span>
                            <button
                              onClick={() => handleIncrease(category.id)}
                              className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300"
                            >
                              +
                            </button>
                          </td>
                          <td className="p-4 sm:p-2 border-b border-blue-gray-100">{category.price}</td>
                          <td className="p-4 sm:p-2 border-b border-blue-gray-100">
                            <button
                              onClick={() => removeFromCart(category.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start my-8 bg-white p-4 rounded-lg shadow-md">
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium mb-2">Shopping Details</h3>
                <p>Total Items: {totalItems}</p>
                <p>Sub Total: ₦{subtotal.toFixed(2)}</p>
                <p>Delivery Price: ₦{deliveryPrice.toFixed(2)}</p>
                <p>Total Price: ₦{totalPrice.toFixed(2)}</p>
                <Link
                  to="/check-out"
                  className="mt-4 md:mt-6 py-2 px-4 rounded-full bg-[#C19A6B] hover:bg-gray-200 hover:text-black transition-colors text-sm text-white md:w-auto text-center md:text-left"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full mt-10">
            <p className="text-center text-lg">
              Your cart is empty, please add products to the cart.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;