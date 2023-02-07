import { createContext } from "react";


const UserContext = createContext(null)

// ! Provider
// * Сүү ХХК байж болно. Иргэдэд сүү ханган нийлүүлдэг.
const UserProvider = ({ children }) => {
    const userName = "Shine Suu"
    return (
        <UserContext.Provider value={userName}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider }

// ? Consumer

// TODO Жирийн иргэд болон хэрэглэгчид