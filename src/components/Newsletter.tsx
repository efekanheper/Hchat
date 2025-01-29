import React from "react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Newsletter: React.FC = () => {
  return (
    <section className="rounded-3xl bg-teal-50 flex max-w-6xl flex-col gap-10 px-8 pt-10 xl:mt-12 lg:px-12 xl:pt-10 xl:m-auto xl:mb-11 mt-24">
      <div className="space-y-1 ">
        <h2
          className="z-10 text-3xl  font-bold text-center  duration-1000 text-neutral-900 
        cursor-default text-stroke animate-title sm:text-5xl md:text-6xl  "
        >
          Join the waitlist for my
        </h2>
        <h1
          className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default
         sm:text-5xl md:text-5xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-teal-300
          to-teal-800 animate-fade-in-3"
        >
          Newsletter
        </h1>
      </div>
      <div className="mt-4 sm:mt-2 mx-auto max-w-lg">
        <form className="newsletter-form mt-0 mb-8 animate-fade-in-3">
          <div className="group flex items-center gap-x-4 py-1 pl-4 pr-1 rounded-[9px] bg-[#090D11] hover:bg-[#15141B] shadow-outline-gray hover:shadow-transparent focus-within:bg-[#15141B] focus-within:!shadow-outline-gray-focus transition-all duration-300">
            <EnvelopeIcon className="hidden sm:inline w-6 h-6 text-[#4B4C52] group-focus-within:text-white group-hover:text-white transition-colors duration-300" />

            <input
              type="email"
              placeholder="Your email"
              className="flex-1 text-white text-sm sm:text-base outline-none placeholder-[#4B4C52] group-focus-within:placeholder-white bg-transparent placeholder:transition-colors placeholder:duration-300"
            />
            <button className="w-full sm:w-1/4 mt-0 sm:mt-0 px-2 py-2 bg-teal-100 text-gray-800 font-bold rounded-md hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-900 transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
