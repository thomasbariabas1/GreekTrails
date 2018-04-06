import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {Slider} from 'react-native-elements'

const _onChange = (name,value,onchange)=>{
    onchange({[name]:value})
}
class Filters extends Component{

    render(){
        const {onChange,values} =this.props
        return(<View>
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                <Slider
                    value={values['range']?values['range']:0}
                    onValueChange={(value) => _onChange('range',value,onChange)} />
                <Text>Value: {values['range']?values['range']:0}</Text>
            </View>
        </View>)
    }
}
export default Filters
