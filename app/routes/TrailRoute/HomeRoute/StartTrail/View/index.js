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

class StartTrailView extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return <View>
            <Text style={styles.red}>
                hello worldgjhgjhg
            </Text>
            <Text style={styles.red}>
                hello worldgjhgjhg
            </Text>

            <Text style={styles.red}>
                hello worldgjhgjhg
            </Text>


            <Button title="Click ME" onPress={() =>this.props.navigation.navigate('Details')}/>

        </View>
    }
}




export default StartTrailView;
