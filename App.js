/**
 * Created by thoriampas on 3/18/2018.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './app/store'; //Import the store
import {AppRegistry} from 'react-native'
import Tracker from './app/services/Tracker'
import  RootStack from './app/routes'

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}

AppRegistry.registerHeadlessTask('Tracker', () => Tracker)
