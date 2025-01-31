import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Mail Icon" className="w-6" /> ouazzemohamed194@gmail.com
        </div>
      </div>

      <div
        className="text-center sm:flex items-center justify-between border-t border-gray-400
        mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Mohamed Ouazze. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/ouazze" className="flex items-center gap-2">
              <Image src={assets.githu} alt="GitHub" className="w-7" /> GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/mohamed-ouazze/" className="flex items-center gap-2">
              <Image src={assets.inl} alt="LinkedIn" className="w-6" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/ouazze10?igsh=ZXQ3b3J1NzZ3bnZs"
              className="flex items-center gap-2"
            >
              <Image src={assets.insta} alt="Instagram" className="w-6" /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
