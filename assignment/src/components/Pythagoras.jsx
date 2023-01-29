import { useState } from "react"

export default function Pythagoras() {
    const [inputA, setInputA] = useState("")
    const [inputB, setInputB] = useState("")
    let result = "";
    function resultFunc() {
        result = Math.sqrt(Math.pow(inputA, 2) + Math.pow(inputB, 2))
    }
    return (
        <div>
            <label htmlFor="">
                a :
                <input type="number" onChange={e => setInputA(e.target.value)} value={inputA} />
            </label>
            <br />
            <label htmlFor="">
                b :
                <input type="number" onChange={e => setInputB(e.target.value)} value={inputB} />
            </label>
            <br />
            <button onClick={resultFunc()}>result</button>
            <br />
            <h3>{result}</h3>
        </div>
    )
} 