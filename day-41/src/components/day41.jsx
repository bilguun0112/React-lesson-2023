import { useState } from "react"

export default function Day41() {

    const [counter , setCounter] = useState(0)
    const [inputText, setInputText] = useState("")

    function handleClick(){
        setCounter(counter + 1)
    }

    function handleInput(event){
        setInputText(event.target.value)
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleClick}>Click me</button>

            <br />
            <p>{inputText}</p>
            <input type="text" value={inputText} onChange={(e)=> {handleInput(e)}}/>
        </div>



    )
}