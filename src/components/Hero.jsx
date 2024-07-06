import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt relative py-5 overflow-hidden">
      <div className="relative">
        <div className="w-full h-full object-cover rounded-md">
          <img src="/Bannar.png" alt="Banner" className="lg:min-h-auto min-h-64" />
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-y-0 left-0 flex flex-col justify-center px-6 md:px-6 text-white"
        >
          <h5 className="uppercase text-sm md:text-xl font-light">Best Deals</h5>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base max-w-lg mt-4"
          >
            Discover our exclusive collection of handcrafted furniture, <br /> designed to bring elegance and comfort to your home. <br /> Each piece is made with premium materials to ensure durability and style.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex text-center items-center pb-y-4"
          >
            <button className="md:w-44 flex items-center justify-center duration-200 mt-6 py-2 px-4 rounded-full bg-[#C19A6B] hover:bg-gray-200 hover:text-black transition-colors text-sm text-white">
              Shop Now <IoIosArrowRoundForward className="ml-2 text-lg" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
