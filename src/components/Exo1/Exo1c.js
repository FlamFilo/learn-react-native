import React, { useState, useEffect } from 'react'
import { Animated, StyleSheet, Button, SafeAreaView, TouchableOpacity } from 'react-native'

export default function Exo1c() {
    const [growAnimation] = useState(new Animated.Value(0.5))
    const inversedGrowAnimation = Animated.subtract(1, growAnimation)

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[flexGrow(growAnimation), styles.primary]}>
                <Button
                    title="Grow Up"
                    onPress={() => {
                        Animated.timing(growAnimation, {
                            toValue: 1.00,
                            duration: 400,
                        }).start()
                    }}
                />
            </Animated.View>
            <Animated.View style={[flexGrow(inversedGrowAnimation), styles.secondary]}>
                <Button
                    title="Grow Down"
                    onPress={() => {
                        Animated.timing(growAnimation, {
                            toValue: 0.0,
                            duration: 400,
                        }).start()
                    }}
                />
            </Animated.View>
        </SafeAreaView>
    )
}

const flexGrow = (value) => ({
    flexGrow: value,
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