/**
 * Created by thoriampas on 3/18/2018.
 */


import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import CardView from '../../../../../components/CardView'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapView from "../../../../../components/MapView";
import parserWKT from 'wellknown'
import {Header} from 'react-native-elements'

class HomeView extends Component {
    state = {
        data: [],
        trailView: 'list'

    }
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;

        return ({
            title: 'Home',
            header:<Header
                leftComponent={{ icon: 'menu', color: '#fff',onPress:()=> navigation.navigate('DrawerToggle') }}
                centerComponent={{ text: 'HOME', style: { color: '#fff' ,marginLeft:60,fontSize: 20,
                    fontWeight: 'bold'} }}
                rightComponent={ <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Ionicons name={params.trailView === 'map' ? 'ios-map' : 'ios-map-outline'} size={25}
                              style={{marginRight: 20}} onPress={() => params.onSetTrailView('map')}/>
                    <Ionicons name={params.trailView === 'list' ? 'ios-list-box' : 'ios-list'} size={25}
                              style={{marginRight: 20}} onPress={() => params.onSetTrailView('list')}/>

                    <FontAwesomeIcons name={'filter'} size={25} />
                </View>}
            />

        })
    }


    componentWillMount() {
        if (!(this.props.data.length > 0)) {
            this.props.fetchTrails()
        }
        this.props.setFavoriteTrails()
        this.props.navigation.setParams({
            onSetTrailView: this.onSetTrailView,
            trailView: this.state.trailView
        });
    }

    componentDidMount() {
        this.setState({
            data: this.props.data,
        })

    }

    componentWillReceiveProps(nextProps) {
        this.setState({data: nextProps.data})
    }

    onPress = (t, i) => (props) => {
        this.props.navigation.navigate('Details', {data: t})
    }
    onSetTrailView = (viewType) => {
        this.props.navigation.setParams({
            trailView: viewType
        });
        this.setState({trailView: viewType})
    }
    onFilterChange = () => {

    }
    onResultsViewChange = () => {

    }

    render() {
        const geometries = this.state.data.map(data => {

                return {
                    ...data,
                    coordinates: parserWKT(data.node['Leaflet _trailstobechecked'] ?
                        data.node['Leaflet _trailstobechecked'] :
                        data.node.Leaflet_trails).geometries
                }
            }
        )
        const trailPolylines = geometries.map(trail => {
            return trail.coordinates.filter(tr => tr.type === 'LineString').map(linestring => {
                return linestring.coordinates.map(co => {
                    return {latitude: co[1], longitude: co[0]}
                })
            })[0]
        })
        const trailPoints = geometries.map(trail => {
            return {
                ...trail, ...{
                    coordinates: trail.coordinates.filter(tr => tr.type === 'Point').map(point => {
                        return {latitude: point.coordinates[1], longitude: point.coordinates[0]}
                    })
                }
            }
        })

        const customMarker = {
            onPress: this.onPress,
            component: (data) =>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 2, marginBottom: 10}}>
                        {data.node.Title}
                    </Text>

                    {this.props.favouriteTrails &&
                    <Ionicons onPress={() => this.props.onSaveTrailToFavourite(data)}
                              name={(this.props.favouriteTrails.filter(trail => trail.node['Entity ID'] === data.node['Entity ID']).length > 0) ? 'md-heart' : 'md-heart-outline'}
                              size={50}/>}
                </View >
        }

        const actions = [
            {
                name:'crosshairs-gps',
                type:'material-community',
                onPress:()=>{}
            },
            {
                name:'comment-processing-outline',
                type:'material-community',
                onPress:()=>{}

            }
        ]
        return <View  style={{ flex: 1, flexDirection: 'column'}}>
            {this.state.trailView === 'list' ? <CardView onPress={this.onPress}
                                                         data={this.state.data}
                                                         onFavouriteTrailsSave={this.props.onSaveTrailToFavourite}
                                                         hasFavoriteSelection
                                                         favouriteTrails={this.props.favouriteTrails}/> :
                <View style={{ flex: 1, flexDirection: 'column'}}>
                    <MapView polylines={trailPolylines}
                             points={trailPoints}
                             customMarker={customMarker}
                             actions={actions}
                    />
                </View>
            }
        </View>
    }
}
HomeView.defaultProps = {
    data: []
}
export default HomeView;
