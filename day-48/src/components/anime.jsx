import { useEffect, useState } from "react"

export default function Anime() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // code here win run after every render
        console.log('My anime component');
        setCount(count + 1);

    }, [])

    function handleClick(e) {
        console.log("You clicked me");

    }

    return (
        <div>
            <h1>Day-48 - useEffect With Anime</h1>

            <h2>{count}</h2>
            <button onClick={(e) => {
                handleClick(e); setCount(count + 1)

            }}> Anime Click </button>
        </div>
    )
}