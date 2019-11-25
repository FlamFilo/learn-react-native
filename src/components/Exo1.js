import React, { useState, useEffect } from 'react'
import { Animated, StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function Exo1() {
    const [growAnimation] = useState(new Animated.Value(0))
    const inversedGrowAnimation = Animated.subtract(1, growAnimation)

    useEffect(
        () => Animated.timing(growAnimation, {
            toValue: .5,
            duration: 1000,
        }).start()
    )

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[flexGrow(inversedGrowAnimation), styles.primary]}></Animated.View>
            <Animated.View style={[flexGrow(growAnimation), styles.secondary]}></Animated.View>
        </SafeAreaView>
    )
} 

const flexGrow = (animation) => ({
    flexGrow: animation,
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'silver',
    },
    primary: {
        backgroundColor: 'blueviolet',
    },
    secondary: {
        backgroundColor: 'violet',
    },
})