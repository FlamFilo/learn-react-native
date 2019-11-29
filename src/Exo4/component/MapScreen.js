import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/Styles'
// import GeolocationContext from './GeolocationContext'
import { Button } from 'react-native-paper'

const MapScreen = () => {
    if (
        true
    ) {
        return (
            <View style={styles.container}>
                <Text>No Map</Text>
            </View>
        )
    }
    const p = useContext(GeolocationContext)
    return (
    <GeolocationContext>
        {({position, setPosition, updatePosition}) => (
            <View style={styles.column}>
                <Text>Map</Text>
                <Text>{position.latitude}</Text>
                <Text>{position.longitude}</Text>
                <Button
                    onPress={updatePosition}
                >Update Position</Button>
            </View>
        )}
    </GeolocationContext>
    // show user location true
)}
MapScreen.navigationOptions = {
    title: 'Map'
}

export default MapScreen