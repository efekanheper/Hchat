import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false, false]);

  const toggleAccordion = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <section
      className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:pt-20 xl:m-auto xl:mb-24"
      id="FAQ"
    >
      <div className="m-auto w-full text-center text-gray-500 ">
        <h2 className="mb-4 text-4xl font-extrabold text-center  text-gray-800">
          FAQs
        </h2>
        <p>Frequently Asked Questions</p>
      </div>
      <div className="space-y-14 mx-auto max-w-md mt-3">
        <div>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => toggleAccordion(0)}
          >
            <h3 className="text-xl font-bold justify-center text-gray-800">
              On what devices can I use this chat app?
            </h3>
            <svg
              className={`w-5 h-5 text-gray-800 ${
                isOpen[0] ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen[0] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </div>
          {isOpen[0] && (
            <p className="text-gray-600 mt-8">
              Our chat application is available for both iOS and Android mobile
              devices. Additionally, you can access the web version through your
              browser.
            </p>
          )}
        </div>
        <div>
          <div
            className="flex justify-center items-center cursor-pointer "
            onClick={() => toggleAccordion(1)}
          >
            <h3 className="text-xl font-bold justify-center text-gray-800 mt-4">
              Is my personal information secure?
            </h3>
            <svg
              className={`w-5 h-5 text-gray-800 ${
                isOpen[1] ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen[1] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </div>
          {isOpen[1] && (
            <p className="text-gray-600 mt-8">
              Customer privacy and security are our top priorities. All
              communication is encrypted with industry-standard protocols, and
              your personal information is never shared with third parties.
            </p>
          )}
        </div>
        <div>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <h3 className="text-xl font-bold justify-center text-gray-800 mt-4">
              What is the limit for group chats?
            </h3>
            <svg
              className={`w-5 h-5 text-gray-800 ${
                isOpen[2] ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen[2] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </div>
          {isOpen[2] && (
            <p className="text-gray-600 mt-8">
              The number of participants in our group chats is limited to 50
              individuals to optimize the user experience. This allows for more
              effective communication and convenience.
            </p>
          )}
        </div>
        <div>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => toggleAccordion(3)}
          >
            <h3 className="text-xl font-bold justify-center text-gray-800 mt-4">
              How can I backup my chat history?
            </h3>
            <svg
              className={`w-5 h-5 text-gray-800 ${
                isOpen[3] ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen[3] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </div>
          {isOpen[3] && (
            <p className="text-gray-600 mt-8">
              To backup your chat history, you can select the "Backup" option
              from the Settings menu and optionally backup to your cloud storage
              provider. This ensures that your data is safe and can be restored
              when needed.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
