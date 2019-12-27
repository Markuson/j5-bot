import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../screens/MainScreen'

const MainNavigator = createStackNavigator({
    Main: {
        screen: MainScreen
    }
},
{
    headerMode: 'none',
})

export default createAppContainer(MainNavigator);