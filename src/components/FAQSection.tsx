import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

const FAQSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false, false]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(".faq-item", { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    }
  }, [inView]);

  const toggleAccordion = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <section
      className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:pt-20 xl:m-auto xl:mb-24"
      id="FAQ"
      ref={ref}
    >
      <motion.div
        className="m-auto w-full text-center text-gray-500"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-800">
          FAQs
        </h2>
        <p>Frequently Asked Questions</p>
      </motion.div>
      <div className="space-y-14 mx-auto max-w-md mt-3">
        <motion.div
          className="faq-item"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => toggleAccordion(0)}
          >
            <h3 className="text-xl font-bold justify-center text-gray-800">
              On what devices can I use this chat app?
            </h3>
          </div>
          {isOpen[0] && (
            <p className="mt-2 text-gray-500">
              You can use this chat app on any device with an internet
              connection.
            </p>
          )}
        </motion.div>
        <motion.div
          className="faq-item"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <h3 className="text-xl font-bold justify-center text-gray-800">
              Is my data secure with this chat app?
            </h3>
          </div>
          {isOpen[1] && (
            <p className="mt-2 text-gray-500">
              Yes, we use industry-standard encryption to protect your data.
            </p>
          )}
        </motion.div>
        <motion.div
          className="faq-item"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <h3 className="text-xl font-bold justify-center text-gray-800">
              Can I customize the chat app?
            </h3>
          </div>
          {isOpen[2] && (
            <p className="mt-2 text-gray-500">
              Yes, you can customize the chat app to fit your needs.
            </p>
          )}
        </motion.div>
        <motion.div
          className="faq-item"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => toggleAccordion(3)}
          >
            <h3 className="text-xl font-bold justify-center text-gray-800">
              How do I get support for the chat app?
            </h3>
          </div>
          {isOpen[3] && (
            <p className="mt-2 text-gray-500">
              You can get support by contacting our support team 24/7.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
