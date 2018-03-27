/**
 * Created by thoriampas on 3/24/2018.
 */
import {Get} from '../PerformsNetworking'


const FetchTrails = () =>{
    const url = '/trail-webservice'
    return Get({url})
}

export default FetchTrails