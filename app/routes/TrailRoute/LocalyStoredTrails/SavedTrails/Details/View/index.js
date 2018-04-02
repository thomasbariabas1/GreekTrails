/**
 * Created by thoriampas on 3/18/2018.
 */


import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import MapView from '../../../../../../components/MapView'

import {geometriesFromTrail} from '../../../../../../lib/utils'

class TrailsDetailsView extends Component {
    static navigationOptions = {
        title: 'TrailsDetailsSaved',
    };
    componentWillMount(){
        const geometries = geometriesFromTrail([this.props.navigation.state.params.data])

        this.setState({
            polyline:geometries.polylines,
            points:geometries.points,
        })
    }
    render() {

        return <View style={{flex: 1, flexDirection: 'column'}}>

            <MapView polylines={this.state.polyline} points={this.state.points}/>
        </View>
    }
}

export default TrailsDetailsView;
