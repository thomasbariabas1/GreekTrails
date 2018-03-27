/**
 * Created by thoriampas on 3/18/2018.
 */
import View from './View'
import compose from 'ramda/src/compose'
import connect from 'react-redux/lib/connect/connect'
import {actions} from '../state'

const mapStateToProps=(state)=>{
    return({
        ...state.HomeReducer
    })
}

const mapActionsToProps={
    ...actions
}

export default compose(
    connect(mapStateToProps, mapActionsToProps)
)(View)
