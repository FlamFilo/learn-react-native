import React, { useState, useEffect } from 'react'
import { SafeAreaView, Button, Text, AsyncStorage } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
// import AsyncStorage from '@react-native-community/async-storage'

export const API_URL = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-emplacement-des-stations'

export const getNetInfo = () => {
    const [status, setStatus] = useState({})
    NetInfo.fetch().then(
        (status) => setStatus(status)
    )
    return status
}

export const getVelibStation = async (url) => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        await AsyncStorage.setItem('velibStation', response)
        return {
            data: json,
            from: 'API',
        }
    } catch (error) {
        const data = await AsyncStorage.getItem('velibStation')
        return {
            data: JSON.parse(data),
            from: 'CACHE',
        }
    }
}

const Exo3 = () => {
    const [velibNumber, setVelibNumber] = useState(null)
    const netInfo = getNetInfo()

    const updateData = () => {
        getVelibStation(API_URL).then(
            (response) => {
                console.log(response.from)
                setVelibNumber(response.data.nhits)
            }
        )
    }

    useEffect(updateData, [])
    return (
        <SafeAreaView>
            <Button
                title="Exo 3"
                onPress={updateData}
            />
            <Text>{velibNumber}</Text>
            <Text style={{color: (netInfo.isConnected) ? 'green' : 'red'}}>
                {(netInfo.isConnected) ? 'Connected' : 'Disconnected'}
            </Text>
            <Button
                title="Clear AsyncStorage"
                onPress={() => AsyncStorage.clear()}
            />
        </SafeAreaView>
    )
}

export default Exo3