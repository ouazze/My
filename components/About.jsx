import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image'; 
import React from 'react';
import { motion } from "motion/react";

const About = ({isDarkMode}) => {
  return (
    <motion.div id="about" className="w-full px-[12%] py-10 mt-20 sm:mt-40 scroll-mt-20 relative"
    initial={{opacity:0, y:-20}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.5 , delay:0.3}}>
      {/* Section Title */}
      <motion.h4
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}} 
      className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>

      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5 , delay:0.3}}
      className="text-center text-4xl sm:text-5xl font-Ovo">About Me</motion.h2>

      {/* Main Container */}
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}}
      className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        
        {/* Left - Image Section */}
        <motion.div 
        initial={{opacity:0, scale:0.9}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.6}}
        className="w-64 sm:w-80 rounded-3xl max-w-none self-start">
          <Image 
            src={assets.user_image} 
            alt="User Image" 
            width={320} 
            height={320} 
            className="w-full rounded-3xl" 
          />
        </motion.div>

        {/* Right - Text Description */}
        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6,delay:0.8}}
          className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a passionate Master’s (M2) student at Ibn Tofail University, 
            specializing in Big Data and Cloud Computing, and currently seeking a 4- to 6-month end-of-study internship (PFE).
            I have dedicated the past three years to learning and creating projects in Python, 
            machine learning, and deep learning. Driven by my keen interest in data science, AI, and enterprise-level cloud administration, 
            I aim to join an innovative organization where I can apply my expertise, 
            collaborate with a dynamic team, and continue advancing cutting-edge technology.
          </p>

          <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                  onClick={() => {
                    if (title === "Projects") {
                      const workSection = document.getElementById("work");
                      if (workSection) {
                        workSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-8 sm:w-10 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                </motion.li>
              ))}
            </motion.ul>


          <motion.h4
          initial={{y:20 , opacity:0}}
          whileInView={{y:0 , opacity:1}}
          transition={{delay:1.3, duration:0.5}}
          className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Certificates</motion.h4>

          <motion.ul
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:1.5,duration:0.5}}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <motion.li whileHover={{scale:1.05}} className="cursor-pointer">
              <a href="https://coursera.org/share/5a697f76b55825ac060448c7ee9b2892" target="_blank" rel="noopener noreferrer">
                <Image src={assets.P2} alt="Data Analysis with Python" className='w-full rounded-lg' />
              </a>
              <p className='text-center mt-2'>Data Analysis with Python</p>
            </motion.li>
            <motion.li whileHover={{scale:1.05}} className="cursor-pointer">
              <a href="https://explore.skillbuilder.aws/learn/lp/2068/generative-ai-learning-plan-for-developers?hash=5f3705d80492744cb7f1ba9d4c5e643443715ba7&generated_by=6842591" target="_blank" rel="noopener noreferrer">
                <Image src={assets.aws} alt="Generative AI Learning Plan" className='w-full rounded-lg' />
              </a>
              <p className='text-center mt-2'>Generative AI Learning Plan</p>
            </motion.li>
            <motion.li whileHover={{scale:1.05}} className="cursor-pointer">
              <a href="https://coursera.org/share/0b5094c7ff7139ddc285f1e93641f3a9" target="_blank" rel="noopener noreferrer">
                <Image src={assets.P1} alt="Python for Data Science" className='w-full rounded-lg' />
              </a>
              <p className='text-center mt-2'>Python for Data Science, AI & Development</p>
            </motion.li>
            <motion.li whileHover={{scale:1.05}} className="cursor-pointer">
              <a href="https://mylearn.oracle.com/ou/learning-path/introduction-to-oracle-cloud-essentials/115954" target="_blank" rel="noopener noreferrer">
                <Image src={assets.power} alt="Cloud Computing with Oracle" className='w-full rounded-lg' />
              </a>
              <p className='text-center mt-2'>Cloud Computing and Oracle</p>
            </motion.li>
          </motion.ul>

          <motion.h4
          initial={{y:20 , opacity:0}}
          whileInView={{y:0 , opacity:1}}
          transition={{delay:1.3, duration:0.5}}
          className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

          <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:1.5,duration:0.5}}
            className='grid grid-cols-4 gap-5 sm:gap-6'>
            {toolsData.map((tool, index) => (
              <motion.li 
                whileInView={{scale:1.1}}
                whileHover={{scale:1.05}} 
                key={index} 
                className="flex justify-center w-20 h-16 sm:w-35 aspect-square border
                  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 overflow-hidden relative">
                <Image 
                  src={tool} 
                  alt='Tool' 
                  className='w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 hover:scale-110' 
                />
              </motion.li>
            ))}
          </motion.ul>


        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
