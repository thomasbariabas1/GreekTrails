/**
 * Created by thoriampas on 3/18/2018.
 */

import View from './List/container'
import Details from './Details/container'
import StartTrail from './StartTrail/container'
import {StackNavigator} from 'react-navigation';



export default StackNavigator({
        Home: {
            screen: View,
        },
        Details: {
            screen: Details,
        },
        StartTrail:{
            screen:StartTrail
        }
    },
    {
        initialRouteName: 'Home',
    },

);



