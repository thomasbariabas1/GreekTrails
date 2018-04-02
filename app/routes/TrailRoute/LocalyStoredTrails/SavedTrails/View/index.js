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
import {Header, SearchBar} from 'react-native-elements'

class SavedTrails extends Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;

        return ({
            title: 'SavedTrails',
            header: <Header
                leftComponent={{icon: 'menu', color: '#fff', onPress: () => navigation.navigate('DrawerToggle')}}
                centerComponent={{ text: 'LocalTrails', style: { color: '#fff' ,fontSize: 20,
                    fontWeight: 'bold'} }}
            />

        })
    }
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