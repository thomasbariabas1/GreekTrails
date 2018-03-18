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

class SavedTrails extends Component {
    static navigationOptions = {
        title: 'SavedTrails',
    };

    render() {
        return <View>
            <Text style={styles.red}>
                hello SavedTrails
            </Text>


        </View>
    }
}




export default SavedTrails