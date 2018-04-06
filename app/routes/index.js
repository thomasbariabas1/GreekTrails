/**
 * Created by thoriampas on 3/18/2018.
 */
import React from 'react'
import TrailRoute from './TrailRoute'

import CustomDrawer from '../components/CustomDrawer'
import {DrawerNavigator} from 'react-navigation';

export default DrawerNavigator(
    {
        Home: {
            screen: TrailRoute,
        },
        LocalTrails: {
            screen: ()=>{},

        },
        Recording: {
            screen: ()=>{},


        }
    },
    {
        initialRouteName: 'Home',
        contentComponent: CustomDrawer
    },
);
