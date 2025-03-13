

import React from 'react';

import { IoHomeSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoLibrary } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white
    hidden lg:flex'>

      {/* ======================================== */}

      <div className="flex flex-col justify-around rounded
        bg-[#121212] h-[15%]">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <IoHomeSharp />
          <p className='font-bold'>Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <CiSearch />
          <p className='font-bold'>search</p>
        </div>
      </div>

      {/* ======================================== */}

      <div className="rounded bg-[#121212] h-[85%]">
        {/*  */}
        <div className="p-4 flex items-center justify-between">
          {/* library text and icon */}
          <div className="flex items-center gap-3">
            <IoLibrary className='w-8' />
            <p className="font-semi-bold">Your Library</p>
          </div>
          {/* arrow & plus icon */}
          <div className="flex items-center gap-3">
            <FaArrowRight className='w-5' />
            <FaPlus className='w-5' />
          </div>
        </div>
        {/*  */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold 
        flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p>it's easy we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px]
         text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        {/*  */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold 
        flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Let's findsome podcasts to follow</h1>
          <p>we'll keep you update on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px]
         text-black rounded-full mt-4'>Browse podcast</button>
        </div>
      </div>

      {/* ======================================== */}

    </div>
  )
}

export default Sidebar
