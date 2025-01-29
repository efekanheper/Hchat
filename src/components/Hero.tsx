import { motion } from "framer-motion";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";

function Hero() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[84.9vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-3/6 ">
        <motion.h1
          className="mx-auto mb-8 w-[11ch] text-center text-5xl font-extrabold text-gray-800 sm:text-6xl md:mx-0 md:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Global Chat Haven
        </motion.h1>
        <motion.p
          className="m-auto w-[32ch] text-center text-gray-500 md:m-0 md:text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ChatterNet offers you a haven in the bustling world of online
          communication.
        </motion.p>
        <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal  "></div>
      </div>
      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden ">
        <img
          className=" right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80"
          src={phone4}
          alt="Kobodrop app frame"
        />
        <img
          className="hidden rounded-2xl xl:flex xl:ml-0 xl:w-140 xl:mt-0 xl:mb-32"
          src={phone3}
          alt="A woman happily using Kobodrop"
        />
      </div>
    </section>
  );
}

export default Hero;
