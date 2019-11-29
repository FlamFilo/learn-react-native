import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/Styles'

const DetailScreen = () => {
    const item = this.props.navigation.getParam('item', null)

    if (
        null === item
    ) {
        return (
            <View style={styles.container}>
                <Text>No Data Founded</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <View style={styles.row}>
                    <Text style={[styles.h1, style.activeText]}>{item.fields.station_name}</Text>
                </View>
                <View style={styles.row}>
                    {/* same as in ListScreen: do a component ? */}
                    <Text style={[items.fields.nbfreeedock > 0 ? styles.activeText : styles.inactiveText]}>{item.fields.nbfreeedock}</Text>
                    <Text style={activeText}>{item.fields.nbfreeedock}</Text>
                </View>
            </View>
        </View>
    )
}
DetailScreen.navigationOptions = {
    title: 'Detail'
}

export default DetailScreen