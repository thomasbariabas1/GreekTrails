/**
 * Created by thoriampas on 3/18/2018.
 */


import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import MapView from '../../../../../../components/MapView'
import parserWKT from 'wellknown'


class TrailsDetailsView extends Component {
    static navigationOptions = {
        title: 'TrailsDetailsSaved',
    };
    componentWillMount(){
        const geometries =parserWKT(this.props.navigation.state.params.data.node['Leaflet _trailstobechecked']?
            this.props.navigation.state.params.data.node['Leaflet _trailstobechecked']:
            this.props.navigation.state.params.data.node.Leaflet_trails).geometries
        this.setState({
            polyline:geometries.filter(geometry=>{
                return geometry.type==='LineString'
            }).map(linestring=>{
                return  linestring.coordinates.map(co=>{
                    return{latitude:co[1],longitude:co[0]}
                })
            })[0],

            points:geometries.filter(geometry=>{
                return geometry.type==='Point'
            }).map(point=>{
                return {latitude:point.coordinates[1],longitude:point.coordinates[0]}
            }),
        })
    }
    render() {

        return <View style={{flex: 1, flexDirection: 'column'}}>

            <MapView polyline={this.state.polyline} points={this.state.points}/>
        </View>
    }
}


export default TrailsDetailsView;
