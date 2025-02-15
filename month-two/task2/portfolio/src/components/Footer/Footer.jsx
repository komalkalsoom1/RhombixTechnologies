import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="bg-[#1e1d1d] text-white text-center py-10 mt-10 flex items-center justify-between px-24 sm:flex-row flex-col">
      <p className="text-[24px] sm:text-[28px]">
        Made by Komal Kalsoom with <FaHeart className="inline text-red-500 mx-2" /> 
      </p>
      <p className="text-[20px] text-gray-400">
        &copy; {currentYear} Komal Kalsoom. All rights reserved.
      </p>
      <div className="flex justify-center mt-4 text-[25px]">
        <a href="https://facebook.com" className="mx-4 text-[#1ca998] hover:text-white">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" className="mx-4 text-[#1ca998] hover:text-white">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" className="mx-4 text-[#1ca998] hover:text-white">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
