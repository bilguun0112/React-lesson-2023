import { createContext, useEffect } from "react";
import { useState } from "react";
import timerData from "../data/data";

const TimerContext = createContext(null)

const TimerContextProvider = ({ children }) => {
    const [timers, setTimers] = useState({ timers: [] });

    useEffect(() => {
        setInterval(() => setTimers({ timers: timerData }), 1000);
    }, []);

    return (
        <TimerContext.Provider value={[timers, setTimers]}>
            {children}
        </TimerContext.Provider>
    )
}
export { TimerContext, TimerContextProvider }