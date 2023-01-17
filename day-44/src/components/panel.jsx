import { useState } from "react"

export default function Panel(props) {
    const [isActive, setIsActive] = useState(false)

    // function children() {
    //     if(isActive){
    //         return(
    //             props.children
    //         )
    //     }
    // }

    function eventHandler(){
        setIsActive(true)
    }



    return (
        <div>

            <h3>{props.title}</h3>
            {isActive ? <p>{props.children}</p> :  <button onClick={()=> {
                eventHandler();
            }}>Show</button>}
        </div>
    )
}