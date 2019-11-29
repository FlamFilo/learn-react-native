import React, { createContext, useState } from 'react'

export const GeolocationContext = createContext(0)
export const GeolocationProvider = ({ children }) => {
    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0,
    })
    const updatePosition = () => {
        return new Promise(
            (resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        setPosition({
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,
                        })
                        resolve(position)
                    },
                    (error) => reject(error)
                )
            }
        )
    }
    return (
        <GeolocationContext.Provider
            value={{ position, setPosition, updatePosition }}
        >
            {children}
        </GeolocationContext.Provider>
    )
}

export default GeolocationProvider