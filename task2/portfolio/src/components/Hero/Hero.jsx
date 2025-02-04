import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center px-6 md:px-20 bg-black pt-[150px] sm:pt-[120px] min-h-screen sm:min-h-[100vh] pb-12 sm:pb-0'>

      {/* Text Section (60% on medium & large screens, 100% on small screens) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='w-full sm:w-[100%] md:w-[60%]'
      >
        <h1 className='text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight'>
          <span className='text-[#44decc]'>I'm a</span>
          <br />
          <TypeAnimation
            sequence={['ReactJS Dev', 1500, 'Frontend Dev', 1500, 'Web Dev', 1500]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='block text-[#44decc]'
          />
        </h1>
        <p className='text-gray-300 text-base sm:text-lg mt-4 leading-relaxed max-w-[700px] mx-auto sm:mx-0'>
          I'm Komal Kalsoom, a dedicated React.js Frontend Developer, crafting responsive, user-friendly, and high-performance web applications with modern technologies.
        </p>
        <div className='mt-6 flex justify-center sm:justify-start space-x-4'>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#44decc' }}
            whileTap={{ scale: 0.9 }}
            className='bg-[#1ca998] hover:bg-[#187167] text-white font-bold py-3 px-10 rounded-lg shadow-lg transition duration-300'
          >
            Hire Me
          </motion.button>
        </div>
      </motion.div>

      {/* Profile Image Section (40% on medium & large screens, 100% on small screens) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className='w-full sm:w-[100%] md:w-[40%] flex justify-center sm:justify-end mt-10 sm:mt-0'
      >
        <div className='w-[100%] shadow-xl hover:scale-105 transition duration-500'>
          <img src='images/laptop6.jpg' alt='Profile' className='w-full h-auto object-cover rounded-lg' />
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;
