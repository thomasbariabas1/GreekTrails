/**
 * Created by thoriampas on 4/2/2018.
 */
import React,{Component} from 'react'
import CustomDrawerItems from '../CustomDrawerItems'
import styles from './styles'
import Backgroundimage from '../../static/images/drawerBackground.jpg'
import {View,ImageBackground} from 'react-native'

class CustomDrawer extends Component{

    render() {
        const {items,activeItemKey,navigation:{navigate}} = this.props

        return (<ImageBackground source={Backgroundimage} style={styles.backgroundImage} >
            {items.map(item=>{
                return <CustomDrawerItems key={item.routeName} item={item} activeItemKey={activeItemKey} navigate={navigate}/>
            })}
        </ImageBackground>)
    }
}


export default CustomDrawer