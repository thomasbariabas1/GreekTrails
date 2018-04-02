/**
 * Created by thoriampas on 3/18/2018.
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import MapView from '../../../../../components/MapView'
import {Header} from 'react-native-elements'
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
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;

        return ({
            title: 'Recording',
            header: <Header
                leftComponent={{icon: 'menu', color: '#fff', onPress: () => navigation.navigate('DrawerToggle')}}
                centerComponent={{ text: 'Record Trail', style: { color: '#fff' ,fontSize: 20,
                    fontWeight: 'bold'} }}
            />

        })
    }
    state = { routeCoordinates: [] }
    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position) =>{ alert(position)}
            ,
            (error) => alert(error.message),
            {}
        )


        this.watchID = navigator.geolocation.watchPosition((position) => {
            },
            (error) => {},
            {});
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
    render() {
        return <View>
            <MapView styles={mapStyles}/>

        </View>
    }
}





export default RecordingView;