import  { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const CheckoutPage = () => {
  const { cartItems, removeFromCart, categories } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const totalItems = Object.values(cartItems).reduce(
    (acc, val) => acc + val,
    0
  );

  const subtotal = Object.entries(cartItems).reduce(
    (acc, [itemId, quantity]) => {
      const category = categories.find((cat) => cat.id === parseInt(itemId));
      if (category) {
        return (
          acc +
          quantity *
            parseFloat(category.price.replace("₦", "").replace(",", ""))
        );
      }
      return acc;
    },
    0
  );

  const deliveryPrice = 1000;
  const totalPrice = subtotal + deliveryPrice;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement logic to process the order, such as sending data to an API, etc.
    console.log("Form Data:", formData);
    // Optionally, you can clear cart items or redirect to a confirmation page.
    // clearCart();
    // history.push("/order-confirmation");
  };

  return (
    <div className="container min-h-screen mt">
      <div className="mx-auto p-4">
        {totalItems > 0 ? (
          <form onSubmit={handleSubmit}>
            <div className="overflow-auto mb-6">
              <table className="w-full max-w-4xl min-w-max table-auto text-left">
                <thead>
                  <tr>
                    <th className="p-6 sm:p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      Items
                    </th>
                    <th className="p-6 sm:p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      Product Name
                    </th>
                    <th className="p-6 sm:p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      Quantity
                    </th>
                    <th className="p-6 sm:p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      Price
                    </th>
                    <th className="p-6 sm:p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => {
                    const quantity = cartItems[category.id];
                    if (quantity > 0) {
                      return (
                        <tr key={category.id}>
                          <td className="p-2 sm:p-4">
                            <div className="w-16 h-16 overflow-hidden rounded-lg">
                              <img
                                src={category.img}
                                alt={category.title}
                                className="w-full h-full object-cover img"
                              />
                            </div>
                          </td>
                          <td className="p-6 sm:p-4 border-b border-blue-gray-100">
                            {category.title}
                          </td>
                          <td className="p-6 sm:p-4 border-b border-blue-gray-100">
                            {quantity}
                          </td>
                          <td className="p-6 sm:p-4 border-b border-blue-gray-100">
                            {category.price}
                          </td>
                          <td className="p-6 sm:p-4 border-b border-blue-gray-100">
                            <button
                              type="button"
                              onClick={() => handleRemoveFromCart(category.id)}
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

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4">Checkout Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
             
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium">Order Summary</p>
                  <p>Total Items: {totalItems}</p>
                  <p>Sub Total: ₦{subtotal.toFixed(2)}</p>
                  <p>Delivery Price: ₦{deliveryPrice.toFixed(2)}</p>
                  <p className="text-xl font-bold">Total Price: ₦{totalPrice.toFixed(2)}</p>
                </div>
                <button
                  type="submit"
                  className="md:w-44 flex items-center justify-center duration-200 mt-6 py-2 px-4 rounded-full bg-[#C19A6B] hover:bg-gray-200 hover:text-black transition-colors text-sm text-white"
                >
                  Check Out Now
                </button>
              </div>
            </div>
          </form>
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

export default CheckoutPage;
