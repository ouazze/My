import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"; 

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-8 py-10">
      {/* Profile Image */}
      <motion.div className="mt-24"
      initial=  {{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}> 
        <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32" />
      </motion.div>
      

      {/* Greeting */}
      <motion.h3 
      initial=  {{y: -20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration: 0.6, delay: 0.3}}
      className="flex items-center gap-2 text-xl md:text-2xl font-Ovo">
        Hi! I'm Ouazze Mohamed 
        <Image src={assets.hand_icon} alt="Waving Hand" className="w-6" />
      </motion.h3>

      {/* Title */}
      <motion.h1 
      initial=  {{y: -30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration: 0.8, delay: 0.5}}
      className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Junior Data Scientist and Big Data Specialist <br /> based in Morocco
      </motion.h1>

      {/* Description */}
      <motion.p 
      initial=  {{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.6, delay: 0.7}}
      className="max-w-2xl mx-auto font-Ovo text-gray-700 leading-relaxed dark:text-white">
      Master’s student in Big Data and Cloud Computing at Ibn Tofail University with a solid foundation in data science, 
      AI, and advanced computing. 
      Passionate about leveraging data-driven solutions to solve complex challenges through hands-on projects.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial=  {{y: -30, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration: 0.6, delay: 0.1}}
          href="#contact"
          className="px-10 py-3 bg-black text-white rounded-full flex items-center gap-2 border border-black hover:bg-gray-800
          dark:bg-transparent dark:border-white"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial=  {{y: -30, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration: 0.6, delay: 0.1}}
          href="/Ouazze English.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
