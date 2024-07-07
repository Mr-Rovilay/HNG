import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative py-5 overflow-hidden mt">
      <div className="relative">
        <div className="w-full h-full">
          <img 
            src="/Bannar.png" 
            alt="Banner" 
            className="object-cover w-full h-64 md:h-96 lg:h-full rounded-md" 
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-y-0 grid place-items-center text-center px-4 md:px-6 text-white"
        >
          <h5 className="uppercase text-sm md:text-xl font-light mt-2">Best Deals</h5>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-2"
          >
            Discover our exclusive collection of handcrafted furniture, <br className="hidden md:block" /> designed to bring elegance and comfort to your home. <br className="hidden md:block" /> Each piece is made with premium materials to ensure durability and style.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6"
          >
            <button className="w-full md:w-44 flex items-center justify-center py-2 px-4 rounded-full bg-[#C19A6B] hover:bg-gray-200 hover:text-black transition-colors text-sm text-white">
              Shop Now <IoIosArrowRoundForward className="ml-2 text-lg" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
