import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setNav(false);
    }
  }, [isDesktop]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black h-[90px] text-white px-6 md:px-20 flex justify-between items-center w-full z-50 fixed top-0 shadow-[0px_5px_15px_rgba(68,222,204,0.3),0px_0px_10px_rgba(0,0,0,0.2)]">
      <h1 className="text-2xl md:text-3xl font-bold text-[#44decc]">Komal.</h1>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 md:space-x-8 text-sm md:text-base">
        <li className="hover:text-[#44decc] transition duration-300"><a href="#home">Home</a></li>
        <li className="hover:text-[#44decc] transition duration-300"><a href="#about">About</a></li>
        <li className="hover:text-[#44decc] transition duration-300"><a href="#work">Work</a></li>
        <li className="hover:text-[#44decc] transition duration-300"><a href="#contact">Contact</a></li>
      </ul>
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden text-[#44decc] cursor-pointer" onClick={handleNav}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      
      {/* Mobile Menu */}
      <div className={`mt-24 fixed top-0 left-0 h-auto w-[45%] sm:w-[60%] bg-[#202121] text-white transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="p-6 sm:p-8 text-lg sm:text-xl space-y-4 sm:space-y-6">
          <li className="hover:text-[#44decc] transition duration-300"><a href="#home" onClick={handleNav}>Home</a></li>
          <li className="hover:text-[#44decc] transition duration-300"><a href="#about" onClick={handleNav}>About</a></li>
          <li className="hover:text-[#44decc] transition duration-300"><a href="#work" onClick={handleNav}>Work</a></li>
          <li className="hover:text-[#44decc] transition duration-300"><a href="#contact" onClick={handleNav}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
