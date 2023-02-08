import { createContext } from "react";
import { useState } from "react";
const MyContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [isLarge, setIsLarge] = useState(false)
    const imageSize = isLarge ? 150 : 100

    return (
        <MyContext.Provider value={{ imageSize, isLarge, setIsLarge }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, ContextProvider }