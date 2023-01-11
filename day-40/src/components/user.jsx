import { useState } from "react";
import userList from "../data/data";

export default function User() {
    const [ index, setIndex ] = useState(0)

    let user = userList[index];

    const [memo , setMemo] = useState(userList[index].name)

    


    return (
        <>
            <button onClick={() => {
                setMemo(userList[index + 1].name)
                setIndex(index + 1)
            }}>Next</button>
            <p>{user.name}</p>
            <input type="text"  value={memo}/>
        </>
    )
}