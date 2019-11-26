import React from 'react'
import { Button } from 'react-native'

import { createAppContainer, withNavigation } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Exo1a from '../Exo1/Exo1a'
import Exo1b from '../Exo1/Exo1b'
import Exo1c from '../Exo1/Exo1c'

import HomeScreen from './HomeScreen'
import Exo1Screen from './Exo1Screen'
import HomeButton from './HomeButton'

// const headerRight = 
const homeStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        Exo1: { screen: Exo1Screen },
        Exo1a: { screen: Exo1a },
        Exo1b: { screen: Exo1b },
        Exo1c: { screen: Exo1c },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerRight: (
                <HomeButton />
            )
        }
    }
)

const Exo2 = createAppContainer(homeStack)
export default Exo2