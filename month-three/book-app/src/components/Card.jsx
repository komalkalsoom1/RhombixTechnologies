import React from 'react'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";

const Card = ({ name, image, id, price, type,icon }) => {
  const getIcon = () => {
    switch (type) {
      case 'frontend':
        return <FaHtml5 />;
      case 'backend':
        return <RiReactjsLine />;
      case 'story':
        return <RiJavascriptFill />;
      case 'poetry':
        return <FaCss3Alt />;
      default:
        // return <IoGrid />;
    }
  };

  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow'>
      {/* image */}
      <div className='w-full h-[60%] overflow-hidden'>
        <img src={image} alt={name} className='object-cover w-full h-full rounded-lg' />
      </div>
      {/* title */}
      <div className='text-2xl font-semibold'>{name}</div>
      {/* price & icon */}
      <div className='w-full flex justify-between items-center'>
        <div className='text-xl font-semibold text-amber-900'>Rs {price}/-</div>
        <div className='flex items-center gap-2 text-amber-900 font-semibold'>
          {icon} <span>{type}</span>
        </div>
      </div>
      {/* button */}
      <button className='w-full p-2 bg-amber-900 rounded-lg text-white hover:bg-amber-800'>
        Add Cart
      </button>
    </div>
  );
};

export default Card;
