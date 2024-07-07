import  { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const CheckoutPage = () => {
  const { cartItems, categories } = useContext(StoreContext);
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


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace('NGN', '₦');
  };

  return (
    <div className="container min-h-screen mt">
      <div className="mx-auto">
        {totalItems > 0 ? (
          <form onSubmit={handleSubmit}>

            <div className="bg-white rounded-lg shadow-md">
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

              <div className="mt-10 flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium mt-5">Order Summary</p>
                  <p>Total Items: {totalItems}</p>
                  <p className="">Total Price: {formatCurrency(totalPrice)}</p>
                </div>
                <button
                  type="submit"
                  className="md:w-44 items-center justify-center duration-200 py-2 px-4 rounded-full bg-[#C19A6B] hover:bg-gray-200 hover:text-black transition-colors text-sm text-white"
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
