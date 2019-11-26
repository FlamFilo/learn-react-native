import React from 'react'
import { Button, View } from 'react-native'

class Exo1Screen extends React.Component {
    static navigationOptions = {
      title: 'Exo1',
    }
    render() {
      const {navigate} = this.props.navigation
      return (
        <View>
            <Button
            title="Exo1a"
            onPress={() => navigate('Exo1a')}
            />
            <Button
            title="Exo1b"
            onPress={() => navigate('Exo1b')}
            />
            <Button
            title="Exo1c"
            onPress={() => navigate('Exo1c')}
            />
        </View>
      )
    }
}

export default Exo1Screen