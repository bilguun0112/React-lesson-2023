import { useState } from "react"
import TimerForm from "./timerForm"


export default function ToggleableTimerForm({ onFormSubmit }) {
    function handleEditFormSubmit(timer) {
        onFormSubmit(timer);
        setIsopen(true)
    }

    function handleFormOpen() {
        setIsopen(true)
    }
    function handleFormClose() {
        setIsopen(false)
    }
    const [isOpen, setIsopen] = useState(false)
    return (
        <div>
            {
                isOpen ? <TimerForm onFormSubmit={handleEditFormSubmit}
                    onFormClose={handleFormClose} />
                    :
                    <div>
                        <button onClick={handleFormOpen}>Click me</button>
                    </div>
            }
        </div>


    )

}