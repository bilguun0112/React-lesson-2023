import { useContext } from "react"
import { MyData } from "../contexts/BookContext"
import Book from "./book"
export default function Books() {
    const data = useContext(MyData)

    return (
        <ul>
            {data.map((item, index) => {
                return <Book key={index} item={item} />
            })}
        </ul>
    )
}