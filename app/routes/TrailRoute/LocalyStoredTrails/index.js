/**
 * Created by thoriampas on 3/18/2018.
 */
import RecordedTrails from './RecordedTrails/container'
import SsvedTrails from './SavedTrails/container'
import Details from './SavedTrails/Details/container'
import {StackNavigator,TabNavigator} from 'react-navigation';

export default StackNavigator({
       LocallySavedTrails:{
           screen:TabNavigator({
                   SsvedTrails: {
                       screen: SsvedTrails,
                   },
                   RecordedTrails: {
                       screen: RecordedTrails,
                   },

               },
               {
                   initialRouteName: 'SsvedTrails',
               },

           )
       },
        TrailsDetailsSaved: {
            screen: Details,
        },
    },
    {
        initialRouteName: 'LocallySavedTrails',
    },

);
