/**
 * Created by thoriampas on 3/25/2018.
 */
import React,{Component} from 'react'
import {View,Text} from 'react-native'
import styles from './style'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

class FilterBar extends Component{


    render(){
        return (
            <View style={styles.filters}>
                <Text style={styles.title}>
                    Home
                </Text>
                <FontAwesomeIcons name={'filter'} size={25} />
            </View>
        )
    }
}

export default FilterBar