/**
 * Created by thoriampas on 3/18/2018.
 */
import Recording from './RecordingView/container'
import Saving from './SaveView/container'
import {StackNavigator} from 'react-navigation';



export default StackNavigator({
        RecordingView: {
            screen: Recording,
        },
        SaveView: {
            screen: Saving,
        }
    },
    {
        initialRouteName: 'RecordingView',
    },

);
