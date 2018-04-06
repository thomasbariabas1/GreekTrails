/**
 * Created by thoriampas on 3/24/2018.
 */
import React, {Component} from 'react'
import {Button} from 'react-native-elements'
import styles from './styles'
    

class CustomDrawerItems extends Component {


    render() {
        const {item, activeItemKey,navigate} = this.props

        return (

                <Button key={item.routeName} buttonStyle={styles.drawerItem} raised small onPress={() => {

                        return activeItemKey !== item.routeName ?
                           navigate(item.routeName) :
                            navigate('DrawerClose')
                    }
                    } title={item.routeName}/>

        )
    }
}
export default CustomDrawerItems

