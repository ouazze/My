import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 mt-48 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Here, you'll find a collection
        of projects highlighting my expertise in data science, big data, and
        artificial intelligence. Explore my work and discover how I leverage
        technology to solve real-world challenges.
      </motion.p>

      {/* Grid Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 dark:text-blackd"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="relative rounded-lg cursor-pointer group overflow-hidden bg-cover bg-center h-80"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Dark Overlay for Better Readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40"></div>

            {/* Project Info Box */}
            <div className="absolute bottom-5 left-5 right-5 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg flex items-center justify-between transition-all duration-500 group-hover:bottom-7">
              <div className="w-10/12">
                <h2 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 mt-1">{project.description}</p>
              </div>

              {/* Send Icon - Fixed Size and Alignment */}
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full border border-black bg-white shadow-md 
              shadow-black transition-all duration-300 group-hover:bg-lime-300 group-hover:text-white"
              >
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
      my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more{" "}
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
