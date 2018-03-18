/**
 * Created by thoriampas on 3/18/2018.
 */
import React from 'react'
import HomeRoute from './HomeRoute'
import RecordingRoute from './RecordingRoute'
import LocalySavedTrails from './LocalyStoredTrails'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

export default TabNavigator({
        Home: {
            screen: HomeRoute,
        },
        LocalTrails:{
          screen:LocalySavedTrails,
        },
        Recording: {
            screen: RecordingRoute
        }
    },

    {

        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Recording') {
                    iconName = `ios-radio-button-on${focused ? '' : '-outline'}`;
                }else if (routeName === 'LocalTrails') {
                    iconName = `md-heart${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    },
    {
        initialRouteName: 'Home',
    },

);
