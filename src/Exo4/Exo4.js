import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import styles from './styles/Styles'
import COLOR from './styles/Color'

import ListScreen from './component/ListScreen'
import MapScreen from './component/MapScreen'
import DetailScreen from './component/DetailScreen'

const listStack = createStackNavigator(
    {
        List: { screen: ListScreen },
        Detail: { screen: DetailScreen },
    },
    {
        initialRouteName: 'List',
        defaultNavigationOptions: {
            headerStyle: styles.navbar,
            headerTitleStyle: styles.navbarTitle,
        }
    }
)

const mainTab = createMaterialBottomTabNavigator(
    {
        List: { screen: listStack },
        Map: { screen: MapScreen },
    },
    {
        initialRouteName: 'List',
        activeColor: COLOR.ACTIVE,
        inactiveColor: COLOR.INACTIVE,
        barStyle: styles.navbar,
    }
)

const Main = createAppContainer(mainTab)
export default Main