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
import CardView from '../../../../../components/CardView'

class SavedTrails extends Component {
    static navigationOptions = {
        title: 'SavedTrails',
    };
    onPress = (t, i) => (props) => {
        this.props.navigation.navigate('TrailsDetailsSaved', {data: t})
    }

    render() {
        return <View>

            <CardView onPress={this.onPress} data={this.props.favouriteTrails}/>
        </View>
    }
}




export default SavedTrails