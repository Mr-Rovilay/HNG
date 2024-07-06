const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=''>
            <h3 className="uppercase text-sm mb-4">Contact Us</h3>
            <p className='text-sm text-gray-600'>Address: 56, Billings way, Oregun,<br/> Ikeja, Lagos state</p>
            <p className='text-sm text-gray-600'>Phone: +123 456 789</p>
            <p className='text-sm text-gray-600'>Email: 123@gmail.com</p>
          </div>
          <div>
            <h3 className="uppercase text-sm mb-4">Categories</h3>
            <ul className="text-sm text-gray-600 grid gap-1">
              <li><a href="#">Bed</a></li>
              <li><a href="#">Sofas</a></li>
              <li><a href="#">Table</a></li>
              <li><a href="#">Soft Seating</a></li>
              <li><a href="#">Coffe Table</a></li>
              <li><a href="#">Chairs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-sm mb-4">Get Our Email for Info on New Items, sales and more</h3>
            <p className="text-gray-500 text-sm">Enter your email below to be the first to know about new collections and when porduct launches</p>
            <form className="flex mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-3 flex-grow border border-[#955E2A] outline-none"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-[#C19A6B] text-white hover:bg-gray-200 hover:text-black transition-colors duration-300 "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm py-5 border border-t-[#955E2A]">
         Copyright &copy; 2024 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
