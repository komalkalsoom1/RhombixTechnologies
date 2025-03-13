import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../public/data/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioref = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playstatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 }
    });

    const play = () => {
        if (audioref.current) {
            audioref.current.play();
            setPlayStatus(true);
        }
    };

    const pause = () => {
        if (audioref.current) {
            audioref.current.pause();
            setPlayStatus(false);
        }
    };

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioref.current.play()
        setPlayStatus(true)
    }

    useEffect(() => {
        
        setTimeout(() => {
            audioref.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioref.current.currentTime / audioref.current.duration * 100)) + "%"
                setTime({
                    currentTime: {
                        second: Math.floor(audioref.current.currentTime % 60),
                        minute: Math.floor(audioref.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioref.current.duration % 60),
                        minute: Math.floor(audioref.current.duration / 60)
                    },
                })
            }
        }, 1000);
    }, [audioref])

    const contextValue = {
        audioref,
        seekBg,
        seekBar,
        track,
        setTrack,
        playstatus,
        setPlayStatus,
        time,
        setTime,
        play,pause,
        playWithId
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
            <audio ref={audioref} src={track.file} preload="auto" />
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
