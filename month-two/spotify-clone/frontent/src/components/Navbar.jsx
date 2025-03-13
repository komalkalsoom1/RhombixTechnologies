import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../public/data/assets'; 

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Navigation Arrows & Actions */}
            <div className='w-full flex justify-between items-center font-semibold'>
                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                    <img 
                        onClick={() => navigate(-1)} 
                        className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition'
                        src={assets.arrow_left} 
                        alt="Back"
                    />
                    <img 
                        onClick={() => navigate(1)} // 
                        // onClick={() => window.history.forward()}
                        className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition'
                        src={assets.arrow_right} 
                        alt="Forward"
                    />
                </div>

                {/* Premium, Install App, and Profile */}
                <div className="flex items-center gap-4">
                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-gray-300 transition'>
                        Explore Premium
                    </p>
                    <p className='bg-gray-800 py-1 px-3 rounded-2xl text-[15px] cursor-pointer hover:bg-gray-700 transition'>
                        Install App
                    </p>
                    <p className='bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center'>
                        KK
                    </p>
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 mt-4">
                <p className='cursor-pointer bg-white text-black px-4 py-1 rounded-2xl hover:bg-gray-300 transition'>
                    All
                </p>
                <p className='cursor-pointer bg-gray-800 px-4 py-1 rounded-2xl hover:bg-gray-700 transition'>
                    Music
                </p>
                <p className='cursor-pointer bg-gray-800 px-4 py-1 rounded-2xl hover:bg-gray-700 transition'>
                    Podcast
                </p>
            </div>
        </>
    );
};

export default Navbar;
