/**
 * Created by thoriampas on 3/18/2018.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import styles from './style'
import {Header,SearchBar } from 'react-native-elements'

class RecordedTrails extends Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;

        return ({
            title: 'RecordedTrails',
            header:<Header
                leftComponent={{ icon: 'menu', color: '#fff',onPress:()=> navigation.navigate('DrawerToggle') }}
                centerComponent={{ text: 'LocalTrails', style: { color: '#fff' ,fontSize: 20,
                    fontWeight: 'bold'} }}
            />

        })
    }

    render() {
        return <View>
            <Text style={styles.red}>
                hello RecordedTrails
            </Text>


        </View>
    }
}




export default RecordedTrails