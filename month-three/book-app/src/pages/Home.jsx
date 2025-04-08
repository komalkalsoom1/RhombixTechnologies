import React, { useState } from 'react';
import Nav from '../components/Nav';
import Card from '../components/Card';
import cartdata from '../data/CartData';
import { FaBookOpen } from "react-icons/fa";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchText, setSearchText] = useState('');

    // Get unique categories from cartdata (e.g., 'course-book', 'story-book', 'poetry-book')
    const categories = ['All', ...new Set(cartdata.map(item => item.book_category))];

    // Filter cart data based on selected category, search text, and book type
    const filteredData = cartdata.filter((item) => {
        const matchesCategory =
            selectedCategory === 'All' || item.book_category === selectedCategory;

        // Case-insensitive comparison for searchText in name, book_category, and type
        const matchesSearch =
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.book_category.toLowerCase().includes(searchText.toLowerCase()) ||
            item.type.toLowerCase().includes(searchText.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className='bg-[#e5e1dd] w-full min-h-screen'>
            {/* navbar */}
            <Nav setSearchText={setSearchText} />

            {/* categories */}
            <div className='p-4 flex flex-wrap justify-center items-center gap-6 w-[100%]'>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-[125px] h-[125px] bg-white text-amber-900 rounded-lg shadow-md flex flex-col justify-center items-center gap-2 cursor-pointer
                            ${selectedCategory === category ? 'bg-amber-900 text-white' : ''}`}
                    >
                        <div className='text-lg font-semibold'>{category === 'All' ? 'All Books' : category.replace('-', ' ')}</div>
                        <div className='text-3xl'>
                            {/* Use a default icon for categories */}
                            <FaBookOpen />
                        </div>
                    </div>
                ))}
            </div>

            {/* books/cards section */}
            <div className='p-8 flex flex-wrap justify-center gap-8'>
                {filteredData.map((item) => (
                    <Card
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        type={item.type}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
