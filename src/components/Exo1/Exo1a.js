import React from 'react'
import { Animated, StyleSheet, SafeAreaView } from 'react-native'

export default class Exo1a extends React.Component {
    constructor(props) {
        super(props)

        let growAnimation = new Animated.Value(0)
        let inversedGrowAnimation = Animated.subtract(1, growAnimation)

        this.state = {
            growAnimation,
            inversedGrowAnimation,
        }
    }
    componentDidMount() {
        Animated.timing(this.state.growAnimation, {
            toValue: 0.5,
            duration: 1000,
        }).start()
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Animated.View style={[flexGrow(this.state.inversedGrowAnimation), styles.primary]}></Animated.View>
                <Animated.View style={[flexGrow(this.state.growAnimation), styles.secondary]}></Animated.View>
            </SafeAreaView>
        )
    }
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