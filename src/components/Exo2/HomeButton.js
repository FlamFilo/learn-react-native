import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class HomeButton extends React.Component {
  render() {
    return (
      <Button
        title="Home"
        onPress={() => {
          this.props.navigation.navigate('Home')
        }}
      />
    )
  }
}

export default withNavigation(HomeButton)