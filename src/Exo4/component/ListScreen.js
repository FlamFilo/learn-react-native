import React from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'
import { ListItem } from 'react-native-elements'

import COLOR from '../styles/Color'
import styles from '../styles/Styles'
import data from '../mock/velib-disponibilite-en-temps-reel'

const ListScreen = ({ navigation }) => {
    if (
        !data
    ) {
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>No result...</Text>
        </View>
    }
    return (
        <FlatList
            style={styles.listItem}
            data={data.records}
            renderItem={({ item }) => {
                return (
                    <TouchableHighlight
                        underlayColor={COLOR.MAIN}
                        onPress={() => navigation.navigate('Detail', { item })}
                    >
                        <ListItem
                            key={item.recordid}
                            title={
                                <View style={styles.row}>
                                    <Text style={[styles.listItemTitle, style.activeText]}>{item.fields.station_name}</Text>
                                    <Text style={[items.fields.nbfreeedock > 0 ? styles.activeText : styles.inactiveText]}>{item.fields.nbfreeedock}</Text>
                                </View>
                            }
                            containerStyle={styles.listItem}
                            chevron
                        />
                    </TouchableHighlight>
                )
            }}
            keyExtractor={item => item.recordid}
            // ItemSeparatorComponent={this.renderSeparator}
        />
    )
}
ListScreen.navigationOptions = {
    title: 'List'
}

export default ListScreen