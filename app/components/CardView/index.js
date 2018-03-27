/**
 * Created by thoriampas on 3/19/2018.
 */
import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity, RefreshControl} from 'react-native'
import {Card, ListItem, Button} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';


class CardView extends Component {

    state = {
        refreshing: false
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        setTimeout(() => this.setState({refreshing: false}), 2000)
    }

    render() {

        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}/>}
            >
                {this.props.data.map((t, i) => {
                    return (
                        <TouchableOpacity   key={i} onPress={this.props.onPress(t, i)}>
                            <Card
                                image={{uri: t.node.Image.src}}
                                key={i}
                            >
                                <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
                                                 >
                                    <Text style={{flex: 2, marginBottom: 10}}>
                                        {t.node.Title}
                                    </Text>

                                    {this.props.hasFavoriteSelection &&
                                    <Ionicons onPress={() => this.props.onFavouriteTrailsSave(t)}
                                              name={(this.props.favouriteTrails.filter(trail => trail.node['Entity ID'] === t.node['Entity ID']).length > 0) ? 'md-heart' : 'md-heart-outline'}
                                              size={50}/>}
                                </TouchableOpacity >
                            </Card>
                        </TouchableOpacity>)
                })
                }

            </ScrollView>
        )
    }
}
CardView.defaultProps = {
    favouriteTrails: [],
    data: []
}

export default CardView