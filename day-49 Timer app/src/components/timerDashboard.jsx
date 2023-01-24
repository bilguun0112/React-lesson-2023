import { useEffect, useState } from "react"
import timerData from "../data/data"
import Timer from "./timer"
import TimerForm from "./timerForm"
export default function TimerDashBorad() {

    const [timer, setTimers] = useState([])

    const [runningTime, setRunningTime] = useState(0)


    useEffect(() => {
        setTimers(timerData);
    }, [timer])

    return (
        <div>
            <h1> Timers </h1>
            {timerData && timerData.map((data, idx) => {
                return <Timer key={idx} project={data.project} title={data.title} elapsed={data.elapsed} runningSince={data.runningSince} runningTime={runningTime} />
            })}
            <TimerForm project={"Project"} title={"Title"} />
        </div>
    )
}