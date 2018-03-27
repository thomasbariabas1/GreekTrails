/**
 * Created by thoriampas on 3/24/2018.
 */
import React, {Component} from 'react'
import {View, Button} from 'react-native'


class CustomDrawerItems extends Component {


    render() {
        const {items, activeItemKey} = this.props

        return (
            <View style={{marginTop: 200}}>
                {items.map(item => {
                    return <Button key={item.routeName} onPress={() => {
                        return activeItemKey !== item.routeName ?
                            this.props.navigation.navigate(item.routeName) :
                            this.props.navigation.navigate('DrawerClose')
                    }
                    } title={item.routeName}/>
                })}
            </View>
        )
    }
}

export default CustomDrawerItems