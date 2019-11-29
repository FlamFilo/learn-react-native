import React, { createContext, useState } from 'react'

export const CountContext = createContext(0)
export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    // const updateCount = async () => {
    //     // geoloc
    // }
    return (
        <CountContext.Provider
            value={{ count, setCount }}
        >
            {children}
        </CountContext.Provider>
    )
}

export default CountProvider