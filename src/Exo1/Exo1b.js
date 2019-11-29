import React, { useState } from 'react'
import { Animated, StyleSheet, Button, SafeAreaView } from 'react-native'

export default function Exo1b() {
    const [grow, setGrow] = useState(0.5)
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[flexGrow(grow), styles.primary]}>
                <Button
                    title="Grow Up"
                    onPress={() => setGrow(grow + 0.1)}
                />
            </Animated.View>
            <Animated.View style={[flexGrow(1 - grow), styles.secondary]}>
                <Button
                    title="Grow Down"
                    onPress={() => setGrow(grow - 0.1)}
                />
            </Animated.View>
        </SafeAreaView>
    )
}

const flexGrow = (value) => ({
    flexGrow: value
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'silver',
    },
    containerChild: {
        flex: 1,
    },
    primary: {
        backgroundColor: 'blueviolet',
    },
    secondary: {
        backgroundColor: 'violet',
    },
})