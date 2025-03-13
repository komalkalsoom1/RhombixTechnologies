import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../../public/data/assets';

const DisplayAlbum = () => {
    const { id } = useParams();
    const data = albumsData[id];

    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end px-4'>
                {/* Album Cover */}
                <img className='w-48 h-48 object-cover rounded-md' src={data.image} alt={data.name} />
                
                {/* Album Details */}
                <div className="flex flex-col text-white">
                    <p className="text-sm text-gray-400">Playlist</p>
                    <h2 className='text-5xl font-bold mb-2 md:text-7xl'>{data.name}</h2>
                    <h4 className="text-gray-300">{data.desc}</h4>
                    <p className="mt-2 flex items-center gap-2 text-gray-400">
                        <img src={assets.spotify_logo} alt="Spotify" className="w-5 h-5" />
                        <b className="text-white">Spotify</b> • 1,323,154 likes • <b>50 songs,</b> about 2 hr 30 min
                    </p>
                </div>
            </div>

            {/* Tracklist Header */}
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 text-[#a7a7a7] px-4'>
                <p><b className="mr-4">#</b> Title</p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="Duration" />
            </div>
            <hr className="border-gray-700 mb-2" />

            {/* Tracklist */}
            {songsData.map((item, index) => (
                <div key={index}
                    className='grid grid-cols-3 sm:grid-cols-4 gap-4 cursor-pointer
                     p-3 items-center text-[#a7a7a7] hover:bg-gray-800 rounded-md px-4'>
                    
                    {/* Song Info */}
                    <div className="flex items-center">
                        <p className="mr-4 text-[#a7a7a7]">{index + 1}</p>
                        <img className='w-10 h-10 object-cover rounded mr-3' src={item.image} alt={item.name} />
                        <p className="text-white">{item.name}</p>
                    </div>

                    {/* Album Name */}
                    <p className='text-sm'>{data.name}</p>

                    {/* Date Added (Hidden on Small Screens) */}
                    <p className='text-sm hidden sm:block'>5 days ago</p>

                    {/* Duration */}
                    <p className='text-sm text-center'>{item.duration}</p>
                </div>
            ))}
        </>
    );
};

export default DisplayAlbum;
