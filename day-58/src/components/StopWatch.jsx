import { useRef, useState } from "react";
import Button from '@mui/material/Button'


export default function StopWatch() {
    const [now, setNow] = useState(0)
    const [startTime, setStartTime] = useState(0)
    const timeRef = useRef(0)
    const timer = (now - startTime) < 0 ? 0 : Math.floor((now - startTime) / 1000);
    const handleStart = () => {
        console.log('start clicked')
        setStartTime(Date.now())
        timeRef.current = setInterval(() => {
            setNow(Date.now() + 1)
        }, 1000)
    }
    const handleStop = () => {
        console.log('stop clicked')
        clearInterval(timeRef.current)
    }

    return (
        <div>
            <h1> {timer}</h1>
            <Button
                variant="contained"
                color="success"
                onClick={() =>
                    handleStart()}>
                START
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={() =>
                    handleStop()
                }
            >
                STOP
            </Button>
        </div>
    )

}