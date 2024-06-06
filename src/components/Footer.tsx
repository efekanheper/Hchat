import Twitter from "../assets/logos/icons8-twitterx.svg";
import Facebook from "../assets/logos/icons8-facebook.svg";

import Instagram from "../assets/logos/icons8-instagram.svg";

function Footer() {
  return (
    <section className="bg-white">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto ">
        <div className="flex flex-col mt-24 justify-between gap-12 md:flex-row md:gap-0">
          <div className="flex">
            <a href="" className="font-bold ">
              <span
                className="text-2xl
              text-transparent duration-1000 text-neutral-950
              cursor-default text-stroke animate-title sm:text-5xl md:text-4xl whitespace-nowrap bg-clip-text"
              >
                H
              </span>
              <span
                className="text-transparent duration-1000 bg-white cursor-default
                  sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-slate-300
                   to-slate-800 animate-fade-in-3"
              >
                Chat
              </span>
            </a>
          </div>
          <div className="flex  gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-black font-extrabold">Company</p>
              <a href="#">About</a>
              <a href="#">Careers</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black font-extrabold">Help</p>
              <a href="#">FaQS</a>
              <a href="#">Contact Support</a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex justify-between border-t-2 border-t-gray-300 pt-10">
          <p className="w-[16ch] text-gray-400 md:w-full text-center">
            &copy; 2024 HChat. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank">
              <img src={Twitter} alt="Twitter logo" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <img src={Facebook} alt="Facebook logo" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img src={Instagram} alt="Linkedin logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
