import { useRef, useState } from "react";
import Button from '@mui/material/Button'

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const playRef = useRef(null)
    const handleClick = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            playRef.current.play()
        } else {
            playRef.current.pause()
        }
    };

    return (
        <>
            <h1>Day 58 </h1>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}>
                {isPlaying ? "PAUSE" : "PLAY"}
            </Button>
            <video width="250" ref={playRef}
                onPlay={() => { setIsPlaying(true) }}
                onPause={() => { setIsPlaying(false) }}>
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4" />
            </video>

        </>
    )
}