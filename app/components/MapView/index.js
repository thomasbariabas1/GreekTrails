/**
 * Created by thoriampas on 3/19/2018.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polyline, Marker, Callout} from 'react-native-maps';
import {Icon} from 'react-native-elements'
import Video from "expo/src/av/Video";

class Map extends Component {

    componentWillMount() {
        this.setState({openActions: false})
    }

    toggleActions = () => {
        this.setState({openActions: !this.state.openActions})
    }

    render() {
        const {polylines, points} = this.props
        const initialRegion_latitude = points.length>0?points[0].coordinates[0].latitude:0
        const initialRegion_longitude = points.length>0?points[0].coordinates[0].longitude:0
        return (
            <View style={this.props.styles.container}>
                <MapView
                    showsUserLocation
                    provider={PROVIDER_GOOGLE}
                    style={this.props.styles.map}
                    initialRegion={{
                        latitude: initialRegion_latitude,
                        longitude: initialRegion_longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    {polylines.map((polyline, i) => {
                        return <Polyline key={i + polyline+new Date()} coordinates={polyline}/>
                    })}

                    {points.map((point, i) => {
                        if (this.props.customMarker) {

                            return (point.coordinates.map(co => <Marker key={i + point.node.Title+new Date()}
                                                                        title={point.node.Title} coordinate={co}
                                                                        onCalloutPress={this.props.customMarker.onPress(point, i)}>
                                <Callout>
                                    {this.props.customMarker.component(point)}
                                </Callout>
                            </Marker>))
                        } else {

                            return point.coordinates.map((co,index )=> <Marker key={index + point.node.Description+new Date()}
                                                                       title={point.node.Title}
                                                                       description={point.node.Description}
                                                                       coordinate={co}/>)
                        }
                    })}
                </MapView>
                {this.props.actions && <View style={this.props.styles.actionsContainer}>
                    {this.state.openActions ? <View style={{flexDirection: 'column'}}>
                        {this.props.actions.map(action=><View key={action.name} style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon
                                raised
                                reverse
                                name={action.name}
                                type={action.type||'font-awesome'}
                                color={action.color||'#f50'}
                                onPress={action.onPress}/>
                        </View>)}
                    </View> : null

                    }

                    <Icon
                        raised
                        reverse
                        name='settings'
                        type='material-community'
                        color='grey'
                        onPress={this.toggleActions}/>
                </View>
                }
            </View>

        );
    }
}

Map.defaultProps = {
    polylines: [],
    points: [],
    styles: StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            zIndex: -1,
        },
        map: {
            ...StyleSheet.absoluteFillObject,
        },
        actionsContainer: {
            flex: 1,
            marginRight:20,
            marginBottom:20,
            justifyContent: 'flex-end',
        }
    })
}

export default Map