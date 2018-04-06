/**
 * Created by thoriampas on 3/18/2018.
 */
import {createAction} from 'redux-actions'
import {AsyncStorage} from 'react-native'
import FetchTrails from '../../../Networking/API/FetchTrails'
import merge from 'ramda/src/merge'
const constants ={}
constants.FETCH_TRAILS_PENDING = 'trails/FETCH_TRAILS_PENDING'
constants.FETCH_TRAILS_SUCCESS = 'trails/FETCH_TRAILS_SUCCESS'
constants.FETCH_TRAILS_FAILURE = 'trails/FETCH_TRAILS_FAILURE'
constants.ON_SAVE_TRAIL_TO_FAVOURITE = 'trails/ON_SAVE_TRAIL_TO_FAVOURITE'
constants.ON_FILTERS_CHANGE = 'trails/ON_FILTERS_CHANGE'

const fetchTrailsPending = createAction(constants.FETCH_TRAILS_PENDING)
const fetchTrailsSuccess = createAction(constants.FETCH_TRAILS_SUCCESS)
const fetchTrailsFailure = createAction(constants.FETCH_TRAILS_FAILURE)
const onFiltersChange = createAction(constants.ON_FILTERS_CHANGE)
const onSaveTrailToFavouriteAction = createAction(constants.ON_SAVE_TRAIL_TO_FAVOURITE)

const fetchTrails = () => async(dispatch,getSTate)=>{
    dispatch(fetchTrailsPending())
    try{
        const response = await FetchTrails()
        dispatch(fetchTrailsSuccess(response.data.nodes))
    }catch (error){
        dispatch(fetchTrailsFailure())
    }

}
const setFavoriteTrails = () => async (dispatch,getSTate)=>{
    try {
        let value = await AsyncStorage.getItem('FavouriteTrails');
        if(value!==null) {
            dispatch(onSaveTrailToFavouriteAction(JSON.parse(value)))
        }else{
            dispatch(onSaveTrailToFavouriteAction([]))

        }
    } catch (error) {
        // Error saving data
        console.log(error)

    }
}
const onSaveTrailToFavourite = (trail)=>async(dispatch,getState) =>{


    try {
        let value = await AsyncStorage.getItem('FavouriteTrails');
        value = JSON.parse(value)

        if (value !== null){
            if(value.filter(tr=>tr.node['Entity ID']===trail.node['Entity ID']).length>0) {


                value = value.filter(tr=> tr.node['Entity ID'] !== trail.node['Entity ID'])
            } else {
                value.push(trail)

            }
        }else{
            value = [trail]
        }

        await AsyncStorage.setItem('FavouriteTrails', JSON.stringify(value));
        dispatch(onSaveTrailToFavouriteAction(value))
    } catch (error) {
        // Error saving data
        console.log(error)

    }
}

export const actions ={
    fetchTrails,
    onSaveTrailToFavourite,
    setFavoriteTrails,
    onFiltersChange
}

const initialState = {
        data:[],
        filters:{}
}

const reducer = (state=initialState,action)=>{

    switch(action.type){
        case constants.FETCH_TRAILS_PENDING:
            return state
        case constants.FETCH_TRAILS_SUCCESS:
            return merge(state,{data:action.payload})
        case constants.FETCH_TRAILS_FAILURE:
            return state
        case constants.ON_SAVE_TRAIL_TO_FAVOURITE:
            return merge(state,{favouriteTrails:action.payload})
        case constants.ON_FILTERS_CHANGE:
            return merge(state,{filters:{...state.filters,...action.payload}})
        default:
           return state
    }
}
export default reducer
