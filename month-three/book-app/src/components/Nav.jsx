import React from 'react';
import { MdMenuBook } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Nav = ({ setSearchText }) => {
    return (
        <div className='px-10 w-full h-[100px] flex justify-between items-center md:px-5'>
            {/* logo */}
            <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl'>
                <MdMenuBook className='w-[40px] h-[40px] text-amber-900' />
            </div>

            {/* search bar */}
            <form
                className='w-[45%] md:w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl'
                onSubmit={(e) => e.preventDefault()}
            >
                <CiSearch className='text-amber-900 w-[30px] h-[30px]' />
                <input
                    type="text"
                    className='w-[100%] outline-none text-[16px] md:text-[20px]'
                    placeholder='Search items...'
                    onChange={(e) => setSearchText(e.target.value)} // Update search text
                />
            </form>

            {/* cart icon */}
            <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl relative'>
                <span className='absolute -top-1 right-5 text-amber-900 font-bold text-[18px]'>0</span>
                <CiShoppingCart className='w-[40px] h-[40px] text-amber-900' />
            </div>
        </div>
    );
};

export default Nav;
