/**
 * Created by thoriampas on 3/18/2018.
 */


import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

class TrailsDetailsView extends Component {
    static navigationOptions = {
        title: 'TrailsDetails',
    };
    render() {
        console.log('props', this.props)
        return <View>
            <Text >
               TrailsDetails
            </Text>

            <Button title="Click ME" onPress={() =>null}/>

        </View>
    }
}




export default TrailsDetailsView;
