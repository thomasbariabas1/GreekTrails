/**
 * Created by thoriampas on 3/18/2018.
 */
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';

import HomeReducer from '../routes/HomeRoute/state'; //Import the reducer
import RecordingReducer from '../routes/RecordingRoute/state'

const rootReducer = combineReducers( {
    HomeReducer,
    RecordingReducer
})
// Connect our store to the reducers
export default createStore(rootReducer, applyMiddleware(thunk));