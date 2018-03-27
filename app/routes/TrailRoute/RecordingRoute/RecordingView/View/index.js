/**
 * Created by thoriampas on 3/18/2018.
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import MapView from '../../../../../components/MapView'
import styles from './style'

const mapStyles = StyleSheet.create({
    container: {
        height: 600,
        width: 600,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

class RecordingView extends Component {
    static navigationOptions = {
        title: 'Recording',
    };

    render() {
        return <View>
            <MapView styles={mapStyles}/>

        </View>
    }
}




export default RecordingView;