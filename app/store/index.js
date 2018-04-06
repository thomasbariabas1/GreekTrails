/**
 * Created by thoriampas on 3/18/2018.
 */
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';

import HomeReducer from '../routes/TrailRoute/HomeRoute/state'; //Import the reducer
import RecordingReducer from '../routes/TrailRoute/RecordingRoute/state'
import LocalyStoredReducer from '../routes/TrailRoute/LocalyStoredTrails/state'

const rootReducer = combineReducers( {
    HomeReducer,
    RecordingReducer,
    LocalyStoredReducer
})
// Connect our store to the reducers
export default createStore(rootReducer, applyMiddleware(thunk));