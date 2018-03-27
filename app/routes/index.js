/**
 * Created by thoriampas on 3/18/2018.
 */
import React from 'react'
import TrailRoute from './TrailRoute'
import CustomDrawerItems from '../components/CustomDrawerItems'
import { DrawerNavigator} from 'react-navigation';

export default DrawerNavigator(
    {
        Home: {
            screen: TrailRoute,
        },

    },
    {
        initialRouteName: 'Home',
        contentComponent: props => <CustomDrawerItems {...props} />

    },

);
