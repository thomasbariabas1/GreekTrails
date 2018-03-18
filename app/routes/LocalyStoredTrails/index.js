/**
 * Created by thoriampas on 3/18/2018.
 */
import RecordedTrails from './RecordedTrails/container'
import SsvedTrails from './SavedTrails/container'
import {StackNavigator,TabNavigator} from 'react-navigation';

export default StackNavigator({
       LocallySavedTrails:{
           screen:TabNavigator({
                   RecordedTrails: {
                       screen: RecordedTrails,
                   },
                   SsvedTrails: {
                       screen: SsvedTrails,
                   }
               },
               {
                   initialRouteName: 'RecordedTrails',
               },

           )
       }
    },
    {
        initialRouteName: 'LocallySavedTrails',
    },

);
