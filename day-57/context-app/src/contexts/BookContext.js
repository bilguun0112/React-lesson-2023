import { createContext } from "react";
import { data } from "../data/data";
const MyData = createContext(null)

const BookProvider = ({ children }) => {
    const bookData = data
    return (
        <MyData.Provider value={bookData}>{children}</MyData.Provider>
    )
}
export { MyData, BookProvider }