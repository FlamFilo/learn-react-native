import React from 'react'
import { Button } from 'react-native'
import { withNavigation } from 'react-navigation'

class NavButton extends React.Component {
    render() {
        return (
            <Button
                title={this.props.title}
                onPress={() => {
                    this.props.navigation.navigate(this.props.route)
                }}
            />
        )
    }
}

export default withNavigation(NavButton)