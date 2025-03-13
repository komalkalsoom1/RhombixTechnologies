import React, { useContext } from 'react';
import { FaPause, FaRandom, FaStepBackward, FaPlay, FaStepForward, FaRedo, FaMicrophoneAlt, FaVolumeUp, FaExpand } from "react-icons/fa";
import { MdSpeaker, MdQueueMusic, MdPictureInPicture } from "react-icons/md";
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { seekBg, seekBar, playstatus, play, pause, track, time } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      
      {/* Left: Track Info */}
      <div className="hidden lg:flex items-center gap-4">
        <img src={track.image} alt={track.name} className="w-12 rounded" />
        <div>
          <p className="font-semibold">{track.name}</p>
          <p className="text-gray-400 text-sm">{track.desc.slice(0, 12)}...</p>
        </div>
      </div>

      {/* Center: Controls */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <FaRandom className="cursor-pointer hover:text-gray-400" />
          <FaStepBackward className="cursor-pointer hover:text-gray-400" />
          {playstatus ? (
            <FaPause onClick={pause} className="cursor-pointer hover:text-gray-400" />
          ) : (
            <FaPlay onClick={play} className="cursor-pointer hover:text-gray-400" />
          )}
          <FaStepForward className="cursor-pointer hover:text-gray-400" />
          <FaRedo className="cursor-pointer hover:text-gray-400" />
        </div>

        {/* Seek Bar */}
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute} : {time.currentTime.second}</p>
          <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none w-0 bg-rose-700 rounded-full" />
          </div>
          <p>{time.currentTime.minute} : {time.currentTime.second}</p>
        </div>
      </div>

      {/* Right: Additional Controls */}
      <div className="hidden lg:flex items-center gap-4 opacity-75">
        <FaMicrophoneAlt className="cursor-pointer hover:text-gray-400" />
        <MdQueueMusic className="cursor-pointer hover:text-gray-400" />
        <MdSpeaker className="cursor-pointer hover:text-gray-400" />
        <FaVolumeUp className="cursor-pointer hover:text-gray-400" />

        {/* Volume Bar */}
        <div className="w-20 bg-slate-50 h-1 rounded"></div>

        <MdPictureInPicture className="cursor-pointer hover:text-gray-400" />
        <FaExpand className="cursor-pointer hover:text-gray-400" />
      </div>
    </div>
  );
};

export default Player;
