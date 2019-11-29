import React from 'react'
import { Button, View } from 'react-native'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'AwesomeProject',
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Button
                    title="Exo1"
                    onPress={() => navigate('Exo1')}
                />
                <Button
                    title="Exo3"
                    onPress={() => navigate('Exo3')}
                />
            </View>
        )
    }
}

export default HomeScreen