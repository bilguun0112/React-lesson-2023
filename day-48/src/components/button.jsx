import { useEffect, useState } from "react";


export default function Button() {
    const [isPlaying, setIsPlaying] = useState(false)

    function handleClick() {
        console.log('You clicked me !');
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        if (isPlaying) {
            console.log('IT is playing');

        } else {
            console.log('It isnt playing');
        }
    }, [isPlaying])

    return (
        <>

            <button onClick={handleClick}>Click me</button>

        </>

    )
}