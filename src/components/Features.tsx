import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import Service from "../assets/724.png";
import phone4 from "../assets/phone4.png";

function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(".feature-image", { opacity: 1, y: 0, duration: 1 });
    }
  }, [inView]);

  return (
    <section
      id="features"
      className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:pt-20 xl:m-auto"
      ref={ref}
    >
      <motion.article
        className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-4 text-4xl font-extrabold text-gray-800">
          Why Choose Us
        </h2>
        <p>
          Kobodrop reduced payments maintenance and processing fees. No hidden
          fees.
        </p>
      </motion.article>
      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-green px-4 sm:px-0 md:flex-row md:gap-8 xl:-2/3">
          <motion.div
            className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="m-auto text-center text-3xl font-extrabold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              User-Friendly Interface
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Our interface is carefully designed to enable easy navigation for
              our users. A simple and effective user experience streamlines your
              and your customers' tasks.
            </p>
          </motion.div>
          <motion.div
            className="m-auto mt-10 max-w-72 max-sm:w-1/2 md:mx-10 md:w-1/2 lg:mx-0 feature-image"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={phone4} alt="Service" />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-lime p-10 xl:w-1/3">
          <motion.h2
            className="text-3xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Reliable Security Features
          </motion.h2>
          <motion.p
            className="text-gray-500"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We employ the latest security standards to safeguard your customers'
            data. Industry-standard encryption protocols and security measures
            ensure that user information is always secure.
          </motion.p>
        </div>
      </article>
      <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-zenit p-10 xl:w-1/3">
          <motion.h2
            className="text-3xl font-extrabold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Flexible Customization Options
          </motion.h2>
          <motion.p
            className="text-gray-500"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our application offers flexible customization options to meet the
            unique needs of your business.
          </motion.p>
        </div>
        <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-rose-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <motion.div
            className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:mt-0 md:w-1/2 md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="m-auto text-center text-3xl font-extrabold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              24/7 Support Service
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              We prioritize customer satisfaction and offer 24/7 support service
              to address your inquiries. We're here to provide quick and
              effective solutions to your issues.
            </p>
          </motion.div>
          <motion.div
            className="m-auto max-w-96 md:mt-12 md:w-1/2 feature-image"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <img
              src={Service}
              alt="Frame displaying logos of various payment solutions"
            />
          </motion.div>
        </div>
      </article>
    </section>
  );
}

export default Features;
