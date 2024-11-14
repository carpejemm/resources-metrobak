import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [firstName, setFirstName] = useState('Chloe')
    const [lastName, setLastname] = useState('Yulo')

    const person = {
        firstName: 'Jem',
        lastName: 'Laguda'
    }

    const initialValue = {
        firstName,
        lastName,
        person,
        setFirstName,
        setLastname
    }

    return (
        <UserContext.Provider value={initialValue}>
            { children }
        </UserContext.Provider>
    )
}