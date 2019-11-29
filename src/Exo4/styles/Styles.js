import { StyleSheet } from 'react-native'
import COLOR from './Color'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.MAIN,
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    // navbar //
    navbar: {
        backgroundColor: COLOR.SECONDARY,
    },
    navbarTitle: {
        // duplicate of h1 ???
        color: COLOR.ACTIVE,
        fontWeight: 'bold',
    },
    // list //
    listItem: {
        borderBottomWidth: 1,
        borderColor: COLOR.SECONDARY,
        backgroundColor: COLOR.TERNARY,
        // margin: 5,
        // marginBottom: 0,
        // display: 'flex',
    },
    listItemTitle: {
        color: COLOR.MAIN,
    },
    // listItemSubtitle: {
    //     color: 'red',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    // title //
    h1: {
        fontSize: '1.5em',
        fontWeight: 'bold',
    },
    // text color //
    activeText: {
        color: COLOR.ACTIVE,
    },
    inactiveText: {
        color: COLOR.INACTIVE,
    },
})
