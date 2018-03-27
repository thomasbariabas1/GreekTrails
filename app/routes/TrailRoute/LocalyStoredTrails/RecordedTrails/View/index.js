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

class RecordedTrails extends Component {
    static navigationOptions = {
        title: 'RecordedTrails',
    };

    render() {
        return <View>
            <Text style={styles.red}>
                hello RecordedTrails
            </Text>


        </View>
    }
}




export default RecordedTrails