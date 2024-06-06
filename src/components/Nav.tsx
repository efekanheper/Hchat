import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

function Nav() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between  px-8 lg:px-12 xl:m-auto">
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
            <div className="ml-4 hidden items-center space-x-4  sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
              <a
                className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                href="#features"
              >
                Features
              </a>
              <a
                className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                href="#FAQ"
              >
                FAQ
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                className="bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900
                 active:bg-gray-600 active:bg hidden sm:flex
                 "
              >
                Get{" "}
                <span
                  className=" ml-2 text-transparent duration-1000 bg-white cursor-default
                   whitespace-nowrap bg-clip-text bg-gradient-to-r from-slate-300
                   to-slate-200 animate-fade-in-3"
                >
                  {" "}
                  HChat
                </span>
              </a>
            </div>

            <Disclosure.Button className="sm:hidden  rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="space-y-4  px-4 mt-0 sm:hidden text-center">
            <Disclosure.Button className="block" as="a" href="#features">
              Features
            </Disclosure.Button>
            <Disclosure.Button className="block" as="a" href="#FAQ">
              FAQ
            </Disclosure.Button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
