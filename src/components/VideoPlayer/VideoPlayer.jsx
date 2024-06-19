import { useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
// import screenfull from 'screenfull';

export const VideoPlayer = ({ url, ...props }) => {
    const player = useRef(null);

    // const toggleFullscreen = () => {
    //     if (screenfull.isEnabled) {
    //         screenfull.request(player.current.wrapper);
    //     }
    //     // player.current.wrapper.requestFullscreen();
    // };

    // const cancelFullscreen = () => {
    //     // if (screenfull.isEnabled) {
    //     //     screenfull.cancel(player.current.wrapper);
    //     // }
    //     document.exitFullscreen();
    // };

    return (
        <>
            <ReactPlayer
                ref={player}
                width="100%"
                height="auto"
                url={url}
                playing={false}
                loop={false}
                controls={true}
                // onStart={toggleFullscreen}
                // onPlay={toggleFullscreen}
                // onPause={toggleFullscreen}
                // onEnded={toggleFullscreen}
                {...props}
            />
        </>
    );
};
