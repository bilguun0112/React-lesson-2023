import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <style type="text/css">
                {`
                .counter:hover {
                background: #ffffd8
                   }
                 `}
            </style>

            <div className="counter p-2 w-25" >
                <div className="p-3 fs-1">
                    {count}
                </div>
                <button className="btn btn-secondary" onClick={() => {
                    setCount(count + 1)
                }}>
                    Add One
                </button>
            </div>
        </div>
    )
}